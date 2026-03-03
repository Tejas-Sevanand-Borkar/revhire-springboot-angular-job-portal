package com.revhire.service;

import com.revhire.entity.Application;
import com.revhire.entity.Job;
import com.revhire.entity.User;
import com.revhire.repository.ApplicationRepository;
import com.revhire.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmployerDashboardService {
    
    private final JobRepository jobRepository;
    private final ApplicationRepository applicationRepository;
    private final UserService userService;
    
    @Transactional(readOnly = true)
    public Map<String, Object> getEmployerDashboardStats(Long employerId) {
        log.info("Fetching dashboard stats for employer ID: {}", employerId);
        
        Map<String, Object> stats = new HashMap<>();
        
        Long totalJobs = jobRepository.countJobsByEmployer(employerId);
        Long activeJobs = jobRepository.countActiveJobsByEmployer(employerId);
        Long totalApplications = applicationRepository.countApplicationsByEmployer(employerId);
        Long unreadNotifications = 0L;
        
        User employer = userService.findById(employerId);
        if (employer != null) {
            unreadNotifications = applicationRepository.countApplicationsByEmployerAndStatus(
                    employerId, Application.ApplicationStatus.APPLIED);
        }
        
        stats.put("totalJobs", totalJobs);
        stats.put("activeJobs", activeJobs);
        stats.put("totalApplications", totalApplications);
        stats.put("unreadApplications", unreadNotifications);
        
        log.info("Dashboard stats retrieved successfully for employer ID: {}", employerId);
        
        return stats;
    }
    
    @Transactional(readOnly = true)
    public Map<String, Long> getApplicationStatusStats(Long employerId) {
        log.info("Fetching application status stats for employer ID: {}", employerId);
        
        Map<String, Long> statusStats = new HashMap<>();
        
        statusStats.put("APPLIED", applicationRepository.countApplicationsByEmployerAndStatus(
                employerId, Application.ApplicationStatus.APPLIED));
        statusStats.put("SHORTLISTED", applicationRepository.countApplicationsByEmployerAndStatus(
                employerId, Application.ApplicationStatus.SHORTLISTED));
        statusStats.put("INTERVIEW_SCHEDULED", applicationRepository.countApplicationsByEmployerAndStatus(
                employerId, Application.ApplicationStatus.INTERVIEW_SCHEDULED));
        statusStats.put("HIRED", applicationRepository.countApplicationsByEmployerAndStatus(
                employerId, Application.ApplicationStatus.HIRED));
        statusStats.put("REJECTED", applicationRepository.countApplicationsByEmployerAndStatus(
                employerId, Application.ApplicationStatus.REJECTED));
        statusStats.put("WITHDRAWN", applicationRepository.countApplicationsByEmployerAndStatus(
                employerId, Application.ApplicationStatus.WITHDRAWN));
        
        log.info("Application status stats retrieved successfully for employer ID: {}", employerId);
        
        return statusStats;
    }
    
    @Transactional(readOnly = true)
    public List<Map<String, Object>> getJobApplicationStats(Long employerId) {
        log.info("Fetching job application stats for employer ID: {}", employerId);
        
        List<Job> jobs = jobRepository.findActiveJobsByEmployer(employerId);
        
        return jobs.stream().map(job -> {
            Map<String, Object> jobStats = new HashMap<>();
            jobStats.put("jobId", job.getId());
            jobStats.put("jobTitle", job.getTitle());
            jobStats.put("totalApplications", applicationRepository.countApplicationsByJob(job.getId()));
            
            List<Object[]> statusCounts = applicationRepository.getApplicationStatusCountByJob(job.getId());
            Map<String, Long> statusMap = new HashMap<>();
            
            for (Object[] statusCount : statusCounts) {
                String status = (String) statusCount[0];
                Long count = (Long) statusCount[1];
                statusMap.put(status, count);
            }
            
            jobStats.put("statusBreakdown", statusMap);
            return jobStats;
        }).toList();
    }
    
    @Transactional(readOnly = true)
    public Map<String, Object> getRecentActivity(Long employerId) {
        log.info("Fetching recent activity for employer ID: {}", employerId);
        
        Map<String, Object> activity = new HashMap<>();
        
        List<Application> recentApplications = applicationRepository.findActiveApplicationsByEmployer(employerId)
                .stream()
                .sorted((a1, a2) -> a2.getCreatedAt().compareTo(a1.getCreatedAt()))
                .limit(10)
                .toList();
        
        List<Job> recentJobs = jobRepository.findActiveJobsByEmployer(employerId)
                .stream()
                .sorted((j1, j2) -> j2.getCreatedAt().compareTo(j1.getCreatedAt()))
                .limit(5)
                .toList();
        
        activity.put("recentApplications", recentApplications);
        activity.put("recentJobs", recentJobs);
        
        log.info("Recent activity retrieved successfully for employer ID: {}", employerId);
        
        return activity;
    }
    
    @Transactional(readOnly = true)
    public Map<String, Object> getEmployerPerformanceMetrics(Long employerId) {
        log.info("Fetching performance metrics for employer ID: {}", employerId);
        
        Map<String, Object> metrics = new HashMap<>();
        
        Long totalApplications = applicationRepository.countApplicationsByEmployer(employerId);
        Long hiredCount = applicationRepository.countApplicationsByEmployerAndStatus(
                employerId, Application.ApplicationStatus.HIRED);
        Long rejectedCount = applicationRepository.countApplicationsByEmployerAndStatus(
                employerId, Application.ApplicationStatus.REJECTED);
        
        double hireRate = 0.0;
        if (totalApplications > 0) {
            hireRate = (double) hiredCount / totalApplications * 100;
        }
        
        double rejectionRate = 0.0;
        if (totalApplications > 0) {
            rejectionRate = (double) rejectedCount / totalApplications * 100;
        }
        
        metrics.put("totalApplications", totalApplications);
        metrics.put("hiredCount", hiredCount);
        metrics.put("rejectedCount", rejectedCount);
        metrics.put("hireRate", Math.round(hireRate * 100.0) / 100.0);
        metrics.put("rejectionRate", Math.round(rejectionRate * 100.0) / 100.0);
        
        log.info("Performance metrics retrieved successfully for employer ID: {}", employerId);
        
        return metrics;
    }
}
