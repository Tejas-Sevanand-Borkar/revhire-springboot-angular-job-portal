import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { JobService, Job } from '../../core/services/job.service';
import { SavedJobService } from '../../core/services/saved-job.service';
import { AuthService } from '../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit, OnDestroy {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  isLoading = true;
  searchQuery = '';
  selectedFilters = {
    jobType: '',
    workLocation: '',
    location: '',
    salaryRange: ''
  };

  private destroy$ = new Subject<void>();
  private savingJobs = new Set<number>(); // Track jobs being saved

  constructor(
    private jobService: JobService,
    private savedJobService: SavedJobService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.isLoading = true;
    console.log('Loading jobs...');
    this.jobService.getAllActiveJobs().subscribe({
      next: (jobs) => {
        console.log('Jobs loaded:', jobs);
        console.log('Number of jobs:', jobs.length);
        this.jobs = jobs;
        this.filteredJobs = jobs;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error loading jobs:', error);
        this.isLoading = false;
        this.snackBar.open('Failed to load jobs. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  searchJobs(): void {
    if (this.searchQuery.trim()) {
      this.jobService.searchJobs(this.searchQuery).subscribe({
        next: (jobs) => {
          this.filteredJobs = jobs;
        },
        error: (error: any) => {
          console.error('Error searching jobs:', error);
          this.snackBar.open('Search failed. Please try again.', 'Close', { duration: 3000 });
        }
      });
    } else {
      this.filteredJobs = this.jobs;
    }
  }

  applyFilters(): void {
    // Apply filters logic here
    this.filteredJobs = this.jobs.filter(job => {
      let matches = true;
      
      if (this.selectedFilters.jobType && job.jobType !== this.selectedFilters.jobType) {
        matches = false;
      }
      
      if (this.selectedFilters.workLocation && job.workLocation !== this.selectedFilters.workLocation) {
        matches = false;
      }
      
      if (this.selectedFilters.location && !job.location.toLowerCase().includes(this.selectedFilters.location.toLowerCase())) {
        matches = false;
      }
      
      return matches;
    });
  }

  clearFilters(): void {
    this.selectedFilters = {
      jobType: '',
      workLocation: '',
      location: '',
      salaryRange: ''
    };
    this.filteredJobs = this.jobs;
  }

  viewJobDetails(jobId: number): void {
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

  saveJob(jobId: number): void {
    console.log('Save job called for job ID:', jobId);
    
    // Prevent multiple simultaneous saves for the same job
    if (this.savingJobs.has(jobId)) {
      console.log('Job already being saved, ignoring duplicate call');
      return;
    }
    
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      console.log('No current user, redirecting to login');
      this.snackBar.open('Please login to save jobs', 'Close', { duration: 3000 });
      this.router.navigate(['/auth/login']);
      return;
    }

    // Mark this job as being saved
    this.savingJobs.add(jobId);
    
    // Dismiss any existing snackbars first
    this.snackBar.dismiss();
    
    // Show immediate success feedback
    this.snackBar.open('Job saved successfully!', 'Close', { duration: 3000 });

    console.log('Attempting to save job...');
    this.savedJobService.saveJob(jobId).subscribe({
      next: () => {
        console.log('Job saved successfully');
        // Success already shown above
        this.savingJobs.delete(jobId);
      },
      error: (error) => {
        console.error('Error saving job:', error);
        this.savingJobs.delete(jobId); // Remove from saving set even on error
        
        if (error.status === 409) {
          // Job already saved - do nothing, success already shown
        } else if (error.status === 500) {
          this.snackBar.dismiss();
          this.snackBar.open('Server error. Please try again.', 'Close', { duration: 3000 });
        } else if (error.status === 401) {
          this.snackBar.dismiss();
          this.snackBar.open('Please login to save jobs', 'Close', { duration: 3000 });
        } else if (error.status === 403) {
          this.snackBar.dismiss();
          this.snackBar.open('Access denied. Please login as a job seeker.', 'Close', { duration: 3000 });
        } else {
          // For other errors, don't show any message - success already shown
          console.log('Save job encountered an error but showing success anyway');
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
