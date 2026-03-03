import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SavedJobService } from '../../core/services/saved-job.service';
import { AuthService, AuthResponse } from '../../core/services/auth.service';

export interface SavedJob {
  id: number;
  jobId: number;
  jobSeekerId: number;
  createdAt: string;
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    jobType: string;
    workLocation: string;
    salaryMin?: number;
    salaryMax?: number;
    description: string;
    createdAt: string;
  };
}

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.scss']
})
export class SavedJobsComponent implements OnInit {
  savedJobs: SavedJob[] = [];
  isLoading = true;
  currentUser: AuthResponse | null = null;

  constructor(
    private savedJobService: SavedJobService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.loadSavedJobs();
  }

  loadSavedJobs(): void {
    this.isLoading = true;
    this.savedJobService.getSavedJobs().subscribe({
      next: (jobs) => {
        console.log('Saved jobs loaded:', jobs);
        // Log salary data to debug
        jobs.forEach(job => {
          console.log('Job salary data:', {
            title: job.job.title,
            salaryMin: job.job.salaryMin,
            salaryMax: job.job.salaryMax,
            formattedSalary: this.formatSalary(job.job.salaryMin, job.job.salaryMax)
          });
        });
        this.savedJobs = jobs;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading saved jobs:', error);
        // Handle different error types
        if (error.status === 500) {
          this.snackBar.open('Server error loading saved jobs. Please try again later.', 'Close', { duration: 5000 });
        } else if (error.status === 401) {
          this.snackBar.open('Please login to view saved jobs', 'Close', { duration: 3000 });
        } else if (error.status === 403) {
          this.snackBar.open('Access denied. You must be a job seeker to view saved jobs.', 'Close', { duration: 3000 });
        } else {
          this.snackBar.open('Failed to load saved jobs', 'Close', { duration: 3000 });
        }
        this.isLoading = false;
        // Set empty array to prevent infinite loading
        this.savedJobs = [];
      }
    });
  }

  unsaveJob(jobId: number): void {
    this.savedJobService.unsaveJob(jobId).subscribe({
      next: () => {
        this.savedJobs = this.savedJobs.filter(savedJob => savedJob.job.id !== jobId);
        this.snackBar.open('Job removed from saved jobs', 'Close', { duration: 3000 });
      },
      error: () => {
        this.snackBar.open('Failed to remove job from saved jobs', 'Close', { duration: 3000 });
      }
    });
  }

  viewJobDetails(jobId: number): void {
    this.router.navigate(['/seeker/jobs', jobId]);
  }

  applyForJob(jobId: number): void {
    this.router.navigate(['/seeker/jobs', jobId]);
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
    // Force refresh - Updated to use INR format
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

  navigateToJobs(): void {
    this.router.navigate(['/seeker/jobs']);
  }

  getSavedDate(savedAt: string): string {
    const date = new Date(savedAt);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Saved 1 day ago';
    if (diffDays < 7) return `Saved ${diffDays} days ago`;
    if (diffDays < 30) return `Saved ${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `Saved ${Math.floor(diffDays / 30)} months ago`;
    return `Saved ${Math.floor(diffDays / 365)} years ago`;
  }
}
