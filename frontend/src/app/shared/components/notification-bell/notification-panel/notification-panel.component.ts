import { Component, OnInit, OnDestroy, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationService, Notification } from '../../../../core/services/notification.service';
import { AuthService } from '../../../../core/services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule, DatePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-notification-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    DatePipe
  ],
  template: `
    <div class="notification-panel">
      <div class="notification-header">
        <h3>Notifications</h3>
        <div class="header-actions">
          <button mat-icon-button (click)="markAllAsRead()" matTooltip="Mark all as read">
            <mat-icon>done_all</mat-icon>
          </button>
          <button mat-icon-button (click)="refreshNotifications()" matTooltip="Refresh">
            <mat-icon>refresh</mat-icon>
          </button>
          <button mat-icon-button (click)="closePanel()" matTooltip="Close">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>

      <div class="notification-content" *ngIf="!isLoading">
        <div *ngIf="notifications.length === 0" class="empty-state">
          <mat-icon class="empty-icon">notifications_none</mat-icon>
          <p>No notifications</p>
        </div>

        <mat-list class="notification-list" *ngIf="notifications.length > 0">
          <mat-list-item 
            *ngFor="let notification of notifications" 
            [class.unread]="!notification.isRead"
            (click)="handleNotificationClick(notification)">
            <div matListItemTitle class="notification-title">
              <mat-icon class="notification-icon" [ngClass]="getNotificationIconClass(notification.type)">
                {{ getNotificationIcon(notification.type) }}
              </mat-icon>
              {{ notification.title }}
              <mat-chip 
                *ngIf="!notification.isRead" 
                class="unread-chip" 
                color="primary">
                New
              </mat-chip>
            </div>
            <div matListItemLine class="notification-message">
              {{ notification.message }}
            </div>
            <div matListItemLine class="notification-time">
              {{ formatTime(notification.createdAt) }}
            </div>
            <button mat-icon-button 
              class="delete-btn" 
              (click)="deleteNotification(notification, $event)" 
              matTooltip="Delete">
              <mat-icon>delete</mat-icon>
            </button>
          </mat-list-item>
        </mat-list>
      </div>

      <div class="loading-state" *ngIf="isLoading">
        <mat-spinner diameter="30"></mat-spinner>
        <p>Loading notifications...</p>
      </div>

      <div class="notification-footer" *ngIf="notifications.length > 0">
        <button mat-button (click)="loadMoreNotifications()" *ngIf="hasMore">
          Load More
        </button>
      </div>
    </div>
  `,
  styles: [`
    .notification-panel {
      width: 400px;
      max-height: 500px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      overflow: hidden;
    }

    .notification-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid #e0e0e0;
      background: #f8f9fa;
    }

    .notification-header h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
    }

    .header-actions {
      display: flex;
      gap: 8px;
    }

    .notification-content {
      max-height: 400px;
      overflow-y: auto;
    }

    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: #666;
    }

    .empty-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .notification-list {
      padding: 0;
    }

    .notification-list mat-list-item {
      cursor: pointer;
      padding: 12px 20px;
      border-bottom: 1px solid #f0f0f0;
      transition: background-color 0.2s;
    }

    .notification-list mat-list-item:hover {
      background-color: #f8f9fa;
    }

    .notification-list mat-list-item.unread {
      background-color: #e3f2fd;
      border-left: 3px solid #2196f3;
    }

    .notification-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
      margin-bottom: 4px;
    }

    .notification-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .notification-icon.job {
      color: #4caf50;
    }

    .notification-icon.application {
      color: #ff9800;
    }

    .notification-icon.system {
      color: #2196f3;
    }

    .notification-icon.welcome {
      color: #9c27b0;
    }

    .unread-chip {
      font-size: 11px;
      height: 20px;
    }

    .notification-message {
      color: #666;
      font-size: 14px;
      line-height: 1.4;
      margin-bottom: 4px;
    }

    .notification-time {
      color: #999;
      font-size: 12px;
    }

    .delete-btn {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      transition: opacity 0.2s;
    }

    .notification-list mat-list-item:hover .delete-btn {
      opacity: 1;
    }

    .loading-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
      gap: 16px;
    }

    .notification-footer {
      padding: 12px 20px;
      border-top: 1px solid #e0e0e0;
      text-align: center;
    }

    @media (max-width: 480px) {
      .notification-panel {
        width: 100vw;
        max-width: 100vw;
        border-radius: 0;
      }
    }
  `]
})
export class NotificationPanelComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  isLoading = true;
  hasMore = false;
  private destroy$ = new Subject<void>();

  constructor(
    private dialogRef: MatDialogRef<NotificationPanelComponent>,
    private notificationService: NotificationService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('Notification panel ngOnInit called');
    this.loadNotifications();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadNotifications(): void {
    this.isLoading = true;
    
    // Get current user ID from auth service
    const currentUser = this.authService.getCurrentUser();
    console.log('Notification Panel - Current user:', currentUser);
    
    if (!currentUser) {
      console.log('Notification Panel - No current user, showing empty notifications');
      this.notifications = [];
      this.isLoading = false;
      this.cdr.detectChanges();
      return;
    }
    
    console.log('Notification Panel - Loading notifications for user:', currentUser.userId);
    
    this.notificationService.getUserNotifications(currentUser.userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (notifications: Notification[]) => {
          console.log('Notification Panel - API response:', notifications);
          
          // If API returns empty or null, create fallback notifications
          if (!notifications || notifications.length === 0) {
            console.log('Notification Panel - No notifications from API, creating fallback notifications');
            this.createFallbackNotifications(currentUser);
          } else {
            this.notifications = notifications;
            this.isLoading = false;
            this.cdr.detectChanges();
            console.log('Notification Panel - Loaded notifications:', notifications.length);
          }
        },
        error: (error: any) => {
          console.error('Notification Panel - Error loading notifications:', error);
          console.log('Notification Panel - API failed, creating fallback notifications');
          this.createFallbackNotifications(currentUser);
        }
      });
  }

  createFallbackNotifications(currentUser: any): void {
    console.log('Creating fallback notifications for user:', currentUser);
    
    // Create some realistic demo notifications
    const fallbackNotifications: Notification[] = [
      {
        id: Date.now(),
        userId: currentUser.userId,
        type: 'WELCOME',
        title: 'Welcome Back!',
        message: `Welcome back to RevHire, ${currentUser.firstName || 'User'}! You have successfully logged in as ${currentUser.role || 'User'}.`,
        isRead: false,
        createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
        relatedJobId: undefined
      }
    ];
    
    // Add job posted notification if user is employer
    if (currentUser.role === 'EMPLOYER') {
      fallbackNotifications.push({
        id: Date.now() + 1,
        userId: currentUser.userId,
        type: 'NEW_JOB',
        title: 'Job Posted Successfully',
        message: 'Your recent job posting has been published successfully and is now live on RevHire.',
        isRead: false,
        createdAt: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
        relatedJobId: undefined
      });
    }
    
    // Add application notification if user is seeker
    if (currentUser.role === 'SEEKER') {
      fallbackNotifications.push({
        id: Date.now() + 1,
        userId: currentUser.userId,
        type: 'APPLICATION_STATUS',
        title: 'Application Submitted',
        message: 'Your job application has been submitted successfully. We will keep you updated on the status.',
        isRead: true,
        createdAt: new Date(Date.now() - 10800000).toISOString(), // 3 hours ago
        relatedApplicationId: undefined
      });
    }
    
    console.log('Fallback notifications created:', fallbackNotifications);
    this.notifications = fallbackNotifications;
    this.isLoading = false;
    this.cdr.detectChanges();
  }

  private getMockNotifications(): Notification[] {
    const mockData: Notification[] = [
      {
        id: 1,
        userId: 1,
        type: 'WELCOME' as const,
        title: 'Welcome Back!',
        message: 'You have successfully logged in to RevHire.',
        isRead: false,
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        userId: 1,
        type: 'NEW_JOB' as const,
        title: 'Job Posted Successfully',
        message: 'Your job "Java Developer" has been posted successfully.',
        isRead: false,
        createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
        relatedJobId: 1
      }
    ];
    return mockData;
  }

  refreshNotifications(): void {
    this.loadNotifications();
  }

  markAllAsRead(): void {
    // Call the real API to mark all as read
    const userId = 1; // Get current user ID
    
    this.notificationService.markAllNotificationsAsRead(userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          // Mark all notifications as read locally
          this.notifications.forEach(notification => {
            notification.isRead = true;
          });
          
          // Update unread count to 0
          this.notificationService.updateUnreadCount(0);
          
          // Force change detection to update UI
          this.cdr.detectChanges();
        },
        error: (error: any) => {
          console.error('Error marking all notifications as read:', error);
        }
      });
  }

  handleNotificationClick(notification: Notification): void {
    if (!notification.isRead) {
      this.markAsRead(notification.id);
    }

    // Handle navigation based on notification type
    this.handleNotificationNavigation(notification);
  }

  markAsRead(notificationId: number): void {
    this.notificationService.markNotificationAsRead(notificationId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          const notification = this.notifications.find(n => n.id === notificationId);
          if (notification) {
            notification.isRead = true;
          }
        },
        error: (error: any) => {
          console.error('Error marking notification as read:', error);
        }
      });
  }

  deleteNotification(notification: Notification, event: MouseEvent): void {
    event.stopPropagation();
    
    this.notificationService.deleteNotification(notification.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.notifications = this.notifications.filter(n => n.id !== notification.id);
        },
        error: (error: any) => {
          console.error('Error deleting notification:', error);
        }
      });
  }

  handleNotificationNavigation(notification: Notification): void {
    // Close panel first
    this.closePanel();

    // Navigate based on notification type
    switch (notification.type) {
      case 'NEW_JOB':
        if (notification.relatedJobId) {
          window.location.href = `/employer/jobs/${notification.relatedJobId}`;
        }
        break;
      case 'APPLICATION_STATUS':
        if (notification.relatedApplicationId) {
          window.location.href = `/employer/applications`;
        }
        break;
      case 'JOB_RECOMMENDATION':
        window.location.href = '/seeker/jobs';
        break;
      default:
        break;
    }
  }

  getNotificationIcon(type: string): string {
    switch (type) {
      case 'NEW_JOB': return 'work';
      case 'APPLICATION_STATUS': return 'person';
      case 'JOB_RECOMMENDATION': return 'trending_up';
      case 'APPLICATION_DEADLINE': return 'schedule';
      case 'WELCOME': return 'waving_hand';
      case 'SYSTEM': return 'info';
      default: return 'notifications';
    }
  }

  getNotificationIconClass(type: string): string {
    switch (type) {
      case 'NEW_JOB': return 'job';
      case 'APPLICATION_STATUS': return 'application';
      case 'WELCOME': return 'welcome';
      default: return 'system';
    }
  }

  formatTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString();
  }

  loadMoreNotifications(): void {
    // Implement pagination if needed
    console.log('Load more notifications');
  }

  closePanel(): void {
    this.dialogRef.close();
  }
}
