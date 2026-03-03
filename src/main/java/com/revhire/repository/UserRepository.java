package com.revhire.repository;

import com.revhire.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);
    
    boolean existsByEmail(String email);
    
    @Query("SELECT u FROM User u WHERE u.id = :userId AND u.deleted = false")
    Optional<User> findActiveUserById(@Param("userId") Long userId);
    
    @Query("SELECT u FROM User u WHERE u.email = :email AND u.deleted = false")
    Optional<User> findActiveUserByEmail(@Param("email") String email);
    
    @Query("SELECT u FROM User u WHERE u.role = :role AND u.deleted = false")
    List<User> findActiveUsersByRole(@Param("role") User.UserRole role);
    
    @Query("SELECT DISTINCT u FROM User u " +
           "INNER JOIN u.jobSeekerProfile s " +
           "INNER JOIN com.revhire.entity.SavedJob sj ON sj.jobSeeker.id = u.id " +
           "WHERE sj.job.id = :jobId AND u.deleted = false")
    List<User> findJobSeekersWhoSavedJob(@Param("jobId") Long jobId);
    
    @Query("SELECT COUNT(u) FROM User u WHERE u.role = :role AND u.deleted = false")
    Long countByRole(@Param("role") User.UserRole role);
    
    @Query("SELECT COUNT(u) FROM User u WHERE u.role = :role AND u.deleted = false AND u.active = true")
    Long countActiveByRole(@Param("role") User.UserRole role);
    
    @Query("SELECT COUNT(u) FROM User u WHERE u.createdAt >= :date AND u.deleted = false")
    Long countUsersCreatedAfter(@Param("date") java.time.LocalDateTime date);
}
