package com.revhire.controller;

import com.revhire.entity.Notification;
import com.revhire.service.NotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600)
public class NotificationController {
    
    private final NotificationService notificationService;
    
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasRole('SEEKER') or hasRole('EMPLOYER') or #userId == authentication.principal.id")
    public ResponseEntity<List<Notification>> getNotificationsByUser(@PathVariable Long userId) {
        log.info("Fetching notifications for user ID: {}", userId);
        
        List<Notification> notifications = notificationService.getNotificationsByUser(userId);
        
        return ResponseEntity.ok(notifications);
    }
    
    @GetMapping("/user/{userId}/unread")
    @PreAuthorize("hasRole('SEEKER') or hasRole('EMPLOYER') or #userId == authentication.principal.id")
    public ResponseEntity<List<Notification>> getUnreadNotificationsByUser(@PathVariable Long userId) {
        log.info("Fetching unread notifications for user ID: {}", userId);
        
        List<Notification> notifications = notificationService.getUnreadNotificationsByUser(userId);
        
        return ResponseEntity.ok(notifications);
    }
    
    @GetMapping("/unread-count")
    @PreAuthorize("hasRole('SEEKER') or hasRole('EMPLOYER')")
    public ResponseEntity<Map<String, Long>> getUnreadCount() {
        log.info("Fetching unread notification count for current user");
        
        Long count = notificationService.countUnreadNotificationsForCurrentUser();
        
        return ResponseEntity.ok(Map.of("count", count));
    }
    
    @PostMapping
    @PreAuthorize("hasRole('SEEKER') or hasRole('EMPLOYER')")
    public ResponseEntity<Notification> createNotification(@RequestBody Notification notification) {
        log.info("Creating notification: {}", notification.getTitle());
        
        Notification createdNotification = notificationService.createNotification(notification);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(createdNotification);
    }
    
    @GetMapping("/user/{userId}/count")
    @PreAuthorize("hasRole('SEEKER') or hasRole('EMPLOYER') or #userId == authentication.principal.id")
    public ResponseEntity<Map<String, Long>> getUnreadNotificationCount(@PathVariable Long userId) {
        log.info("Fetching unread notification count for user ID: {}", userId);
        
        Long count = notificationService.countUnreadNotifications(userId);
        
        return ResponseEntity.ok(Map.of("count", count));
    }
    
    @PatchMapping("/{id}/read")
    @PreAuthorize("hasRole('SEEKER') or hasRole('EMPLOYER')")
    public ResponseEntity<Void> markNotificationAsRead(@PathVariable Long id) {
        log.info("Marking notification as read: {}", id);
        
        notificationService.markNotificationAsRead(id);
        
        return ResponseEntity.ok().build();
    }
    
    @PatchMapping("/user/{userId}/read-all")
    @PreAuthorize("hasRole('SEEKER') or hasRole('EMPLOYER') or #userId == authentication.principal.id")
    public ResponseEntity<Void> markAllNotificationsAsRead(@PathVariable Long userId) {
        log.info("Marking all notifications as read for user ID: {}", userId);
        
        notificationService.markAllNotificationsAsRead(userId);
        
        return ResponseEntity.ok().build();
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SEEKER') or hasRole('EMPLOYER')")
    public ResponseEntity<Void> deleteNotification(@PathVariable Long id) {
        log.info("Deleting notification: {}", id);
        
        notificationService.deleteNotification(id);
        
        return ResponseEntity.noContent().build();
    }
}
