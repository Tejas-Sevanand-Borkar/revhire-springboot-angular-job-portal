package com.revhire.repository;

import com.revhire.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    
    @Query("SELECT n FROM Notification n WHERE n.id = :notificationId AND n.deleted = false")
    Optional<Notification> findActiveNotificationById(@Param("notificationId") Long notificationId);
    
    @Query("SELECT n FROM Notification n WHERE n.user.id = :userId AND n.deleted = false ORDER BY n.createdAt DESC")
    List<Notification> findActiveNotificationsByUser(@Param("userId") Long userId);
    
    @Query("SELECT n FROM Notification n WHERE n.user.id = :userId AND n.isRead = false AND n.deleted = false ORDER BY n.createdAt DESC")
    List<Notification> findUnreadNotificationsByUser(@Param("userId") Long userId);
    
    @Query("SELECT n FROM Notification n WHERE n.user.id = :userId AND n.type = :type AND n.deleted = false ORDER BY n.createdAt DESC")
    List<Notification> findNotificationsByUserAndType(@Param("userId") Long userId, @Param("type") Notification.NotificationType type);
    
    @Query("SELECT COUNT(n) FROM Notification n WHERE n.user.id = :userId AND n.isRead = false AND n.deleted = false")
    Long countUnreadNotificationsByUser(@Param("userId") Long userId);
    
    @Query("SELECT COUNT(n) FROM Notification n WHERE n.user.id = :userId AND n.deleted = false")
    Long countAllNotificationsByUser(@Param("userId") Long userId);
    
    @Query("SELECT n FROM Notification n WHERE n.relatedJob.id = :jobId AND n.deleted = false ORDER BY n.createdAt DESC")
    List<Notification> findNotificationsByJob(@Param("jobId") Long jobId);
    
    @Query("SELECT n FROM Notification n WHERE n.relatedApplication.id = :applicationId AND n.deleted = false ORDER BY n.createdAt DESC")
    List<Notification> findNotificationsByApplication(@Param("applicationId") Long applicationId);
}
