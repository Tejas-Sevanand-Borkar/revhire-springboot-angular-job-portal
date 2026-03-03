package com.revhire.service;

import com.revhire.entity.*;
import com.revhire.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class DashboardService {
    
    private final JobRepository jobRepository;
    private final ApplicationRepository applicationRepository;
    private final UserRepository userRepository;
    private final NotificationRepository notificationRepository;
    private final SavedJobRepository savedJobRepository;
    
    @Transactional(readOnly = true)
    public Map<String, Object> getEmployerDashboardStats(Long employerId) {
        log.info("Fetching employer dashboard stats for employer ID: {}", employerId);
        
        Map<String, Object> stats = new HashMap<>();
        
        // Job statistics
        Long totalJobs = jobRepository.countJobsByEmployer(employerId);
        Long activeJobs = jobRepository.countActiveJobsByEmployer(employerId);
        stats.put("totalJobs", totalJobs);
        stats.put("activeJobs", activeJobs);
        stats.put("inactiveJobs", totalJobs - activeJobs);
        
        // Application statistics
        List<Long> jobIds = jobRepository.findActiveJobsByEmployer(employerId)
            .stream()
            .map(job -> job.getId())
            .toList();
        
        Long totalApplications = applicationRepository.countApplicationsByJobs(jobIds);
        Long pendingApplications = applicationRepository.countApplicationsByJobsAndStatus(
            jobIds, com.revhire.entity.Application.ApplicationStatus.APPLIED);
        Long shortlistedApplications = applicationRepository.countApplicationsByJobsAndStatus(
            jobIds, com.revhire.entity.Application.ApplicationStatus.SHORTLISTED);
        Long rejectedApplications = applicationRepository.countApplicationsByJobsAndStatus(
            jobIds, com.revhire.entity.Application.ApplicationStatus.REJECTED);
        
        stats.put("totalApplications", totalApplications);
        stats.put("pendingApplications", pendingApplications);
        stats.put("shortlistedApplications", shortlistedApplications);
        stats.put("rejectedApplications", rejectedApplications);
        
        // Recent activity
        LocalDateTime weekAgo = LocalDateTime.now().minusDays(7);
        Long newApplicationsThisWeek = applicationRepository.countApplicationsByJobsAndDate(
            jobIds, weekAgo);
        stats.put("newApplicationsThisWeek", newApplicationsThisWeek);
        
        // Popular jobs (most applications)
        List<Job> popularJobEntities = jobRepository.findPopularJobsByEmployer(employerId, 5);
        List<Map<String, Object>> popularJobs = popularJobEntities.stream()
            .map(job -> {
                Map<String, Object> jobMap = new HashMap<>();
                jobMap.put("id", job.getId());
                jobMap.put("title", job.getTitle());
                jobMap.put("company", job.getEmployer().getFirstName() + " " + job.getEmployer().getLastName());
                jobMap.put("applications", applicationRepository.countApplicationsByJob(job.getId()));
                jobMap.put("views", 0L); // Will be implemented later
                jobMap.put("status", job.getActive() != null && job.getActive() ? "active" : "inactive");
                return jobMap;
            })
            .toList();
        stats.put("popularJobs", popularJobs);
        
        log.info("Employer dashboard stats retrieved successfully");
        return stats;
    }
    
    @Transactional(readOnly = true)
    public Map<String, Object> getJobSeekerDashboardStats(Long jobSeekerId) {
        log.info("Fetching job seeker dashboard stats for job seeker ID: {}", jobSeekerId);
        
        Map<String, Object> stats = new HashMap<>();
        
        // Application statistics
        Long totalApplications = applicationRepository.countApplicationsByJobSeeker(jobSeekerId);
        Long pendingApplications = applicationRepository.countApplicationsByJobSeekerAndStatus(
            jobSeekerId, com.revhire.entity.Application.ApplicationStatus.APPLIED);
        Long shortlistedApplications = applicationRepository.countApplicationsByJobSeekerAndStatus(
            jobSeekerId, com.revhire.entity.Application.ApplicationStatus.SHORTLISTED);
        Long rejectedApplications = applicationRepository.countApplicationsByJobSeekerAndStatus(
            jobSeekerId, com.revhire.entity.Application.ApplicationStatus.REJECTED);
        
        stats.put("totalApplications", totalApplications);
        stats.put("pendingApplications", pendingApplications);
        stats.put("shortlistedApplications", shortlistedApplications);
        stats.put("rejectedApplications", rejectedApplications);
        
        // Saved jobs
        Long savedJobs = savedJobRepository.countByJobSeeker(jobSeekerId);
        stats.put("savedJobs", savedJobs);
        
        // Unread notifications
        Long unreadNotifications = notificationRepository.countUnreadNotificationsByUser(jobSeekerId);
        stats.put("unreadNotifications", unreadNotifications);
        
        // Recent activity
        LocalDateTime weekAgo = LocalDateTime.now().minusDays(7);
        Long applicationsThisWeek = applicationRepository.countApplicationsByJobSeekerAndDate(
            jobSeekerId, weekAgo);
        stats.put("applicationsThisWeek", applicationsThisWeek);
        
        // Recommended jobs (based on profile)
        Pageable pageable = PageRequest.of(0, 5);
        List<Job> recommendedJobEntities = jobRepository.findRecommendedJobsForJobSeeker(
            null, null, null, null, null, null, null, pageable);
        List<Map<String, Object>> recommendedJobs = recommendedJobEntities.stream()
            .map(job -> {
                Map<String, Object> jobMap = new HashMap<>();
                jobMap.put("id", job.getId());
                jobMap.put("title", job.getTitle());
                jobMap.put("company", job.getEmployer().getFirstName() + " " + job.getEmployer().getLastName());
                jobMap.put("location", job.getLocation());
                jobMap.put("salary", formatSalaryRange(job.getSalaryMin(), job.getSalaryMax()));
                return jobMap;
            })
            .toList();
        stats.put("recommendedJobs", recommendedJobs);
        
        log.info("Job seeker dashboard stats retrieved successfully");
        return stats;
    }
    
    @Transactional(readOnly = true)
    public Map<String, Object> getAdminDashboardStats() {
        log.info("Fetching admin dashboard stats");
        
        Map<String, Object> stats = new HashMap<>();
        
        // User statistics
        Long totalUsers = userRepository.count();
        Long totalSeekers = userRepository.countByRole(com.revhire.entity.User.UserRole.SEEKER);
        Long totalEmployers = userRepository.countByRole(com.revhire.entity.User.UserRole.EMPLOYER);
        Long activeSeekers = userRepository.countActiveByRole(com.revhire.entity.User.UserRole.SEEKER);
        Long activeEmployers = userRepository.countActiveByRole(com.revhire.entity.User.UserRole.EMPLOYER);
        
        stats.put("totalUsers", totalUsers);
        stats.put("totalSeekers", totalSeekers);
        stats.put("totalEmployers", totalEmployers);
        stats.put("activeSeekers", activeSeekers);
        stats.put("activeEmployers", activeEmployers);
        
        // Job statistics
        Long totalJobs = jobRepository.count();
        Long activeJobs = jobRepository.countActive();
        stats.put("totalJobs", totalJobs);
        stats.put("activeJobs", activeJobs);
        
        // Application statistics
        Long totalApplications = applicationRepository.count();
        List<Object[]> statusCounts = applicationRepository.countByStatus();
        Map<String, Long> applicationsByStatus = new HashMap<>();
        for (Object[] statusCount : statusCounts) {
            applicationsByStatus.put(statusCount[0].toString(), (Long) statusCount[1]);
        }
        stats.put("totalApplications", totalApplications);
        stats.put("applicationsByStatus", applicationsByStatus);
        
        // Recent activity
        LocalDateTime today = LocalDateTime.now().toLocalDate().atStartOfDay();
        Long newUsersToday = userRepository.countUsersCreatedAfter(today);
        Long newJobsToday = jobRepository.countJobsCreatedAfter(today);
        Long newApplicationsToday = applicationRepository.countApplicationsCreatedAfter(today);
        
        stats.put("newUsersToday", newUsersToday);
        stats.put("newJobsToday", newJobsToday);
        stats.put("newApplicationsToday", newApplicationsToday);
        
        log.info("Admin dashboard stats retrieved successfully");
        return stats;
    }
    
    private String formatSalaryRange(Integer min, Integer max) {
        if (min != null && max != null) {
            return "$" + min + " - $" + max;
        } else if (min != null) {
            return "$" + min + "+";
        } else if (max != null) {
            return "Up to $" + max;
        } else {
            return "Salary not specified";
        }
    }
}
