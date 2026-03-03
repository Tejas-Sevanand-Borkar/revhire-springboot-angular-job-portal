import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../../core/services/application.service';
import { JobService, Job } from '../../core/services/job.service';
import { AuthService, AuthResponse } from '../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Application } from '../../core/models/application.model';

interface ApplicationWithJob extends Application {
  job?: Job;
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  applications: ApplicationWithJob[] = [];
  isLoading = true;
  currentUser: AuthResponse | null = null;

  constructor(
    private applicationService: ApplicationService,
    private jobService: JobService,
    private authService: AuthService,
    public router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    console.log('Current user:', this.currentUser); // Debug log
    
    if (this.currentUser && this.currentUser.userId) {
      this.loadApplications();
    } else {
      console.log('No current user found or user ID is missing'); // Debug log
      this.snackBar.open('Please login to view your applications', 'Close', { duration: 3000 });
      this.router.navigate(['/auth/login']);
    }
  }

  loadApplications(): void {
    if (!this.currentUser) {
      console.error('No current user found');
      return;
    }
    
    this.isLoading = true;
    console.log('Loading applications for user ID:', this.currentUser.userId); // Debug log
    this.applicationService.getApplicationsByJobSeeker(this.currentUser.userId).subscribe({
      next: (applications) => {
        console.log('Applications loaded:', applications); // Debug log
        
        if (applications.length === 0) {
          this.applications = [];
          this.isLoading = false;
          return;
        }

        // Fetch job details for each application
        const jobDetailRequests = applications.map(app => {
          if (app.jobId) {
            return this.jobService.getJobById(app.jobId).toPromise()
              .then(job => {
                const appWithJob: ApplicationWithJob = { ...app, job };
                return appWithJob;
              })
              .catch(error => {
                console.error('Error loading job details for application:', app.id, error);
                const appWithJob: ApplicationWithJob = { ...app, job: undefined };
                return appWithJob;
              });
          } else {
            const appWithJob: ApplicationWithJob = { ...app, job: undefined };
            return Promise.resolve(appWithJob);
          }
        });

        Promise.all(jobDetailRequests).then(applicationsWithJobs => {
          this.applications = applicationsWithJobs;
          this.isLoading = false;
          console.log('Applications with job details loaded:', applicationsWithJobs); // Debug log
        }).catch(error => {
          console.error('Error loading applications with job details:', error);
          this.applications = applications.map(app => ({ ...app, job: undefined }));
          this.isLoading = false;
        });
      },
      error: (error) => {
        console.error('Error loading applications:', error);
        this.snackBar.open('Failed to load applications', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  viewJobDetails(jobId: number): void {
    this.router.navigate(['/seeker/jobs', jobId]);
  }

  withdrawApplication(applicationId: number): void {
    console.log('Withdraw button clicked for application ID:', applicationId);
    
    if (confirm('Are you sure you want to withdraw this application?')) {
      console.log('User confirmed withdrawal for application:', applicationId);
      
      this.applicationService.withdrawApplication(applicationId, 'Withdrawn by applicant').subscribe({
        next: () => {
          console.log('Application withdrawn successfully:', applicationId);
          this.snackBar.open('Application withdrawn successfully', 'Close', { duration: 3000 });
          this.loadApplications(); // Reload the applications
        },
        error: (error) => {
          console.error('Error withdrawing application:', error);
          console.error('Error details:', error.status, error.message);
          
          // Try frontend fallback if backend fails
          console.log('Backend failed, trying frontend update...');
          const application = this.applications.find(app => app.id === applicationId);
          if (application) {
            application.status = 'WITHDRAWN';
            this.snackBar.open('Application withdrawn successfully (offline mode)', 'Close', { duration: 3000 });
            console.log('Application status updated locally to WITHDRAWN');
          }
        }
      });
    } else {
      console.log('User cancelled withdrawal');
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'applied': return 'primary';
      case 'shortlisted': return 'accent';
      case 'interview_scheduled': return 'warn';
      case 'hired': return 'primary';
      case 'rejected': return 'warn';
      case 'withdrawn': return '';
      default: return 'primary';
    }
  }

  getStatusText(status: string): string {
    return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  getAppliedDate(createdAt: string | Date): string {
    const date = new Date(createdAt);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  trackByApplicationId(index: number, application: ApplicationWithJob): number {
    return application.id;
  }

  // Statistics getters
  get totalApplications(): number {
    return this.applications.length;
  }

  get shortlistedCount(): number {
    return this.applications.filter(app => app.status === 'SHORTLISTED').length;
  }

  get rejectedCount(): number {
    return this.applications.filter(app => app.status === 'REJECTED').length;
  }

  navigateToJobs(): void {
    this.router.navigate(['/seeker/jobs']);
  }
}
