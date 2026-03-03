package com.revhire.controller;

import com.revhire.service.EmployerDashboardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/employer/dashboard")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600)
public class EmployerDashboardController {
    
    private final EmployerDashboardService employerDashboardService;
    
    @GetMapping("/stats/{employerId}")
    @PreAuthorize("hasRole('EMPLOYER') or #employerId == authentication.principal.id")
    public ResponseEntity<Map<String, Object>> getEmployerDashboardStats(@PathVariable Long employerId) {
        log.info("Fetching dashboard stats for employer ID: {}", employerId);
        
        Map<String, Object> stats = employerDashboardService.getEmployerDashboardStats(employerId);
        
        return ResponseEntity.ok(stats);
    }
    
    @GetMapping("/application-status/{employerId}")
    @PreAuthorize("hasRole('EMPLOYER') or #employerId == authentication.principal.id")
    public ResponseEntity<Map<String, Long>> getApplicationStatusStats(@PathVariable Long employerId) {
        log.info("Fetching application status stats for employer ID: {}", employerId);
        
        Map<String, Long> statusStats = employerDashboardService.getApplicationStatusStats(employerId);
        
        return ResponseEntity.ok(statusStats);
    }
    
    @GetMapping("/job-stats/{employerId}")
    @PreAuthorize("hasRole('EMPLOYER') or #employerId == authentication.principal.id")
    public ResponseEntity<?> getJobApplicationStats(@PathVariable Long employerId) {
        log.info("Fetching job application stats for employer ID: {}", employerId);
        
        var jobStats = employerDashboardService.getJobApplicationStats(employerId);
        
        return ResponseEntity.ok(jobStats);
    }
    
    @GetMapping("/recent-activity/{employerId}")
    @PreAuthorize("hasRole('EMPLOYER') or #employerId == authentication.principal.id")
    public ResponseEntity<Map<String, Object>> getRecentActivity(@PathVariable Long employerId) {
        log.info("Fetching recent activity for employer ID: {}", employerId);
        
        Map<String, Object> activity = employerDashboardService.getRecentActivity(employerId);
        
        return ResponseEntity.ok(activity);
    }
    
    @GetMapping("/performance/{employerId}")
    @PreAuthorize("hasRole('EMPLOYER') or #employerId == authentication.principal.id")
    public ResponseEntity<Map<String, Object>> getEmployerPerformanceMetrics(@PathVariable Long employerId) {
        log.info("Fetching performance metrics for employer ID: {}", employerId);
        
        Map<String, Object> metrics = employerDashboardService.getEmployerPerformanceMetrics(employerId);
        
        return ResponseEntity.ok(metrics);
    }
}
