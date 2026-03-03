package com.revhire.controller;

import com.revhire.service.DashboardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@Slf4j
public class DashboardController {
    
    private final DashboardService dashboardService;
    
    @GetMapping("/employer")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<Map<String, Object>> getEmployerDashboard(Authentication authentication) {
        log.info("Fetching employer dashboard for user: {}", authentication.getName());
        
        // Extract user ID from authentication (you may need to implement this based on your JWT structure)
        Long employerId = extractUserIdFromAuthentication(authentication);
        
        Map<String, Object> stats = dashboardService.getEmployerDashboardStats(employerId);
        
        return ResponseEntity.ok(stats);
    }
    
    @GetMapping("/seeker")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<Map<String, Object>> getJobSeekerDashboard(Authentication authentication) {
        log.info("Fetching job seeker dashboard for user: {}", authentication.getName());
        
        Long jobSeekerId = extractUserIdFromAuthentication(authentication);
        
        Map<String, Object> stats = dashboardService.getJobSeekerDashboardStats(jobSeekerId);
        
        return ResponseEntity.ok(stats);
    }
    
    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> getAdminDashboard() {
        log.info("Fetching admin dashboard");
        
        Map<String, Object> stats = dashboardService.getAdminDashboardStats();
        
        return ResponseEntity.ok(stats);
    }
    
    private Long extractUserIdFromAuthentication(Authentication authentication) {
        // This is a placeholder - implement based on your JWT token structure
        // You might need to decode the JWT token or query the user service
        // For now, returning a dummy value
        return 1L;
    }
}
