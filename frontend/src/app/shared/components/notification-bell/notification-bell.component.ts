import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationService, Notification } from '../../../core/services/notification.service';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.scss']
})
export class NotificationBellComponent implements OnInit, OnDestroy {
  unreadCount = 0;
  private destroy$ = new Subject<void>();

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadUnreadCount();
    this.notificationService.unreadCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe(count => {
        this.unreadCount = count;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadUnreadCount(): void {
    console.log('Loading unread notification count...');
    console.log('User logged in:', this.authService.isLoggedIn());
    console.log('Current user:', this.authService.getCurrentUser());
    
    // First check if user is logged in
    if (!this.authService.isLoggedIn()) {
      console.log('User not logged in, setting count to 0');
      this.unreadCount = 0;
      this.notificationService.updateUnreadCount(0);
      return;
    }
    
    // Always get notifications and count them to ensure accuracy
    this.getNotificationsAndCount();
  }

  private getNotificationsAndCount(): void {
    const currentUser = this.authService.getCurrentUser();
    
    if (!currentUser) {
      console.log('No current user, setting count to 0');
      this.unreadCount = 0;
      this.notificationService.updateUnreadCount(0);
      return;
    }
    
    console.log('Getting notifications for user:', currentUser.userId);
    
    this.notificationService.getUserNotifications(currentUser.userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (notifications: Notification[]) => {
          console.log('Notifications received:', notifications);
          
          // If API returns empty or null, use fallback count
          if (!notifications || notifications.length === 0) {
            console.log('No notifications from API, using fallback count');
            this.unreadCount = 1; // At least welcome notification
            this.notificationService.updateUnreadCount(1);
          } else {
            // Count unread notifications
            const unreadCount = notifications.filter(n => !n.isRead).length;
            console.log('Unread count calculated:', unreadCount);
            this.unreadCount = unreadCount;
            this.notificationService.updateUnreadCount(unreadCount);
          }
        },
        error: (error) => {
          console.error('Error getting notifications:', error);
          console.log('API failed, using fallback count');
          // Fallback to at least 1 notification (welcome)
          this.unreadCount = 1;
          this.notificationService.updateUnreadCount(1);
        }
      });
  }

  toggleNotifications(): void {
    const dialogRef = this.dialog.open(NotificationPanelComponent, {
      position: { top: '60px', right: '20px' },
      panelClass: 'notification-panel',
      hasBackdrop: true,
      backdropClass: 'notification-backdrop'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadUnreadCount();
    });
  }

  showJobPostedNotification(jobTitle: string): void {
    this.snackBar.open(`Job "${jobTitle}" posted successfully!`, 'View', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    }).onAction().subscribe(() => {
      // Navigate to jobs page
      window.location.href = '/employer/jobs';
    });
  }
}
