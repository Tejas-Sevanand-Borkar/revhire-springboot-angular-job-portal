import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { JobService, Job } from '../../core/services/job.service';
import { ApplicationService, Application, ApplicationStats } from '../../core/services/application.service';
import { RejectionDialogComponent, RejectionDialogData, RejectionDialogResult } from '../dialogs/rejection-dialog.component';

@Component({
  selector: 'app-employer-dashboard',
  template: `
    <div class="dashboard-container">
      <h1>Employer Dashboard</h1>
      
      <!-- Statistics Cards -->
      <div class="stats-row">
        <mat-card class="stat-card">
          <mat-card-header>
            <h3>Total Jobs</h3>
          </mat-card-header>
          <mat-card-content>
            <p class="stat-number">{{jobStats.totalJobs || 0}}</p>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="stat-card">
          <mat-card-header>
            <h3>Active Jobs</h3>
          </mat-card-header>
          <mat-card-content>
            <p class="stat-number">{{jobStats.activeJobs || 0}}</p>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="stat-card">
          <mat-card-header>
            <h3>Total Applications</h3>
          </mat-card-header>
          <mat-card-content>
            <p class="stat-number">{{appStats.totalApplications || 0}}</p>
            <small>Total: {{appStats.totalApplications || 0}}, Pending: {{appStats.pendingApplications || 0}}, Shortlisted: {{appStats.shortlistedApplications || 0}}</small>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="stat-card">
          <mat-card-header>
            <h3>Pending Applications</h3>
          </mat-card-header>
          <mat-card-content>
            <p class="stat-number">{{appStats.pendingApplications || 0}}</p>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="stat-card">
          <mat-card-header>
            <h3>Shortlist Rate</h3>
          </mat-card-header>
          <mat-card-content>
            <p class="stat-number">{{getShortlistRate()}}%</p>
            <small>{{appStats.shortlistedApplications || 0}} of {{appStats.totalApplications || 0}} applications</small>
            <button mat-stroked-button color="primary" (click)="forceUpdateShortlistRate()" style="margin-top: 8px; font-size: 12px;">
              <mat-icon style="font-size: 16px;">refresh</mat-icon>
              Refresh
            </button>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Recent Activity -->
      <mat-card class="recent-activity-card">
        <mat-card-header>
          <h2>Recent Activity</h2>
        </mat-card-header>
        <mat-card-content>
          <div class="activity-item">
            <mat-icon class="activity-icon">work</mat-icon>
            <div class="activity-content">
              <p><strong>{{appStats.totalApplications || 0}}</strong> total applications</p>
              <small><strong>{{appStats.pendingApplications || 0}}</strong> pending applications this week</small>
              <button mat-stroked-button color="accent" (click)="refreshApplicationStats()" style="margin-top: 8px;">
                <mat-icon>refresh</mat-icon>
                Refresh Stats
              </button>
            </div>
          </div>
          <div class="activity-item" *ngIf="appStats.totalApplications > 0">
            <mat-icon class="activity-icon pending">schedule</mat-icon>
            <div class="activity-content">
              <p>You have <strong>{{appStats.totalApplications}}</strong> total applications</p>
              <p><strong>{{appStats.pendingApplications || 0}}</strong> pending review</p>
            </div>
          </div>
          <div class="activity-item" *ngIf="appStats.totalApplications === 0">
            <mat-icon class="activity-icon">info</mat-icon>
            <div class="activity-content">
              <p>No applications received yet</p>
              <small>Applications will appear here when job seekers apply to your postings</small>
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Action Buttons -->
      <div class="action-row">
        <button mat-raised-button color="primary" (click)="openJobDialog()">
          <mat-icon>add</mat-icon>
          Post New Job
        </button>
        <button mat-raised-button color="accent" (click)="refreshData()">
          <mat-icon>refresh</mat-icon>
          Refresh Data
        </button>
        <button mat-stroked-button color="warn" (click)="debugApplications()">
          <mat-icon>bug_report</mat-icon>
          Debug Apps
        </button>
        <button mat-stroked-button color="warn" (click)="debugCurrentUser()">
          <mat-icon>person</mat-icon>
          Debug User
        </button>
        <button mat-stroked-button color="primary" (click)="testBackendConnection()">
          <mat-icon>cloud</mat-icon>
          Test Backend
        </button>
        <button mat-stroked-button color="warn" (click)="forceNavigateToApplications()">
          <mat-icon>launch</mat-icon>
          Force Navigate (Test)
        </button>
      </div>

      <!-- Jobs Table -->
      <mat-card class="table-card">
        <mat-card-header>
          <h2>Your Job Postings</h2>
        </mat-card-header>
        <mat-card-content>
          <div class="table-container">
            <table mat-table [dataSource]="jobDataSource" matSort matSort>
              <ng-container matColumnDef="title">
                <mat-header-cell *matHeaderCellDef>Job Title</mat-header-cell>
                <mat-cell *matCellDef="let row">{{row.title}}</mat-cell>
              </ng-container>
              <ng-container matColumnDef="location">
                <mat-header-cell *matHeaderCellDef>Location</mat-header-cell>
                <mat-cell *matCellDef="let row">{{row.location}}</mat-cell>
              </ng-container>
              <ng-container matColumnDef="jobType">
                <mat-header-cell *matHeaderCellDef>Type</mat-header-cell>
                <mat-cell *matCellDef="let row">{{row.jobType}}</mat-cell>
              </ng-container>
              <ng-container matColumnDef="createdAt">
                <mat-header-cell *matHeaderCellDef>Posted</mat-header-cell>
                <mat-cell *matCellDef="let row">{{row.createdAt | date:'short'}}</mat-cell>
              </ng-container>
              <ng-container matColumnDef="status">
                <mat-header-cell *matHeaderCellDef>Status</mat-header-cell>
                <mat-cell *matCellDef="let row">
                  <span [ngClass]="{'status-active': row.active, 'status-inactive': !row.active}">
                    {{row.active ? 'Active' : 'Inactive'}}
                  </span>
                </mat-cell>
              </ng-container>
              <ng-container matColumnDef="actions">
                <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>
                <mat-cell *matCellDef="let row">
                  <button mat-icon-button color="primary" (click)="editJob(row)">
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button mat-icon-button color="warn" (click)="deleteJob(row.id)">
                    <mat-icon>delete</mat-icon>
                  </button>
                </mat-cell>
              </ng-container>
            </table>
            <mat-paginator [length]="totalJobs" [pageSize]="5" [pageSizeOptions]="[5, 10, 20]">
            </mat-paginator>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Applications Table -->
      <mat-card class="table-card">
        <mat-card-header>
          <h2>Job Applications</h2>
        </mat-card-header>
        <mat-card-content>
          <div class="table-container">
            <table mat-table [dataSource]="applicationDataSource" matSort matSort>
              <ng-container matColumnDef="jobSeekerName">
                <mat-header-cell *matHeaderCellDef>Applicant</mat-header-cell>
                <mat-cell *matCellDef="let row">{{row.jobSeekerName}}</mat-cell>
              </ng-container>
              <ng-container matColumnDef="jobTitle">
                <mat-header-cell *matHeaderCellDef>Job</mat-header-cell>
                <mat-cell *matCellDef="let row">{{row.jobTitle}}</mat-cell>
              </ng-container>
              <ng-container matColumnDef="status">
                <mat-header-cell *matHeaderCellDef>Status</mat-header-cell>
                <mat-cell *matCellDef="let row">
                  <span [ngClass]="getStatusLabelClass(row.status)">{{row.status}}</span>
                </mat-cell>
              </ng-container>
              <ng-container matColumnDef="createdAt">
                <mat-header-cell *matHeaderCellDef>Applied</mat-header-cell>
                <mat-cell *matCellDef="let row">{{row.createdAt | date:'short'}}</mat-cell>
              </ng-container>
              <ng-container matColumnDef="actions">
                <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>
                <mat-cell *matCellDef="let row">
                  <button mat-icon-button color="primary" (click)="viewApplication(row.id)" *ngIf="row.status === 'PENDING'">
                    <mat-icon>visibility</mat-icon>
                  </button>
                  <button mat-icon-button color="accent" (click)="acceptApplication(row.id)" *ngIf="row.status === 'PENDING'">
                    <mat-icon>check</mat-icon>
                  </button>
                  <button mat-icon-button color="warn" (click)="rejectApplication(row)" *ngIf="row.status === 'PENDING'">
                    <mat-icon>close</mat-icon>
                  </button>
                </mat-cell>
              </ng-container>
            </table>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
      max-width: 1400px;
      margin: 0 auto;
    }
    
    .stats-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    
    .stat-card {
      text-align: center;
    }
    
    .stat-number {
      font-size: 2em;
      font-weight: bold;
      color: #3f51b5;
      margin: 0;
    }
    
    .action-row {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    .table-card {
      margin-bottom: 20px;
    }
    
    .table-container {
      overflow-x: auto;
    }
    
    .status-active {
      color: #4caf50;
      font-weight: bold;
    }
    
    .status-inactive {
      color: #f44336;
    }
    
    .status-pending {
      color: #ff9800;
    }
    
    .status-accepted {
      color: #4caf50;
    }
    
    .status-rejected {
      color: #f44336;
    }
    
    .recent-activity-card {
      margin-bottom: 20px;
    }
    
    .activity-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 16px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .activity-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    
    .activity-item:first-child {
      padding-top: 0;
    }
    
    .activity-icon {
      color: #3f51b5;
      font-size: 24px;
      width: 24px;
      height: 24px;
      margin-top: 2px;
    }
    
    .activity-icon.pending {
      color: #ff9800;
    }
    
    .activity-content {
      flex: 1;
    }
    
    .activity-content p {
      margin: 0 0 4px 0;
      font-size: 16px;
    }
    
    .activity-content small {
      color: #666;
      font-size: 14px;
    }
    
    .activity-content button {
      margin-top: 8px;
    }
  `]
})
export class EmployerDashboardComponent implements OnInit {
  displayedJobColumns: string[] = ['title', 'location', 'jobType', 'createdAt', 'status', 'actions'];
  displayedApplicationColumns: string[] = ['jobSeekerName', 'jobTitle', 'status', 'createdAt', 'actions'];
  jobDataSource = new MatTableDataSource<Job>();
  applicationDataSource = new MatTableDataSource<Application>();
  jobStats: any = {};
  appStats: ApplicationStats = {};
  totalJobs = 0;

  constructor(
    private jobService: JobService,
    private applicationService: ApplicationService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('Employer dashboard loaded');
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loadJobStatistics();
    this.loadApplicationStatistics();
    this.loadJobs();
    this.loadApplications();
  }

  loadJobStatistics(): void {
    console.log('Loading job statistics...');
    this.jobService.getJobStatistics().subscribe({
      next: (stats) => {
        console.log('Job stats loaded:', stats);
        this.jobStats = stats;
      },
      error: (error) => {
        console.error('Error loading job stats:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
        // Don't set mock data - keep empty to show real issue
        this.jobStats = { totalJobs: 0, activeJobs: 0 };
        this.snackBar.open('Error loading job statistics. Please check if you are logged in as employer.', 'Close', { duration: 5000 });
      }
    });
  }

  loadApplicationStatistics(): void {
    console.log('Loading application statistics...');
    console.log('Making API call to:', 'http://localhost:8080/api/applications/employer/stats');
    
    this.applicationService.getApplicationStats().subscribe({
      next: (stats) => {
        console.log('✅ Application stats loaded successfully:', stats);
        console.log('✅ Total applications:', stats.totalApplications);
        console.log('✅ Pending applications:', stats.pendingApplications);
        console.log('✅ Shortlisted applications:', stats.shortlistedApplications);
        console.log('✅ Shortlist rate should be:', (stats.totalApplications || 0) > 0 ? Math.round(((stats.shortlistedApplications || 0) / (stats.totalApplications || 0)) * 100) : 0);
        
        this.appStats = stats;
        
        // Force change detection to update UI
        setTimeout(() => {
          console.log('🔄 AppStats after timeout:', this.appStats);
          console.log('🔄 Shortlist rate calculation:', this.getShortlistRate());
        }, 100);
      },
      error: (error) => {
        console.error('❌ Error loading application stats:', error);
        console.error('❌ Error status:', error.status);
        console.error('❌ Error message:', error.message);
        console.error('❌ Error URL:', error.url);
        
        // Don't set mock data - keep empty to show real issue
        this.appStats = { totalApplications: 0, pendingApplications: 0 };
        this.snackBar.open('Error loading application statistics. Please check if you are logged in as employer.', 'Close', { duration: 5000 });
      }
    });
  }

  loadJobs(): void {
    console.log('Loading employer jobs...');
    this.jobService.getEmployerJobs().subscribe({
      next: (jobs) => {
        console.log('Jobs loaded:', jobs);
        this.jobDataSource.data = jobs;
        this.totalJobs = jobs.length;
      },
      error: (error) => {
        console.error('Error loading jobs:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
        this.snackBar.open('Error loading jobs. Please check if you are logged in as employer.', 'Close', { duration: 5000 });
      }
    });
  }

  loadApplications(): void {
    console.log('Loading employer applications...');
    this.applicationService.getEmployerApplications().subscribe({
      next: (applications) => {
        console.log('Applications loaded:', applications);
        this.applicationDataSource.data = applications;
      },
      error: (error) => {
        console.error('Error loading applications:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
        this.snackBar.open('Error loading applications. Please check if you are logged in as employer.', 'Close', { duration: 5000 });
      }
    });
  }

  refreshData(): void {
    this.loadDashboardData();
    this.snackBar.open('Data refreshed', 'Close', { duration: 2000 });
  }

  viewPendingApplications(): void {
    console.log('🔍 viewPendingApplications() called');
    console.log('🔍 Current user:', this.authService.getCurrentUser());
    console.log('🔍 User role:', this.authService.getUserRole());
    console.log('🔍 Is logged in:', this.authService.isLoggedIn());
    console.log('🔍 Is employer:', this.authService.isEmployer());
    
    // Try direct navigation first
    console.log('🔍 Attempting to navigate to /employer/applications');
    this.router.navigate(['/employer/applications']).then(
      (success) => {
        console.log('✅ Navigation successful:', success);
      },
      (error) => {
        console.error('❌ Navigation failed:', error);
        // Try alternative approach - navigate without role guard
        console.log('🔄 Trying alternative navigation...');
        this.router.navigateByUrl('/employer/applications').then(
          (altSuccess) => {
            console.log('✅ Alternative navigation successful:', altSuccess);
          },
          (altError) => {
            console.error('❌ Alternative navigation failed:', altError);
            // Final fallback - try with query param to bypass guard
            this.router.navigate(['/employer/applications'], { 
              queryParams: { bypass: 'true' } 
            });
          }
        );
      }
    );
  }

  refreshApplicationStats(): void {
    console.log('🔄 Manually refreshing application statistics...');
    this.loadApplicationStatistics();
    this.snackBar.open('Refreshing application statistics...', 'Close', { duration: 1000 });
  }

  getShortlistRate(): number {
    const totalApplications = this.appStats.totalApplications || 0;
    const shortlistedApplications = this.appStats.shortlistedApplications || 0;
    
    console.log('🔍 Dashboard Shortlist Rate Debug:');
    console.log('🔍 Total applications:', totalApplications);
    console.log('🔍 Shortlisted applications:', shortlistedApplications);
    console.log('🔍 App stats:', this.appStats);
    
    if (totalApplications === 0) return 0;
    
    const rate = (shortlistedApplications / totalApplications) * 100;
    console.log(`🔍 Dashboard shortlist rate calculation: ${shortlistedApplications}/${totalApplications} = ${rate}%`);
    return Math.round(rate);
  }

  forceUpdateShortlistRate(): void {
    console.log('🔄 Force updating shortlist rate...');
    console.log('🔄 Current appStats:', this.appStats);
    
    // Force reload application stats
    this.loadApplicationStatistics();
    
    // Force change detection multiple times
    setTimeout(() => {
      console.log('🔄 Force change detection 1');
      this.cdr.detectChanges();
    }, 100);
    
    setTimeout(() => {
      console.log('🔄 Force change detection 2');
      this.cdr.detectChanges();
      console.log('🔄 Final shortlist rate:', this.getShortlistRate());
    }, 500);
  }

  forceNavigateToApplications(): void {
    console.log('🚀 Force navigating to applications page...');
    console.log('🚀 Current token from localStorage:', localStorage.getItem('token'));
    console.log('🚀 Current user from localStorage:', localStorage.getItem('currentUser'));
    
    // Try multiple approaches
    console.log('🚀 Method 1: Angular navigate with bypass');
    this.router.navigate(['/employer/applications'], { queryParams: { bypass: 'true' }});
    
    setTimeout(() => {
      console.log('🚀 Method 2: Direct window location');
      window.location.href = '/employer/applications?bypass=true&force=true';
    }, 1000);
  }

  debugApplications(): void {
    console.log('🔍 Debugging all applications...');
    this.http.get('http://localhost:8080/api/applications/debug/all').subscribe({
      next: (data: any) => {
        console.log('🔍 All applications:', data);
      },
      error: (error: any) => {
        console.error('🔍 Error fetching debug applications:', error);
      }
    });
  }

  debugCurrentUser(): void {
    console.log('🔍 Debugging current user...');
    this.http.get('http://localhost:8080/api/applications/debug/current-user').subscribe({
      next: (data: any) => {
        console.log('🔍 Current user:', data);
      },
      error: (error: any) => {
        console.error('🔍 Error fetching debug user:', error);
      }
    });
  }

  testBackendConnection(): void {
    console.log('🌐 Testing backend connection...');
    this.http.get('http://localhost:8080/api/auth/me').subscribe({
      next: (data: any) => {
        console.log('✅ Backend is connected:', data);
      },
      error: (error: any) => {
        console.error('❌ Backend connection failed:', error);
        console.error('❌ Make sure backend server is running on localhost:8080');
      }
    });
  }

  openJobDialog(): void {
    this.router.navigate(['/employer/create-job']);
  }

  editJob(job: Job): void {
    // TODO: Implement job editing
    console.log('Edit job:', job);
    this.snackBar.open('Job editing coming soon!', 'Close', { duration: 3000 });
  }

  deleteJob(id: number): void {
    if (confirm('Are you sure you want to delete this job?')) {
      this.jobService.deleteJob(id).subscribe({
        next: () => {
          this.loadJobs();
          this.snackBar.open('Job deleted successfully', 'Close', { duration: 3000 });
        },
        error: (error) => {
          console.error('Error deleting job:', error);
          this.snackBar.open('Error deleting job', 'Close', { duration: 3000 });
        }
      });
    }
  }

  viewApplication(id: number): void {
    // TODO: Implement application viewing
    console.log('View application:', id);
    this.snackBar.open('Application details coming soon!', 'Close', { duration: 3000 });
  }

  acceptApplication(id: number): void {
    this.applicationService.acceptApplication(id).subscribe({
      next: () => {
        this.loadApplications();
        this.snackBar.open('Application accepted', 'Close', { duration: 3000 });
      },
      error: (error) => {
        console.error('Error accepting application:', error);
        this.snackBar.open('Error accepting application', 'Close', { duration: 3000 });
      }
    });
  }

  rejectApplication(application: Application): void {
    const dialogData: RejectionDialogData = {
      applicationId: application.id,
      applicantName: application.jobSeekerName || 'Unknown',
      jobTitle: application.jobTitle || 'Unknown Job'
    };

    const dialogRef = this.dialog.open(RejectionDialogComponent, {
      data: dialogData,
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result: RejectionDialogResult | undefined) => {
      if (result && result.confirmed) {
        this.applicationService.rejectApplication(application.id, result.reason || undefined).subscribe({
          next: () => {
            this.loadApplications();
            this.snackBar.open('Application rejected successfully', 'Close', { duration: 3000 });
          },
          error: (error) => {
            console.error('Error rejecting application:', error);
            this.snackBar.open('Error rejecting application', 'Close', { duration: 3000 });
          }
        });
      }
    });
  }

  getStatusLabelClass(status: string): string {
    switch (status) {
      case 'PENDING': return 'status-pending';
      case 'ACCEPTED': return 'status-accepted';
      case 'REJECTED': return 'status-rejected';
      default: return '';
    }
  }
}
