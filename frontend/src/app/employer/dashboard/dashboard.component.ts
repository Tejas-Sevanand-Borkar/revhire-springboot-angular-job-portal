import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { JobService } from '../../core/services/job.service';
import { ApplicationService } from '../../core/services/application.service';
import { NotificationService } from '../../core/services/notification.service';

export interface EmployerDashboardStats {
  totalJobs: number;
  activeJobs: number;
  inactiveJobs: number;
  totalApplications: number;
  pendingApplications: number;
  underReviewApplications: number;
  shortlistedApplications: number;
  rejectedApplications: number;
  newApplicationsThisWeek: number;
  popularJobs: any[];
}

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class EmployerDashboardComponent implements OnInit {
  dashboardStats: EmployerDashboardStats = {
    totalJobs: 0,
    activeJobs: 0,
    inactiveJobs: 0,
    totalApplications: 0,
    pendingApplications: 0,
    underReviewApplications: 0,
    shortlistedApplications: 0,
    rejectedApplications: 0,
    newApplicationsThisWeek: 0,
    popularJobs: []
  };
  
  isLoading = true;
  currentUser: any = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private jobService: JobService,
    private applicationService: ApplicationService,
    private notificationService: NotificationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.createWelcomeNotification();
    this.refreshDashboard();
  }

  createWelcomeNotification(): void {
    if (!this.currentUser) return;
    
    console.log('Creating welcome notification for employer:', this.currentUser);
    
    // Check if we already created a welcome notification recently (avoid duplicates)
    const lastWelcomeKey = `last_welcome_${this.currentUser.userId}`;
    const lastWelcomeTime = localStorage.getItem(lastWelcomeKey);
    const now = new Date().getTime();
    
    // Only create welcome notification if it's been more than 24 hours since last one
    if (!lastWelcomeTime || (now - parseInt(lastWelcomeTime)) > 24 * 60 * 60 * 1000) {
      console.log('Creating new welcome notification...');
      this.notificationService.createWelcomeNotification(
        this.currentUser.userId,
        'Employer',
        `${this.currentUser.firstName} ${this.currentUser.lastName}`
      ).subscribe({
        next: (notification) => {
          console.log('Welcome notification created for employer:', notification);
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
    // Load real data and calculate statistics locally
    this.loadJobs();
    this.loadApplications();
    this.loadNotifications();
  }

  loadJobs(): void {
    this.jobService.getEmployerJobs().subscribe({
      next: (jobs) => {
        // Calculate job statistics locally
        this.dashboardStats.totalJobs = jobs.length;
        this.dashboardStats.activeJobs = jobs.filter(job => job.active).length;
        this.dashboardStats.inactiveJobs = jobs.filter(job => !job.active).length;
        
        // Convert to popular jobs format
        this.dashboardStats.popularJobs = jobs.slice(0, 3).map(job => ({
          id: job.id,
          title: job.title,
          applications: 0, // Will be updated in loadApplications
          views: 0, // TODO: Add views tracking to backend
          status: job.active ? 'active' : 'inactive'
        }));
      },
      error: (error) => {
        console.error('Error loading jobs:', error);
        this.snackBar.open('Error loading jobs', 'Close', { duration: 3000 });
      }
    });
  }

  loadApplications(): void {
    this.applicationService.getEmployerApplications().subscribe({
      next: (applications) => {
        // Restore saved statuses from localStorage
        const restoredApplications = applications.map(app => {
          const statusKey = `status_app_${app.id}`;
          const statusData = localStorage.getItem(statusKey);
          
          if (statusData) {
            const statusUpdate = JSON.parse(statusData);
            const updateTime = new Date(statusUpdate.timestamp);
            const now = new Date();
            const hoursDiff = (now.getTime() - updateTime.getTime()) / (1000 * 60 * 60);
            
            if (hoursDiff < 24) {
              return { ...app, status: statusUpdate.status };
            } else {
              localStorage.removeItem(statusKey);
            }
          }
          return app;
        });

        // Calculate statistics from actual application data
        // Exclude interview status from all calculations
        const filteredApplications = restoredApplications.filter(app => app.status !== 'INTERVIEW');
        
        this.dashboardStats.totalApplications = filteredApplications.length;
        this.dashboardStats.pendingApplications = filteredApplications.filter(app => app.status === 'APPLIED').length;
        this.dashboardStats.underReviewApplications = filteredApplications.filter(app => app.status === 'UNDER_REVIEW').length;
        this.dashboardStats.shortlistedApplications = filteredApplications.filter(app => app.status === 'SHORTLISTED').length;
        this.dashboardStats.rejectedApplications = filteredApplications.filter(app => app.status === 'REJECTED').length;
        
        this.dashboardStats.newApplicationsThisWeek = filteredApplications.filter(app => {
          const appDate = new Date(app.createdAt);
          const weekAgo = new Date();
          weekAgo.setDate(weekAgo.getDate() - 7);
          return appDate >= weekAgo;
        }).length;

        // Update application counts for each job
        this.dashboardStats.popularJobs.forEach(job => {
          job.applications = filteredApplications.filter(app => app.jobId === job.id).length;
        });

        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading applications:', error);
        this.snackBar.open('Error loading applications', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  navigateToJobs(): void {
    this.router.navigate(['/employer/jobs']);
  }

  navigateToApplications(): void {
    this.router.navigate(['/employer/applications']);
  }

  navigateToPostJob(): void {
    this.router.navigate(['/employer/post-job']);
  }

  loadNotifications(): void {
    console.log('Loading notifications...');
    if (this.currentUser && this.currentUser.userId) {
      this.notificationService.getUserNotifications(this.currentUser.userId).subscribe({
        next: (notifications) => {
          console.log('Notifications loaded:', notifications);
          // Update unread count
          const unreadCount = notifications.filter(n => !n.isRead).length;
          this.notificationService.updateUnreadCount(unreadCount);
        },
        error: (error) => {
          console.error('Error loading notifications:', error);
        }
      });
    }
  }

  navigateToJobDetails(jobId: number): void {
    this.router.navigate(['/employer/jobs', jobId]);
  }

  navigateToApplicants(jobId: number): void {
    this.router.navigate(['/employer/jobs', jobId, 'applicants']);
  }

  getApplicationRate(): number {
    const total = this.dashboardStats.totalApplications;
    const jobs = this.dashboardStats.totalJobs;
    if (jobs === 0) return 0;
    return Math.round(total / jobs);
  }

  getConversionRate(): number {
    const total = this.dashboardStats.totalApplications;
    const shortlisted = this.dashboardStats.shortlistedApplications;
    const underReview = this.dashboardStats.underReviewApplications;
    
    if (total === 0) return 0;
    
    // Calculate "positive progress rate" - applications that have moved beyond initial "Applied" status
    const positiveProgress = shortlisted + underReview;
    return Math.round((positiveProgress / total) * 100);
  }

  refreshDashboard(): void {
    this.isLoading = true;
    this.loadJobs();
    this.loadApplications();
  }

  formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }

  getJobConversionRate(job: any): number {
    if (!job.views || job.views === 0) return 0;
    return Math.round((job.applications / job.views) * 100);
  }

  getJobStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'active': return 'primary';
      case 'inactive': return 'warn';
      case 'closed': return 'accent';
      default: return 'primary';
    }
  }
}
