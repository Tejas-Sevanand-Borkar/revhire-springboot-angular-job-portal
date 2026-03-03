import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Notification {
  id: number;
  userId: number;
  type: 'APPLICATION_STATUS' | 'NEW_JOB' | 'JOB_RECOMMENDATION' | 'APPLICATION_DEADLINE' | 'WELCOME' | 'SYSTEM';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  relatedJobId?: number;
  relatedApplicationId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly API_URL = 'http://localhost:8080/api/notifications';
  private unreadCountSubject = new BehaviorSubject<number>(0);
  public unreadCount$ = this.unreadCountSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUserNotifications(userId: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.API_URL}/user/${userId}`);
  }

  getUnreadNotifications(userId: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.API_URL}/user/${userId}/unread`);
  }

  markNotificationAsRead(notificationId: number): Observable<void> {
    return this.http.patch<void>(`${this.API_URL}/${notificationId}/read`, {});
  }

  markAllNotificationsAsRead(userId: number): Observable<void> {
    return this.http.patch<void>(`${this.API_URL}/user/${userId}/read-all`, {});
  }

  deleteNotification(notificationId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${notificationId}`);
  }

  getUnreadCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.API_URL}/unread-count`);
  }

  createNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(this.API_URL, notification);
  }

  // Helper methods for creating specific notification types
  createWelcomeNotification(userId: number, userRole: string, userName: string): Observable<Notification> {
    const welcomeNotification: Notification = {
      id: 0, // Backend will assign ID
      userId: userId,
      type: 'WELCOME',
      title: 'Welcome Back!',
      message: `Welcome back to RevHire, ${userName}! You have successfully logged in as ${userRole}.`,
      isRead: false,
      createdAt: new Date().toISOString()
    };
    return this.createNotification(welcomeNotification);
  }

  createJobPostedNotification(userId: number, jobTitle: string, jobId: number): Observable<Notification> {
    const jobNotification: Notification = {
      id: 0, // Backend will assign ID
      userId: userId,
      type: 'NEW_JOB',
      title: 'Job Posted Successfully',
      message: `Your job "${jobTitle}" has been posted successfully and is now live on RevHire.`,
      isRead: false,
      createdAt: new Date().toISOString(),
      relatedJobId: jobId
    };
    return this.createNotification(jobNotification);
  }

  createJobApplicationNotification(userId: number, jobTitle: string, applicationId: number): Observable<Notification> {
    const applicationNotification: Notification = {
      id: 0, // Backend will assign ID
      userId: userId,
      type: 'APPLICATION_STATUS',
      title: 'Job Application Submitted',
      message: `Your application for "${jobTitle}" has been submitted successfully. We'll keep you updated on the status.`,
      isRead: false,
      createdAt: new Date().toISOString(),
      relatedApplicationId: applicationId
    };
    return this.createNotification(applicationNotification);
  }

  updateUnreadCount(count: number): void {
    this.unreadCountSubject.next(count);
  }
}
