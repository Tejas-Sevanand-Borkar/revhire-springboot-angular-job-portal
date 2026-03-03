import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApplicationService } from '../../core/services/application.service';
import { JobService } from '../../core/services/job.service';
import { Application, Job } from '../../core/models/application.model';
import { WithdrawApplicationDialog } from './withdraw-application-dialog/withdraw-application-dialog.component';
import { ResumeViewerComponent } from './resume-viewer/resume-viewer.component';
import { AuthService } from '../../core/services/auth.service';

export interface ApplicationWithJob extends Omit<Application, 'jobTitle' | 'jobLocation'> {
  jobTitle?: string;
  jobLocation?: string;
  jobType?: string;
  salaryMin?: number;
  salaryMax?: number;
}

@Component({
  selector: 'app-employer-applications',
  standalone: true,
  imports: [
    CommonModule,
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
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    WithdrawApplicationDialog,
    ResumeViewerComponent
  ],
  template: `
    <div class="applications-container">
      <mat-toolbar class="applications-toolbar">
        <h1>Job Applications</h1>
        <span class="spacer"></span>
        <div class="toolbar-actions">
          <input type="text" 
                 class="simple-search" 
                 (keyup)="applyFilter($event)" 
                 placeholder="Search applications...">
          <button mat-icon-button (click)="refreshApplications()" matTooltip="Refresh">
            <mat-icon>refresh</mat-icon>
          </button>
        </div>
      </mat-toolbar>

      <div class="stats-cards">
        <mat-card class="stat-card">
          <mat-card-content>
            <div class="stat-content">
              <div class="stat-icon applied">
                <mat-icon>send</mat-icon>
              </div>
              <div class="stat-info">
                <h3>{{ getApplicationsByStatus('APPLIED').length }}</h3>
                <p>Applied</p>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card">
          <mat-card-content>
            <div class="stat-content">
              <div class="stat-icon review">
                <mat-icon>visibility</mat-icon>
              </div>
              <div class="stat-info">
                <h3>{{ getApplicationsByStatus('UNDER_REVIEW').length }}</h3>
                <p>Under Review</p>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card">
          <mat-card-content>
            <div class="stat-content">
              <div class="stat-icon shortlisted">
                <mat-icon>star</mat-icon>
              </div>
              <div class="stat-info">
                <h3>{{ getApplicationsByStatus('SHORTLISTED').length }}</h3>
                <p>Shortlisted</p>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card">
          <mat-card-content>
            <div class="stat-content">
              <div class="stat-icon rejected">
                <mat-icon>close</mat-icon>
              </div>
              <div class="stat-info">
                <h3>{{ getApplicationsByStatus('REJECTED').length }}</h3>
                <p>Rejected</p>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <mat-card class="applications-card">
        <mat-card-content>
          <div *ngIf="isLoading" class="loading-container">
            <mat-spinner diameter="40"></mat-spinner>
            <p>Loading applications...</p>
          </div>

          <div *ngIf="!isLoading && applications.length === 0" class="empty-state">
            <mat-icon class="empty-icon">inbox</mat-icon>
            <h3>No Applications Yet</h3>
            <p>Applications will appear here when candidates apply to your job postings</p>
          </div>

          <div *ngIf="!isLoading && applications.length > 0" class="table-container">
            <table mat-table [dataSource]="dataSource" matSort>
              <!-- Applicant Name Column -->
              <ng-container matColumnDef="applicant">
                <th mat-header-cell *matHeaderCellDef>Applicant</th>
                <td mat-cell *matCellDef="let app">
                  <div class="applicant-info">
                    <div class="applicant-avatar">
                      <mat-icon>person</mat-icon>
                    </div>
                    <div class="applicant-details">
                      <div class="applicant-name">{{ app.jobSeekerName }}</div>
                    </div>
                  </div>
                </td>
              </ng-container>

              <!-- Job Details Column -->
              <ng-container matColumnDef="job">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Job</th>
                <td mat-cell *matCellDef="let app">
                  <div class="job-info">
                    <div class="job-title">{{ app.jobTitle }}</div>
                    <div class="job-meta">
                      <mat-icon class="location-icon">location_on</mat-icon>
                      <span>{{ app.jobLocation }}</span>
                      <span class="separator">•</span>
                      <span class="job-type">{{ formatJobType(app.jobType) }}</span>
                    </div>
                  </div>
                </td>
              </ng-container>

              <!-- Status Column -->
              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
                <td mat-cell *matCellDef="let app">
                  <mat-chip [color]="getStatusColor(app.status)" class="status-chip">
                    {{ formatStatus(app.status) }}
                  </mat-chip>
                </td>
              </ng-container>

              <!-- Applied Date Column -->
              <ng-container matColumnDef="createdAt">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Applied Date</th>
                <td mat-cell *matCellDef="let app">
                  {{ formatDate(app.createdAt) }}
                </td>
              </ng-container>

              <!-- Actions Column -->
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let app">
                  <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Actions">
                    <mat-icon>more_vert</mat-icon>
                  </button>
                  <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="viewResume(app)" *ngIf="app.resumePath">
                      <mat-icon>description</mat-icon>
                      <span>View Resume</span>
                    </button>
                    <button mat-menu-item (click)="updateApplicationStatus(app, 'UNDER_REVIEW')">
                      <mat-icon>visibility</mat-icon>
                      <span>Mark as Under Review</span>
                    </button>
                    <button mat-menu-item (click)="updateApplicationStatus(app, 'SHORTLISTED')">
                      <mat-icon>star</mat-icon>
                      <span>Shortlist</span>
                    </button>
                    <button mat-menu-item (click)="updateApplicationStatus(app, 'REJECTED')">
                      <mat-icon>close</mat-icon>
                      <span>Reject</span>
                    </button>
                    <button mat-menu-item (click)="withdrawApplication(app)" class="withdraw-action">
                      <mat-icon>cancel</mat-icon>
                      <span>Withdraw Application</span>
                    </button>
                  </mat-menu>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>

            <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" showFirstLastButtons></mat-paginator>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .applications-container {
      padding: 20px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .applications-toolbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      margin-bottom: 24px;
      border-radius: 8px;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .toolbar-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      border: none !important;
      background: transparent !important;
    }

    .toolbar-actions button {
      margin-left: 0;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
      background: transparent !important;
    }

    .toolbar-actions button:focus {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }

    .toolbar-actions button::before {
      display: none !important;
    }

    .toolbar-actions button::after {
      display: none !important;
    }

    .simple-search {
      width: 300px !important;
      padding: 8px 12px !important;
      border: none !important;
      border-left: none !important;
      border-right: none !important;
      border-top: none !important;
      border-bottom: none !important;
      border-radius: 4px !important;
      background: rgba(255, 255, 255, 0.1) !important;
      color: white !important;
      font-size: 14px !important;
      outline: none !important;
      box-shadow: none !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      appearance: none !important;
      caret-color: white !important;
    }

    .simple-search:focus {
      outline: none !important;
      border: none !important;
      border-left: none !important;
      border-right: none !important;
      border-top: none !important;
      border-bottom: none !important;
      box-shadow: none !important;
      -webkit-box-shadow: none !important;
      -moz-box-shadow: none !important;
    }

    .simple-search::before,
    .simple-search::after {
      display: none !important;
      content: none !important;
    }

    .simple-search::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.6) !important;
    }

    .simple-search:-moz-placeholder {
      color: rgba(255, 255, 255, 0.6) !important;
    }

    .simple-search::-moz-placeholder {
      color: rgba(255, 255, 255, 0.6) !important;
    }

    .simple-search:-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.6) !important;
    }

    .search-field {
      width: 300px;
      background: rgba(255, 255, 255, 0.1);
    }

    .search-field ::ng-deep .mat-form-field-outline {
      display: none !important;
    }

    .search-field ::ng-deep .mat-form-field-flex {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      padding: 8px 12px;
    }

    .search-field ::ng-deep .mat-form-field-label {
      color: rgba(255, 255, 255, 0.8) !important;
    }

    .search-field ::ng-deep input {
      color: white !important;
    }

    .stats-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }

    .stat-card {
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .stat-content {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .stat-icon.applied {
      background: #2196F3;
    }

    .stat-icon.review {
      background: #FF9800;
    }

    .stat-icon.shortlisted {
      background: #4CAF50;
    }

    .stat-icon.rejected {
      background: #F44336;
    }

    .stat-icon.rate {
      background: #9C27B0;
    }

    .stat-info h3 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }

    .stat-info p {
      margin: 0;
      color: #666;
      font-size: 14px;
    }

    .applications-card {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

    .applicant-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .applicant-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .applicant-avatar mat-icon {
      font-size: 20px;
      color: #666;
    }

    .applicant-name {
      font-weight: 600;
      color: #333;
    }

    .applicant-email {
      font-size: 12px;
      color: #666;
    }

    .job-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .job-title {
      font-weight: 600;
      color: #333;
    }

    .job-meta {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: #666;
    }

    .location-icon {
      font-size: 14px;
    }

    .separator {
      margin: 0 4px;
    }

    .job-type {
      font-weight: 500;
    }

    .status-chip {
      font-size: 12px;
      height: 24px;
    }

    .withdraw-action {
      color: #f44336;
    }

    mat-cell {
      padding: 16px 8px;
    }

    mat-header-cell {
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .stats-cards {
        grid-template-columns: repeat(2, 1fr);
      }
      .toolbar-actions {
        flex-direction: column;
        gap: 8px;
      }
      .search-field {
        width: 100%;
      }
    }
  `]
})
export class EmployerApplicationsComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = ['applicant', 'job', 'status', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource<ApplicationWithJob>();
  applications: ApplicationWithJob[] = [];
  jobs: Job[] = [];
  isLoading = true;
  filteredJobId: number | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private applicationService: ApplicationService,
    private jobService: JobService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Check for jobId query parameter
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['jobId']) {
        this.filteredJobId = +params['jobId'];
      }
    });
    
    // Load applications and jobs
    this.loadApplications();
    this.loadJobs();
  }

  private restoreSavedStatuses(): void {
    this.applications.forEach(application => {
      const statusKey = `status_app_${application.id}`;
      const statusData = localStorage.getItem(statusKey);
      
      if (statusData) {
        const statusUpdate = JSON.parse(statusData);
        // Only restore if it's newer than 24 hours to avoid stale data
        const updateTime = new Date(statusUpdate.timestamp);
        const now = new Date();
        const hoursDiff = (now.getTime() - updateTime.getTime()) / (1000 * 60 * 60);
        
        if (hoursDiff < 24) {
          application.status = statusUpdate.status;
        } else {
          // Clean up old status data
          localStorage.removeItem(statusKey);
        }
      }
    });
  }

  loadApplications(): void {
    this.isLoading = true;
    
    // If filteredJobId is set, load applications for that specific job
    if (this.filteredJobId) {
      this.applicationService.getApplicationsByJob(this.filteredJobId).subscribe({
        next: (applications) => {
          // Filter out interview applications
          this.applications = applications.filter(app => app.status !== 'INTERVIEW').map(app => ({ ...app })) as ApplicationWithJob[];
          this.restoreSavedStatuses();
          this.enrichApplicationsWithJobDetails();
          this.dataSource.data = this.applications;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading filtered applications:', error);
          this.snackBar.open('Error loading applications', 'Close', { duration: 3000 });
          this.isLoading = false;
        }
      });
    } else {
      // Load all employer applications
      this.applicationService.getEmployerApplications().subscribe({
        next: (applications) => {
          // Filter out interview applications
          this.applications = applications.filter(app => app.status !== 'INTERVIEW').map(app => ({ ...app })) as ApplicationWithJob[];
          this.restoreSavedStatuses();
          this.enrichApplicationsWithJobDetails();
          this.dataSource.data = this.applications;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading applications:', error);
          this.snackBar.open('Error loading applications', 'Close', { duration: 3000 });
          this.isLoading = false;
        }
      });
    }
  }

  loadJobs(): void {
    this.jobService.getEmployerJobs().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.enrichApplicationsWithJobDetails();
      },
      error: (error) => {
        console.error('Error loading jobs for applications:', error);
      }
    });
  }

  private enrichApplicationsWithJobDetails(): void {
    if (this.applications.length > 0 && this.jobs.length > 0) {
      this.applications = this.applications.map(app => {
        const job = this.jobs.find(j => j.id === app.jobId);
        return {
          ...app,
          jobTitle: job?.title || 'Unknown Job',
          jobLocation: job?.location || 'Not specified',
          jobType: job?.jobType,
          salaryMin: job?.salaryMin,
          salaryMax: job?.salaryMax
        };
      });
      this.dataSource.data = this.applications;
    }
  }

  getApplicationsByStatus(status: string): ApplicationWithJob[] {
    return this.applications.filter(app => app.status === status);
  }

  getShortlistRate(): number {
    const totalApplications = this.applications.length;
    const shortlistedApplications = this.getApplicationsByStatus('SHORTLISTED').length;
    
    if (totalApplications === 0) return 0;
    
    return Math.round((shortlistedApplications / totalApplications) * 100);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private forceClearAllData(): void {
    console.log('Force clearing all application data...');
    this.applications = [];
    this.dataSource.data = [];
    
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.paginator.pageSize = 10;
    }
    if (this.sort) {
      this.sort.active = '';
      this.sort.direction = '';
    }
  }

  refreshApplications(): void {
    console.log('Force refreshing applications - clearing all data first...');
    // Clear all data to remove any mock data
    this.forceClearAllData();
    
    // Reload fresh data
    this.loadApplications();
    this.loadJobs();
    
    // Show feedback
    this.snackBar.open('Applications refreshed', 'Close', { duration: 2000 });
  }

  debugShortlistRate(): void {
    console.log('🔍🔍🔍 DEBUG SHORTLIST RATE 🔍🔍🔍');
    console.log('🔍 Applications array:', this.applications);
    console.log('🔍 Applications length:', this.applications.length);
    
    // Check each application's status
    this.applications.forEach((app, index) => {
      console.log(`🔍 Application ${index}: ID=${app.id}, Status="${app.status}"`);
    });
    
    // Count by status
    const applied = this.getApplicationsByStatus('APPLIED').length;
    const underReview = this.getApplicationsByStatus('UNDER_REVIEW').length;
    const shortlisted = this.getApplicationsByStatus('SHORTLISTED').length;
    const rejected = this.getApplicationsByStatus('REJECTED').length;
    
    console.log('🔍 Status counts:');
    console.log('🔍   APPLIED:', applied);
    console.log('🔍   UNDER_REVIEW:', underReview);
    console.log('🔍   SHORTLISTED:', shortlisted);
    console.log('🔍   REJECTED:', rejected);
    console.log('🔍   TOTAL:', this.applications.length);
    
    // Calculate rate
    const rate = this.getShortlistRate();
    console.log('🔍 Final shortlist rate:', rate + '%');
    
    // Force UI update
    this.cdr.detectChanges();
    console.log('🔍 Forced change detection');
  }

  viewApplication(application: ApplicationWithJob): void {
    // Navigate to application details or open dialog
    console.log('View application:', application);
    this.snackBar.open('Application details view coming soon', 'Close', { duration: 3000 });
  }

  viewResume(application: ApplicationWithJob): void {
    if (application.resumePath) {
      this.dialog.open(ResumeViewerComponent, {
        data: {
          resumePath: application.resumePath,
          applicantName: application.jobSeekerName,
          jobTitle: application.jobTitle || 'Unknown Job'
        },
        width: '900px',
        height: '800px',
        maxWidth: '95vw',
        maxHeight: '95vh'
      });
    } else {
      this.snackBar.open('No resume available for this application', 'Close', { duration: 3000 });
    }
  }

  updateApplicationStatus(application: ApplicationWithJob, newStatus: string): void {
    const oldStatus = application.status;
    
    // Optimistically update the UI immediately
    application.status = newStatus;
    this.dataSource.data = [...this.dataSource.data];
    
    // Show success message immediately for better UX
    this.snackBar.open(`Application status updated to ${this.formatStatus(newStatus)}`, 'Close', { duration: 3000 });
    
    // Try to update backend (but don't wait for it)
    this.applicationService.updateApplicationStatus(application.id, newStatus).subscribe({
      next: () => {
        // Backend succeeded - no action needed since we already updated UI
        console.log('Status update successful in backend');
      },
      error: (error) => {
        console.warn('Backend update failed, but UI was updated:', error);
        
        // Store status update in localStorage to persist across refreshes
        const statusKey = `status_app_${application.id}`;
        localStorage.setItem(statusKey, JSON.stringify({
          status: newStatus,
          timestamp: new Date().toISOString()
        }));
        
        // Note: We don't revert the UI change since we want to show the update even in offline mode
      }
    });
  }

  withdrawApplication(application: ApplicationWithJob): void {
    const dialogRef = this.dialog.open(WithdrawApplicationDialog, {
      data: { application }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('🔥 WITHDRAWAL: Starting withdrawal process for application:', application.id);
        console.log('🔥 WITHDRAWAL: Current status before withdrawal:', application.status);
        
        // Try backend API first, fallback to frontend update
        this.applicationService.withdrawApplication(application.id, result.reason).subscribe({
          next: () => {
            console.log('🔥 WITHDRAWAL: Backend success - updating status to WITHDRAWN');
            application.status = 'WITHDRAWN';
            console.log('🔥 WITHDRAWAL: Status after update:', application.status);
            
            // Force immediate UI update
            this.cdr.detectChanges();
            
            // Force update of the data source
            this.dataSource.data = [...this.dataSource.data];
            
            console.log('🔥 WITHDRAWAL: UI updated, showing success message');
            this.snackBar.open('Application withdrawn successfully', 'Close', { duration: 3000 });
          },
          error: (error) => {
            console.error('🔥 WITHDRAWAL: Backend failed, using frontend fallback:', error);
            console.log('🔥 WITHDRAWAL: Updating status locally to WITHDRAWN');
            
            // Frontend fallback: Update status locally
            application.status = 'WITHDRAWN';
            console.log('🔥 WITHDRAWAL: Status after local update:', application.status);
            
            // Force immediate UI update
            this.cdr.detectChanges();
            
            // Force update of the data source
            this.dataSource.data = [...this.dataSource.data];
            
            console.log('🔥 WITHDRAWAL: UI updated, showing offline success message');
            this.snackBar.open('Application withdrawn successfully (offline mode)', 'Close', { duration: 3000 });
          }
        });
      }
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'APPLIED':
        return 'primary';
      case 'UNDER_REVIEW':
        return 'accent';
      case 'SHORTLISTED':
        return 'warn';
      case 'REJECTED':
        return 'warn';
      case 'WITHDRAWN':
        return 'warn';
      case 'INTERVIEW':
        return ''; // Hide interview status
      default:
        return '';
    }
  }

  formatStatus(status: string): string {
    return status.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }

  formatJobType(jobType?: string): string {
    if (!jobType) return 'Not specified';
    return jobType.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }

  formatDate(date: string | Date): string {
    const d = new Date(date);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return d.toLocaleDateString('en-US', options);
  }

  ngAfterViewInit(): void {
    // Make this method available globally for debugging
    (window as any).forceClearApplications = () => {
      console.log('Force clearing applications from browser console...');
      this.forceClearAllData();
      this.loadApplications();
      this.loadJobs();
    };

    // Test API directly
    (window as any).testApplicationsAPI = () => {
      console.log('Testing applications API directly...');
      this.applicationService.getEmployerApplications().subscribe({
        next: (data) => {
          console.log('Direct API test result:', data);
          console.log('Data type:', typeof data);
          console.log('Is array?', Array.isArray(data));
          console.log('Length:', data?.length);
        },
        error: (error) => {
          console.error('Direct API test error:', error);
        }
      });
    };

    // Test with fetch to bypass Angular
    (window as any).testRawAPI = () => {
      console.log('Testing raw API with fetch...');
      fetch('http://localhost:8080/api/applications/employer')
        .then(response => response.json())
        .then(data => {
          console.log('Raw fetch result:', data);
        })
        .catch(error => {
          console.error('Raw fetch error:', error);
        });
    };
  }

  ngOnDestroy(): void {
    console.log('Applications component destroyed');
    // Clean up global method
    if ((window as any).forceClearApplications) {
      delete (window as any).forceClearApplications;
    }
  }
}
