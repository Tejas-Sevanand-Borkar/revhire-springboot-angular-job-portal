import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthResponse } from '../../core/services/auth.service';
import { ApplicationService } from '../../core/services/application.service';
import { SavedJobService } from '../../core/services/saved-job.service';
import { JobService, Job } from '../../core/services/job.service';
import { NotificationService } from '../../core/services/notification.service';

export interface DashboardStats {
  totalApplications: number;
  pendingApplications: number;
  shortlistedApplications: number;
  rejectedApplications: number;
  savedJobs: number;
  unreadNotifications: number;
  applicationsThisWeek: number;
  recommendedJobs: Job[];
}

@Component({
  selector: 'app-seeker-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class SeekerDashboardComponent implements OnInit {
  dashboardStats: DashboardStats = {
    totalApplications: 0,
    pendingApplications: 0,
    shortlistedApplications: 0,
    rejectedApplications: 0,
    savedJobs: 0,
    unreadNotifications: 0,
    applicationsThisWeek: 0,
    recommendedJobs: []
  };
  
  isLoading = true;
  currentUser: AuthResponse | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private applicationService: ApplicationService,
    private savedJobService: SavedJobService,
    private jobService: JobService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    console.log('Dashboard - Current user:', this.currentUser); // Debug log
    this.createWelcomeNotification();
    this.loadDashboardData();
  }

  createWelcomeNotification(): void {
    if (!this.currentUser) return;
    
    console.log('Creating welcome notification for seeker:', this.currentUser);
    
    // Check if we already created a welcome notification recently (avoid duplicates)
    const lastWelcomeKey = `last_welcome_${this.currentUser.userId}`;
    const lastWelcomeTime = localStorage.getItem(lastWelcomeKey);
    const now = new Date().getTime();
    
    // Only create welcome notification if it's been more than 24 hours since last one
    if (!lastWelcomeTime || (now - parseInt(lastWelcomeTime)) > 24 * 60 * 60 * 1000) {
      console.log('Creating new welcome notification...');
      this.notificationService.createWelcomeNotification(
        this.currentUser.userId,
        'Seeker',
        `${this.currentUser.firstName} ${this.currentUser.lastName}`
      ).subscribe({
        next: (notification) => {
          console.log('Welcome notification created for seeker:', notification);
          // Update unread count
          this.notificationService.updateUnreadCount(1);
          // Save timestamp to avoid duplicate notifications
          localStorage.setItem(lastWelcomeKey, now.toString());
        },
        error: (error) => {
          console.error('Error creating welcome notification:', error);
        }
      });
    } else {
      console.log('Welcome notification recently created, skipping...');
    }
  }

  loadDashboardData(): void {
    if (!this.currentUser) {
      this.isLoading = false;
      return;
    }

    // Load recommended jobs (highest salary jobs)
    this.loadRecommendedJobs();

    // Get real application data for the current user
    console.log('Dashboard - Loading applications for user ID:', this.currentUser.userId); // Debug log
    this.applicationService.getApplicationsByJobSeeker(this.currentUser.userId).subscribe({
      next: (applications) => {
        console.log('Dashboard - Applications loaded:', applications); // Debug log
        // Calculate statistics from real data
        this.dashboardStats.totalApplications = applications.length;
        this.dashboardStats.pendingApplications = applications.filter(app => 
          app.status === 'APPLIED' || app.status === 'INTERVIEW_SCHEDULED'
        ).length;
        this.dashboardStats.shortlistedApplications = applications.filter(app => app.status === 'SHORTLISTED').length;
        this.dashboardStats.rejectedApplications = applications.filter(app => app.status === 'REJECTED').length;
        
        // Get saved jobs count
        this.savedJobService.getSavedJobs().subscribe({
          next: (savedJobs) => {
            this.dashboardStats.savedJobs = savedJobs.length;
            this.isLoading = false;
          },
          error: () => {
            this.dashboardStats.savedJobs = 0;
            this.isLoading = false;
          }
        });
      },
      error: () => {
        // If API fails, set default values
        this.dashboardStats = {
          totalApplications: 0,
          pendingApplications: 0,
          shortlistedApplications: 0,
          rejectedApplications: 0,
          savedJobs: 0,
          unreadNotifications: 0,
          applicationsThisWeek: 0,
          recommendedJobs: []
        };
        this.isLoading = false;
      }
    });
  }

  loadRecommendedJobs(): void {
    console.log('Loading recommended jobs...');
    this.jobService.getAllActiveJobs().subscribe({
      next: (jobs) => {
        console.log('All jobs loaded:', jobs);
        // Filter jobs with salary information and sort by highest salary
        const jobsWithSalary = jobs.filter(job => job.salaryMin || job.salaryMax);
        console.log('Jobs with salary:', jobsWithSalary);
        
        if (jobsWithSalary.length === 0) {
          console.log('No jobs with salary information found');
          this.dashboardStats.recommendedJobs = [];
          return;
        }
        
        const sortedJobs = jobsWithSalary.sort((a, b) => {
          const salaryA = Math.max(a.salaryMin || 0, a.salaryMax || 0);
          const salaryB = Math.max(b.salaryMin || 0, b.salaryMax || 0);
          return salaryB - salaryA; // Descending order (highest first)
        });
        console.log('Sorted jobs by salary:', sortedJobs);
        
        // Take only the TOP 1 job with highest salary
        this.dashboardStats.recommendedJobs = [sortedJobs[0]];
        console.log('Final recommended job:', this.dashboardStats.recommendedJobs[0]);
      },
      error: (error) => {
        console.error('Error loading jobs:', error);
        this.dashboardStats.recommendedJobs = [];
      }
    });
  }

  navigateToJobs(): void {
    this.router.navigate(['/seeker/jobs']);
  }

  navigateToApplications(): void {
    this.router.navigate(['/seeker/applications']);
  }

  navigateToProfile(): void {
    this.router.navigate(['/seeker/profile']);
  }

  navigateToSavedJobs(): void {
    this.router.navigate(['/seeker/saved-jobs']);
  }

  viewJobDetails(jobId: number): void {
    this.router.navigate(['/seeker/jobs', jobId]);
  }

  getApplicationStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'applied': return 'primary';
      case 'shortlisted': return 'accent';
      case 'rejected': return 'warn';
      case 'hired': return 'primary';
      default: return 'primary';
    }
  }

  getProgressPercentage(): number {
    const total = this.dashboardStats.totalApplications;
    if (total === 0) return 0;
    return Math.round((this.dashboardStats.shortlistedApplications / total) * 100);
  }

  formatSalary(salaryMin?: number, salaryMax?: number): string {
    if (salaryMin && salaryMax) {
      return `₹${salaryMin.toLocaleString('en-IN')} - ₹${salaryMax.toLocaleString('en-IN')}`;
    } else if (salaryMin) {
      return `₹${salaryMin.toLocaleString('en-IN')}+`;
    } else if (salaryMax) {
      return `Up to ₹${salaryMax.toLocaleString('en-IN')}`;
    }
    return 'Salary not specified';
  }
}
