import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService, Job } from '../../core/services/job.service';
import { ApplicationService } from '../../core/services/application.service';
import { AuthService, AuthResponse } from '../../core/services/auth.service';
import { JobSeekerProfileService } from '../../core/services/job-seeker-profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SavedJobService } from '../../core/services/saved-job.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  job: Job | null = null;
  isLoading = true;
  isApplying = false;
  isSaved = false;
  hasAlreadyApplied = false;
  currentUser: AuthResponse | null = null;
  userProfile: any = null;
  resumeFile: File | null = null;
  showResumeUpload = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
    private applicationService: ApplicationService,
    private authService: AuthService,
    private savedJobService: SavedJobService,
    private profileService: JobSeekerProfileService,
    private snackBar: MatSnackBar,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    
    if (jobId) {
      this.loadJobDetails(jobId);
      this.checkIfJobIsSaved(jobId);
      this.checkApplicationStatus(jobId);
      if (this.currentUser) {
        this.loadUserProfile();
      }
    } else {
      this.snackBar.open('Invalid job ID', 'Close', { duration: 3000 });
      this.router.navigate(['/seeker/jobs']);
    }
  }

  loadJobDetails(jobId: number): void {
    this.jobService.getJobById(jobId).subscribe({
      next: (job) => {
        this.job = job;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading job details:', error);
        this.snackBar.open('Failed to load job details', 'Close', { duration: 3000 });
        this.router.navigate(['/seeker/jobs']);
      }
    });
  }

  checkIfJobIsSaved(jobId: number): void {
    if (!this.currentUser) return;
    
    this.savedJobService.checkIfJobSaved(jobId).subscribe({
      next: (response) => {
        this.isSaved = response.saved;
      },
      error: () => {
        this.isSaved = false;
      }
    });
  }

  checkApplicationStatus(jobId: number): void {
    if (!this.currentUser) return;
    
    this.applicationService.getApplicationsByJobSeeker(this.currentUser.userId).subscribe({
      next: (applications) => {
        this.hasAlreadyApplied = applications.some(app => app.jobId === jobId);
      },
      error: () => {
        // If we can't check, assume they haven't applied
        this.hasAlreadyApplied = false;
      }
    });
  }

  loadUserProfile(): void {
    if (!this.currentUser) return;
    
    this.profileService.getProfileByUserId(this.currentUser.userId).subscribe({
      next: (profile) => {
        this.userProfile = profile;
      },
      error: () => {
        // Profile not found, user needs to create one
        this.userProfile = null;
      }
    });
  }

  applyForJob(): void {
    if (!this.currentUser) {
      this.snackBar.open('Please login to apply for jobs', 'Close', { duration: 3000 });
      this.router.navigate(['/auth/login']);
      return;
    }

    if (!this.job) return;

    // Check if user has a profile
    if (!this.userProfile) {
      this.snackBar.open('Please create your profile first', 'Close', { duration: 3000 });
      this.router.navigate(['/seeker/profile']);
      return;
    }

    this.isApplying = true;
    
    // Use resume from profile if available
    const resumePath = this.userProfile.resumePath || undefined;
    
    this.applicationService.applyForJob(this.job.id, undefined, resumePath).subscribe({
      next: (application) => {
        this.isApplying = false;
        
        // Create notification for successful job application
        if (this.job?.title) {
          this.createJobApplicationNotification(this.job.title, application.id);
        }
        
        this.snackBar.open('Application submitted successfully!', 'Close', { duration: 3000 });
        this.router.navigate(['/seeker/applications']);
      },
      error: (error) => {
        this.isApplying = false;
        console.error('Error applying for job:', error);
        this.snackBar.open('Failed to submit application. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  applyWithResume(): void {
    if (!this.currentUser) {
      this.snackBar.open('Please login to apply for jobs', 'Close', { duration: 3000 });
      this.router.navigate(['/auth/login']);
      return;
    }

    if (!this.job) return;

    if (!this.resumeFile) {
      this.snackBar.open('Please select a resume file', 'Close', { duration: 3000 });
      return;
    }

    this.isApplying = true;
    
    this.applicationService.applyWithResume(this.job.id, this.resumeFile).subscribe({
      next: (application) => {
        this.isApplying = false;
        this.snackBar.open('Application submitted successfully with resume!', 'Close', { duration: 3000 });
        this.router.navigate(['/seeker/applications']);
      },
      error: (error) => {
        this.isApplying = false;
        console.error('Error applying with resume:', error);
        this.snackBar.open('Failed to submit application. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  onResumeSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        this.snackBar.open('Please upload a PDF or Word document', 'Close', { duration: 3000 });
        return;
      }
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        this.snackBar.open('File size must be less than 5MB', 'Close', { duration: 3000 });
        return;
      }
      this.resumeFile = file;
    }
  }

  saveJob(): void {
    if (!this.currentUser) {
      this.snackBar.open('Please login to save jobs', 'Close', { duration: 3000 });
      this.router.navigate(['/auth/login']);
      return;
    }

    if (!this.job) return;

    if (this.isSaved) {
      this.savedJobService.unsaveJob(this.job.id).subscribe({
        next: () => {
          this.isSaved = false;
          this.snackBar.open('Job removed from saved jobs', 'Close', { duration: 3000 });
        },
        error: (error) => {
          console.error('Error unsaving job:', error);
          if (error.status === 409) {
            this.snackBar.open('Job was not saved', 'Close', { duration: 3000 });
          } else if (error.status === 500) {
            this.snackBar.open('Server error. Please try again.', 'Close', { duration: 3000 });
          } else {
            this.snackBar.open('Failed to remove job from saved jobs', 'Close', { duration: 3000 });
          }
        }
      });
    } else {
      // Show immediate success feedback
      this.snackBar.open('Job saved successfully!', 'Close', { duration: 3000 });
      
      this.savedJobService.saveJob(this.job.id).subscribe({
        next: () => {
          this.isSaved = true;
          // Success already shown above
        },
        error: (error) => {
          console.error('Error saving job:', error);
          if (error.status === 409) {
            // Job already saved - do nothing, success already shown
            this.isSaved = true; // Update UI to reflect it's already saved
          } else if (error.status === 500) {
            this.snackBar.open('Server error. Please try again.', 'Close', { duration: 3000 });
          } else if (error.status === 401) {
            this.snackBar.open('Please login to save jobs', 'Close', { duration: 3000 });
          } else if (error.status === 403) {
            this.snackBar.open('Access denied. Please login as a job seeker.', 'Close', { duration: 3000 });
          } else {
            this.snackBar.open('Failed to save job', 'Close', { duration: 3000 });
          }
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/seeker/jobs']);
  }

  navigateToJobs(): void {
    this.router.navigate(['/seeker/jobs']);
  }

  getJobTypeLabel(jobType: string): string {
    const typeMap: { [key: string]: string } = {
      'FULL_TIME': 'Full Time',
      'PART_TIME': 'Part Time',
      'CONTRACT': 'Contract',
      'INTERNSHIP': 'Internship',
      'FREELANCE': 'Freelance'
    };
    return typeMap[jobType] || jobType;
  }

  getWorkLocationLabel(workLocation: string): string {
    const locationMap: { [key: string]: string } = {
      'ON_SITE': 'On Site',
      'REMOTE': 'Remote',
      'HYBRID': 'Hybrid'
    };
    return locationMap[workLocation] || workLocation;
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

  getPostedDate(postedDate: string): string {
    const date = new Date(postedDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  }

  getSkillsArray(skills?: string): string[] {
    if (!skills) return [];
    return skills.split(',').map(skill => skill.trim());
  }

  createJobApplicationNotification(jobTitle: string, applicationId: number): void {
    if (!this.currentUser) return;
    
    this.notificationService.createJobApplicationNotification(
      this.currentUser.userId,
      jobTitle,
      applicationId
    ).subscribe({
      next: (notification) => {
        console.log('Job application notification created:', notification);
        // Update unread count
        this.notificationService.updateUnreadCount(1);
      },
      error: (error) => {
        console.error('Error creating job application notification:', error);
      }
    });
  }
}
