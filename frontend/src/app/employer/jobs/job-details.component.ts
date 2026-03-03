import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { JobService, Job } from '../../core/services/job.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  template: `
    <div class="job-details-container">
      <mat-toolbar class="job-toolbar">
        <button mat-icon-button (click)="goBack()">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Job Details</h1>
        <span class="spacer"></span>
        <button mat-raised-button color="primary" (click)="editJob()">
          <mat-icon>edit</mat-icon>
          Edit Job
        </button>
      </mat-toolbar>

      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner diameter="40"></mat-spinner>
        <p>Loading job details...</p>
      </div>

      <div *ngIf="!isLoading && job" class="job-content">
        <mat-card class="job-card">
          <mat-card-header>
            <div class="job-header">
              <h2>{{ job.title }}</h2>
              <mat-chip [color]="getStatusColor(job.active)" class="status-chip">
                {{ job.active ? 'Active' : 'Inactive' }}
              </mat-chip>
            </div>
          </mat-card-header>
          
          <mat-card-content>
            <div class="job-info-grid">
              <div class="info-item">
                <h4>Company</h4>
                <p><mat-icon>business</mat-icon> {{ job.company || 'Not specified' }}</p>
              </div>
              
              <div class="info-item">
                <h4>Location</h4>
                <p><mat-icon>location_on</mat-icon> {{ job.location }}</p>
              </div>
              
              <div class="info-item">
                <h4>Job Type</h4>
                <p><mat-icon>work</mat-icon> {{ formatJobType(job.jobType) }}</p>
              </div>
              
              <div class="info-item">
                <h4>Work Location</h4>
                <p><mat-icon>home</mat-icon> {{ formatWorkLocation(job.workLocation) }}</p>
              </div>
              
              <div class="info-item">
                <h4>Salary Range</h4>
                <p><mat-icon>payments</mat-icon> {{ formatSalary(job.salaryMin, job.salaryMax) }}</p>
              </div>
              
              <div class="info-item">
                <h4>Experience Required</h4>
                <p><mat-icon>timeline</mat-icon> {{ job.experienceRequired || 0 }} years</p>
              </div>
              
              <div class="info-item">
                <h4>Number of Openings</h4>
                <p><mat-icon>people</mat-icon> {{ job.numberOfOpenings || 1 }}</p>
              </div>
            </div>

            <div class="job-description">
              <h3>Job Description</h3>
              <p>{{ job.description }}</p>
            </div>

            <div class="job-skills" *ngIf="job.skillsRequired">
              <h3>Skills Required</h3>
              <p>{{ job.skillsRequired }}</p>
            </div>

            <div class="job-education" *ngIf="job.educationRequired">
              <h3>Education Required</h3>
              <p>{{ job.educationRequired }}</p>
            </div>

            <div class="job-deadline" *ngIf="job.deadline">
              <h3>Application Deadline</h3>
              <p><mat-icon>event</mat-icon> {{ formatDate(job.deadline!) }}</p>
            </div>

            <div class="job-meta">
              <p><strong>Posted:</strong> {{ formatDate(job.createdAt!) }}</p>
              <p *ngIf="job.updatedAt"><strong>Last Updated:</strong> {{ formatDate(job.updatedAt!) }}</p>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <div *ngIf="!isLoading && !job" class="error-state">
        <mat-card>
          <mat-card-content>
            <h3>Job Not Found</h3>
            <p>The job you're looking for doesn't exist or has been deleted.</p>
            <button mat-raised-button color="primary" (click)="goBack()">
              <mat-icon>arrow_back</mat-icon>
              Back to Jobs
            </button>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .job-details-container {
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .job-toolbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      margin-bottom: 24px;
      border-radius: 8px;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
      gap: 16px;
    }

    .job-content {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .job-card {
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-radius: 8px;
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .job-header h2 {
      margin: 0;
      color: #333;
    }

    .status-chip {
      font-size: 14px;
      height: 28px;
    }

    .job-info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .info-item {
      padding: 16px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background: #f9f9f9;
    }

    .info-item h4 {
      margin: 0 0 8px 0;
      color: #666;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .info-item p {
      margin: 0;
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }

    .job-description,
    .job-skills,
    .job-education,
    .job-deadline,
    .job-meta {
      margin-bottom: 24px;
    }

    .job-description h3,
    .job-skills h3,
    .job-education h3,
    .job-deadline h3 {
      margin: 0 0 16px 0;
      color: #333;
      border-bottom: 2px solid #667eea;
      padding-bottom: 8px;
    }

    .job-description p,
    .job-skills p,
    .job-education p {
      line-height: 1.6;
      white-space: pre-wrap;
    }

    .job-deadline p {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }

    .job-meta {
      padding: 16px;
      background: #f5f5f5;
      border-radius: 8px;
      border-left: 4px solid #667eea;
    }

    .job-meta p {
      margin: 4px 0;
      color: #666;
    }

    .error-state {
      text-align: center;
      padding: 40px;
    }

    .error-state h3 {
      color: #f44336;
      margin-bottom: 16px;
    }
  `]
})
export class JobDetailsComponent implements OnInit {
  job: Job | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.loadJobDetails(+jobId);
    } else {
      this.snackBar.open('Invalid job ID', 'Close', { duration: 3000 });
      this.goBack();
    }
  }

  loadJobDetails(jobId: number): void {
    this.isLoading = true;
    this.jobService.getJobById(jobId).subscribe({
      next: (job) => {
        this.job = job;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading job details:', error);
        this.snackBar.open('Error loading job details', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/employer/jobs']);
  }

  editJob(): void {
    if (this.job) {
      this.router.navigate(['/employer/jobs', this.job.id, 'edit']);
    }
  }

  getStatusColor(isActive: boolean): string {
    return isActive ? 'primary' : 'warn';
  }

  formatSalary(min?: number, max?: number): string {
    if (!min && !max) return 'Not specified';
    if (min && max) return `₹${min.toLocaleString()} - ₹${max.toLocaleString()}`;
    if (min) return `₹${min.toLocaleString()}+`;
    return `Up to ₹${max?.toLocaleString()}`;
  }

  formatJobType(jobType?: string): string {
    if (!jobType) return 'Not specified';
    return jobType.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  }

  formatWorkLocation(workLocation?: string): string {
    if (!workLocation) return 'Not specified';
    return workLocation.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  }

  formatDate(date: string | Date | undefined): string {
    if (!date) return 'Not specified';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
