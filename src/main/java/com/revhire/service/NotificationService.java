package com.revhire.service;

import com.revhire.entity.Application;
import com.revhire.entity.Job;
import com.revhire.entity.Notification;
import com.revhire.entity.User;
import com.revhire.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationService {
    
    private final NotificationRepository notificationRepository;
    private final UserService userService;
    
    @Transactional
    public void createApplicationStatusNotification(Application application) {
        log.info("Creating application status notification for application ID: {}", application.getId());
        
        Notification notification = new Notification();
        notification.setTitle("New Application Received");
        notification.setMessage("You have received a new application for the job: " + 
                              (application.getJob() != null ? application.getJob().getTitle() : "Unknown"));
        notification.setType(Notification.NotificationType.APPLICATION_RECEIVED);
        notification.setUser(application.getEmployer());
        notification.setRelatedJob(application.getJob());
        notification.setRelatedApplication(application);
        
        notificationRepository.save(notification);
        
        log.info("Application status notification created successfully for employer: {}", 
                application.getEmployer().getEmail());
    }
    
    @Transactional
    public void createApplicationStatusChangeNotification(Application application, 
                                                         Application.ApplicationStatus oldStatus, 
                                                         Application.ApplicationStatus newStatus) {
        log.info("Creating application status change notification for application ID: {} from {} to {}", 
                application.getId(), oldStatus, newStatus);
        
        Notification jobSeekerNotification = new Notification();
        jobSeekerNotification.setTitle("Application Status Updated");
        jobSeekerNotification.setMessage("Your application status for the job '" + 
                                       (application.getJob() != null ? application.getJob().getTitle() : "Unknown") + 
                                       "' has been updated from " + oldStatus + " to " + newStatus);
        jobSeekerNotification.setType(Notification.NotificationType.APPLICATION_STATUS_CHANGED);
        jobSeekerNotification.setUser(application.getJobSeeker());
        jobSeekerNotification.setRelatedJob(application.getJob());
        jobSeekerNotification.setRelatedApplication(application);
        
        notificationRepository.save(jobSeekerNotification);
        
        log.info("Application status change notification created successfully for job seeker: {}", 
                application.getJobSeeker().getEmail());
    }
    
    @Transactional
    public void createJobPostedNotification(Job job) {
        log.info("Creating job posted notification for job ID: {}", job.getId());
        
        List<User> jobSeekers = userService.findActiveUsersByRole(User.UserRole.SEEKER);
        
        for (User jobSeeker : jobSeekers) {
            Notification notification = new Notification();
            notification.setTitle("New Job Posted");
            notification.setMessage("A new job '" + job.getTitle() + 
                                  "' has been posted that might interest you");
            notification.setType(Notification.NotificationType.JOB_POSTED);
            notification.setUser(jobSeeker);
            notification.setRelatedJob(job);
            
            notificationRepository.save(notification);
        }
        
        log.info("Job posted notifications created successfully for {} job seekers", jobSeekers.size());
    }
    
    @Transactional
    public void createSystemNotification(String title, String message, User.UserRole targetRole) {
        log.info("Creating system notification for role: {}", targetRole);
        
        List<User> targetUsers = userService.findActiveUsersByRole(targetRole);
        
        for (User user : targetUsers) {
            Notification notification = new Notification();
            notification.setTitle(title);
            notification.setMessage(message);
            notification.setType(Notification.NotificationType.SYSTEM_NOTIFICATION);
            notification.setUser(user);
            
            notificationRepository.save(notification);
        }
        
        log.info("System notifications created successfully for {} users with role: {}", 
                targetUsers.size(), targetRole);
    }
    
    @Transactional(readOnly = true)
    public List<Notification> getNotificationsByUser(Long userId) {
        return notificationRepository.findActiveNotificationsByUser(userId);
    }
    
    @Transactional(readOnly = true)
    public List<Notification> getUnreadNotificationsByUser(Long userId) {
        return notificationRepository.findUnreadNotificationsByUser(userId);
    }
    
    @Transactional
    public void markNotificationAsRead(Long notificationId) {
        log.info("Marking notification as read: {}", notificationId);
        
        Notification notification = notificationRepository.findActiveNotificationById(notificationId)
                .orElseThrow(() -> new com.revhire.exception.ResourceNotFoundException(
                        "Notification not found with ID: " + notificationId));
        
        notification.setIsRead(true);
        notificationRepository.save(notification);
        
        log.info("Notification marked as read successfully: {}", notificationId);
    }
    
    @Transactional
    public void markAllNotificationsAsRead(Long userId) {
        log.info("Marking all notifications as read for user: {}", userId);
        
        List<Notification> unreadNotifications = notificationRepository.findUnreadNotificationsByUser(userId);
        
        for (Notification notification : unreadNotifications) {
            notification.setIsRead(true);
            notificationRepository.save(notification);
        }
        
        log.info("All notifications marked as read successfully for user: {}", userId);
    }
    
    @Transactional
    public void deleteNotification(Long notificationId) {
        log.info("Deleting notification: {}", notificationId);
        
        Notification notification = notificationRepository.findActiveNotificationById(notificationId)
                .orElseThrow(() -> new com.revhire.exception.ResourceNotFoundException(
                        "Notification not found with ID: " + notificationId));
        
        notification.setDeleted(true);
        notificationRepository.save(notification);
        
        log.info("Notification deleted successfully: {}", notificationId);
    }
    
    @Transactional(readOnly = true)
    public Long countUnreadNotifications(Long userId) {
        return notificationRepository.countUnreadNotificationsByUser(userId);
    }
    
    @Transactional(readOnly = true)
    public Long countUnreadNotificationsForCurrentUser() {
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            return 0L;
        }
        return countUnreadNotifications(currentUser.getId());
    }
    
    @Transactional
    public Notification createNotification(Notification notification) {
        log.info("Creating notification: {} for user: {}", notification.getTitle(), 
                notification.getUser() != null ? notification.getUser().getEmail() : "Unknown");
        
        Notification savedNotification = notificationRepository.save(notification);
        
        log.info("Notification created successfully with ID: {}", savedNotification.getId());
        return savedNotification;
    }
    
    @Transactional
    public void createJobRecommendationNotification(User jobSeeker, Job job) {
        log.info("Creating job recommendation notification for user: {} and job: {}", 
                jobSeeker.getEmail(), job.getTitle());
        
        Notification notification = new Notification();
        notification.setTitle("Job Recommendation");
        notification.setMessage("Based on your profile, we recommend the job: '" + job.getTitle() + 
                              "' at " + job.getLocation());
        notification.setType(Notification.NotificationType.JOB_RECOMMENDATION);
        notification.setUser(jobSeeker);
        notification.setRelatedJob(job);
        
        notificationRepository.save(notification);
        
        log.info("Job recommendation notification created successfully for user: {}", jobSeeker.getEmail());
    }
    
    @Transactional
    public void createApplicationDeadlineNotification(Job job) {
        log.info("Creating application deadline notification for job: {}", job.getTitle());
        
        // Find all job seekers who have saved this job
        List<User> interestedJobSeekers = userService.findJobSeekersWhoSavedJob(job.getId());
        
        for (User jobSeeker : interestedJobSeekers) {
            Notification notification = new Notification();
            notification.setTitle("Application Deadline Reminder");
            notification.setMessage("The application deadline for the job '" + job.getTitle() + 
                                  "' is approaching. Apply soon!");
            notification.setType(Notification.NotificationType.APPLICATION_DEADLINE);
            notification.setUser(jobSeeker);
            notification.setRelatedJob(job);
            
            notificationRepository.save(notification);
        }
        
        log.info("Application deadline notifications created successfully for {} job seekers", 
                interestedJobSeekers.size());
    }
    
    @Transactional
    public void createWelcomeNotification(User user) {
        log.info("Creating welcome notification for user: {}", user.getEmail());
        
        Notification notification = new Notification();
        notification.setTitle("Welcome to RevHire!");
        notification.setMessage("Welcome to RevHire! " +
                              (user.getRole() == User.UserRole.SEEKER ? 
                               "Start building your profile and search for jobs." : 
                               "Start posting jobs and find the best candidates."));
        notification.setType(Notification.NotificationType.SYSTEM_NOTIFICATION);
        notification.setUser(user);
        
        notificationRepository.save(notification);
        
        log.info("Welcome notification created successfully for user: {}", user.getEmail());
    }
}
