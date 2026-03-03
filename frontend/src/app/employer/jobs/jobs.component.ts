import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JobService, Job } from '../../core/services/job.service';
import { ApplicationService } from '../../core/services/application.service';
import { AuthService } from '../../core/services/auth.service';

export interface JobWithApplications extends Job {
  applicationCount: number;
}

@Component({
  selector: 'app-employer-jobs',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTooltipModule,
    MatChipsModule,
    MatToolbarModule,
    MatDividerModule,
    CommonModule
  ],
  template: `
    <div class="jobs-container">
      <mat-toolbar class="jobs-toolbar">
        <h1>My Jobs</h1>
        <span class="spacer"></span>
        <button mat-raised-button color="primary" (click)="createJob()">
          <mat-icon>add</mat-icon>
          Post New Job
        </button>
      </mat-toolbar>

      <mat-card class="jobs-card">
        <mat-card-content>
          <div *ngIf="isLoading" class="loading-container">
            <mat-spinner diameter="40"></mat-spinner>
            <p>Loading jobs...</p>
          </div>

          <div *ngIf="!isLoading && jobs.length === 0" class="empty-state">
            <mat-icon class="empty-icon">work_off</mat-icon>
            <h3>No Jobs Posted Yet</h3>
            <p>Start by posting your first job opening</p>
            <button mat-raised-button color="primary" (click)="createJob()">
              <mat-icon>add</mat-icon>
              Post Your First Job
            </button>
          </div>

          <div *ngIf="!isLoading && jobs.length > 0" class="table-container">
            <table mat-table [dataSource]="dataSource" matSort>
              <!-- Job Title Column -->
              <ng-container matColumnDef="title">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Job Title</th>
                <td mat-cell *matCellDef="let job">
                  <div class="job-title">
                    <strong>{{ job.title }}</strong>
                    <div class="job-meta">
                      <mat-chip [color]="getStatusColor(job.active)" class="status-chip">
                        {{ job.active ? 'Active' : 'Inactive' }}
                      </mat-chip>
                      <span class="job-type">{{ formatJobType(job.jobType) }}</span>
                    </div>
                  </div>
                </td>
              </ng-container>

              <!-- Company Column -->
              <ng-container matColumnDef="company">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Company</th>
                <td mat-cell *matCellDef="let job">
                  <div class="company-info">
                    <mat-icon class="company-icon">business</mat-icon>
                    {{ job.company || 'Not specified' }}
                  </div>
                </td>
              </ng-container>

              <!-- Location Column -->
              <ng-container matColumnDef="location">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Location</th>
                <td mat-cell *matCellDef="let job">
                  <div class="location-info">
                    <mat-icon class="location-icon">location_on</mat-icon>
                    <span>{{ job.location || 'Not specified' }}</span>
                  </div>
                </td>
              </ng-container>

              <!-- Salary Column -->
              <ng-container matColumnDef="salary">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Salary Range</th>
                <td mat-cell *matCellDef="let job">
                  <div class="salary-info">
                    {{ formatSalary(job.salaryMin, job.salaryMax) }}
                  </div>
                </td>
              </ng-container>

              <!-- Applications Column -->
              <ng-container matColumnDef="applications">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Applications</th>
                <td mat-cell *matCellDef="let job">
                  <div class="applications-info">
                    <mat-icon class="applications-icon">people</mat-icon>
                    <span>{{ getApplicationCount(job.id) }}</span>
                  </div>
                </td>
              </ng-container>

              <!-- Posted Date Column -->
              <ng-container matColumnDef="createdAt">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Posted Date</th>
                <td mat-cell *matCellDef="let job">
                  {{ formatDate(job.createdAt) }}
                </td>
              </ng-container>

              <!-- Actions Column -->
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let job">
                  <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Actions">
                    <mat-icon>more_vert</mat-icon>
                  </button>
                  <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="viewJob(job)">
                      <mat-icon>visibility</mat-icon>
                      View Details
                    </button>
                    <button mat-menu-item (click)="editJob(job)">
                      <mat-icon>edit</mat-icon>
                      Edit Job
                    </button>
                    <button mat-menu-item (click)="toggleJobStatus(job)">
                      <mat-icon>{{ job.active ? 'pause' : 'play_arrow' }}</mat-icon>
                      {{ job.active ? 'Deactivate' : 'Activate' }}
                    </button>
                    <button mat-menu-item (click)="viewApplications(job.id)">
                      <mat-icon>people</mat-icon>
                      View Applications ({{ getApplicationCount(job.id) }})
                    </button>
                    <mat-divider></mat-divider>
                    <button mat-menu-item (click)="deleteJob(job)" class="delete-action">
                      <mat-icon>delete</mat-icon>
                      Delete Job
                    </button>
                  </mat-menu>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>

            <mat-paginator
              [pageSizeOptions]="[5, 10, 25, 100]"
              [pageSize]="10"
              showFirstLastButtons
              aria-label="Select page of jobs">
            </mat-paginator>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .jobs-container {
      padding: 20px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .jobs-toolbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      margin-bottom: 24px;
      border-radius: 8px;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .jobs-card {
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-radius: 8px;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
      gap: 16px;
    }

    .empty-state {
      text-align: center;
      padding: 60px 20px;
    }

    .empty-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      color: #9e9e9e;
      margin-bottom: 16px;
    }

    .table-container {
      overflow-x: auto;
    }

    table {
      width: 100%;
    }

    .job-title {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .job-meta {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .status-chip {
      font-size: 12px;
      height: 24px;
    }

    .job-type {
      font-size: 12px;
      color: #666;
    }

    .location-info {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .location-icon {
      font-size: 16px;
      color: #666;
    }

    .company-info {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .company-icon {
      font-size: 16px;
      color: #666;
    }

    .salary-info {
      font-weight: 500;
    }

    .applications-info {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .applications-icon {
      font-size: 16px;
      color: #666;
    }

    .delete-action {
      color: #f44336;
    }

    mat-cell {
      padding: 16px 8px;
    }

    mat-header-cell {
      font-weight: 600;
    }
  `]
})
export class EmployerJobsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'company', 'location', 'salary', 'applications', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource<JobWithApplications>();
  jobs: Job[] = [];
  applications: any[] = [];
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private jobService: JobService,
    private applicationService: ApplicationService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadJobs();
    this.loadApplications();
  }

  loadJobs(): void {
    this.isLoading = true;
    this.jobService.getEmployerJobs().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.dataSource.data = jobs.map(job => ({
          ...job,
          applicationCount: 0
        }));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading jobs:', error);
        this.snackBar.open('Error loading jobs', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  loadApplications(): void {
    this.applicationService.getEmployerApplications().subscribe({
      next: (applications) => {
        this.applications = applications;
        this.updateApplicationCounts();
      },
      error: (error) => {
        console.error('Error loading applications:', error);
      }
    });
  }

  updateApplicationCounts(): void {
    const jobApplicationCounts = new Map<number, number>();
    
    this.applications.forEach(app => {
      const count = jobApplicationCounts.get(app.jobId) || 0;
      jobApplicationCounts.set(app.jobId, count + 1);
    });

    this.dataSource.data = this.dataSource.data.map(job => ({
      ...job,
      applicationCount: jobApplicationCounts.get(job.id) || 0
    }));
  }

  getApplicationCount(jobId: number): number {
    return this.applications.filter(app => app.jobId === jobId).length;
  }

  createJob(): void {
    this.router.navigate(['/employer/post-job']);
  }

  viewJob(job: Job): void {
    this.router.navigate(['/employer/jobs', job.id]);
  }

  editJob(job: Job): void {
    this.router.navigate(['/employer/jobs', job.id, 'edit']);
  }

  toggleJobStatus(job: Job): void {
    const action = job.active ? 'deactivate' : 'activate';
    
    if (confirm(`Are you sure you want to ${action} this job?`)) {
      this.jobService.toggleJobStatus(job.id).subscribe({
        next: () => {
          job.active = !job.active;
          this.snackBar.open(`Job ${action}d successfully`, 'Close', { duration: 3000 });
        },
        error: (error) => {
          console.error('Error toggling job status:', error);
          this.snackBar.open(`Error ${action}ing job`, 'Close', { duration: 3000 });
        }
      });
    }
  }

  viewApplications(jobId: number): void {
    this.router.navigate(['/employer/applications'], { queryParams: { jobId: jobId } });
  }

  deleteJob(job: Job): void {
    if (confirm(`Are you sure you want to delete "${job.title}"? This action cannot be undone.`)) {
      this.jobService.deleteJob(job.id).subscribe({
        next: () => {
          this.snackBar.open('Job deleted successfully', 'Close', { duration: 3000 });
          this.loadJobs(); // Refresh the list
        },
        error: (error) => {
          console.error('Error deleting job:', error);
          this.snackBar.open('Error deleting job', 'Close', { duration: 3000 });
        }
      });
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

  formatDate(date: string | Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
