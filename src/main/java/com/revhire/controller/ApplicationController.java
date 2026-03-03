package com.revhire.controller;

import com.revhire.dto.ApplicationDto;
import com.revhire.entity.Application;
import com.revhire.entity.User;
import com.revhire.repository.ApplicationRepository;
import com.revhire.service.ApplicationService;
import com.revhire.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600)
public class ApplicationController {
    
    private final ApplicationService applicationService;
    private final ApplicationRepository applicationRepository;
    private final UserService userService;
    
    @PostMapping("/apply/{jobId}")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<ApplicationDto> applyForJob(
            @PathVariable Long jobId,
            @RequestBody Map<String, String> request) {
        
        log.info("Applying for job with ID: {}", jobId);
        
        String coverLetter = request.get("coverLetter");
        String resumePath = request.get("resumePath");
        
        ApplicationDto application = applicationService.applyForJob(jobId, coverLetter, resumePath);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(application);
    }
    
    @PostMapping("/apply-with-resume/{jobId}")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<ApplicationDto> applyForJobWithResume(
            @PathVariable Long jobId,
            @RequestParam("file") org.springframework.web.multipart.MultipartFile file,
            @RequestParam(value = "coverLetter", required = false) String coverLetter,
            Authentication authentication) {
        
        log.info("Applying for job {} with resume upload", jobId);
        
        try {
            // Get current user
            Long userId = extractUserIdFromAuthentication(authentication);
            
            // Upload resume file
            String resumePath = applicationService.uploadResumeForApplication(file, userId);
            
            // Apply with uploaded resume
            ApplicationDto application = applicationService.applyForJob(jobId, coverLetter, resumePath);
            
            return ResponseEntity.status(HttpStatus.CREATED).body(application);
        } catch (Exception e) {
            log.error("Failed to apply with resume", e);
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to apply with resume: " + e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping("/{id}/status")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<ApplicationDto> updateApplicationStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> request) {
        
        log.info("Updating application status for ID: {}", id);
        
        Application.ApplicationStatus status = Application.ApplicationStatus.valueOf(
                request.get("status").toUpperCase());
        
        ApplicationDto application = applicationService.updateApplicationStatus(id, status);
        
        return ResponseEntity.ok(application);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ApplicationDto> getApplicationById(@PathVariable Long id) {
        log.info("Fetching application with ID: {}", id);
        
        ApplicationDto application = applicationService.getApplicationById(id);
        
        return ResponseEntity.ok(application);
    }
    
    @GetMapping("/job/{jobId}")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<List<ApplicationDto>> getApplicationsByJob(@PathVariable Long jobId) {
        log.info("Fetching applications for job ID: {}", jobId);
        
        List<ApplicationDto> applications = applicationService.getApplicationsByJob(jobId);
        
        return ResponseEntity.ok(applications);
    }
    
    @GetMapping("/seeker/{jobSeekerId}")
    @PreAuthorize("hasRole('SEEKER') or #jobSeekerId == authentication.principal.id")
    public ResponseEntity<List<ApplicationDto>> getApplicationsByJobSeeker(@PathVariable Long jobSeekerId) {
        log.info("Fetching applications for job seeker ID: {}", jobSeekerId);
        
        List<ApplicationDto> applications = applicationService.getApplicationsByJobSeeker(jobSeekerId);
        
        return ResponseEntity.ok(applications);
    }
    
    @GetMapping("/employer")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<List<ApplicationDto>> getEmployerApplications() {
        log.info("DEBUG: getEmployerApplications called");
        
        try {
            User currentUser = userService.getCurrentUser();
            log.info("DEBUG: Current user: {}", currentUser != null ? currentUser.getEmail() : "null");
            
            if (currentUser == null) {
                log.error("DEBUG: No current user found");
                return ResponseEntity.status(401).build();
            }
            
            log.info("DEBUG: User role: {}", currentUser.getRole());
            log.info("DEBUG: Fetching applications for current employer");
            
            List<ApplicationDto> applications = applicationService.getEmployerApplications();
            log.info("DEBUG: Applications loaded: {}", applications.size());
            
            return ResponseEntity.ok(applications);
        } catch (Exception e) {
            log.error("DEBUG: Error in getEmployerApplications: {}", e.getMessage(), e);
            return ResponseEntity.status(500).build();
        }
    }
    
    @GetMapping("/employer/{employerId}")
    @PreAuthorize("hasRole('EMPLOYER') or #employerId == authentication.principal.id")
    public ResponseEntity<List<ApplicationDto>> getApplicationsByEmployer(@PathVariable Long employerId) {
        log.info("Fetching applications for employer ID: {}", employerId);
        
        List<ApplicationDto> applications = applicationService.getApplicationsByEmployer(employerId);
        
        return ResponseEntity.ok(applications);
    }
    
    @GetMapping("/debug/test")
    public ResponseEntity<Map<String, Object>> testEndpoint() {
        log.info("DEBUG: Test endpoint called");
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Test endpoint working");
        response.put("timestamp", new java.util.Date());
        
        // Try to get current user
        try {
            User currentUser = userService.getCurrentUser();
            if (currentUser != null) {
                response.put("user", Map.of(
                    "id", currentUser.getId(),
                    "email", currentUser.getEmail(),
                    "role", currentUser.getRole()
                ));
            } else {
                response.put("user", "No authenticated user found");
            }
        } catch (Exception e) {
            response.put("user", "Error getting user: " + e.getMessage());
        }
        
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/debug/all")
    public ResponseEntity<List<ApplicationDto>> debugAllApplications() {
        log.info("DEBUG: Fetching all applications from database");
        
        List<Application> allApps = applicationRepository.findAll();
        log.info("DEBUG: Found {} total applications in database", allApps.size());
        
        for (Application app : allApps) {
            log.info("DEBUG: Application ID: {}, Job ID: {}, JobSeeker ID: {}, Employer ID: {}, Status: {}", 
                    app.getId(),
                    app.getJob() != null ? app.getJob().getId() : "null",
                    app.getJobSeeker() != null ? app.getJobSeeker().getId() : "null",
                    app.getJob() != null && app.getJob().getEmployer() != null ? app.getJob().getEmployer().getId() : "null",
                    app.getStatus());
        }
        
        List<ApplicationDto> dtos = allApps.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(dtos);
    }
    
    @GetMapping("/debug/current-user")
    public ResponseEntity<?> debugCurrentUser() {
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            return ResponseEntity.ok("No current user found");
        }
        
        Map<String, Object> userInfo = new HashMap<>();
        userInfo.put("id", currentUser.getId());
        userInfo.put("email", currentUser.getEmail());
        userInfo.put("role", currentUser.getRole());
        userInfo.put("firstName", currentUser.getFirstName());
        userInfo.put("lastName", currentUser.getLastName());
        
        return ResponseEntity.ok(userInfo);
    }
    
    @GetMapping("/employer/stats")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<Map<String, Object>> getEmployerApplicationStats() {
        log.info("Fetching employer application statistics");
        
        Map<String, Object> stats = applicationService.getEmployerApplicationStats();
        
        return ResponseEntity.ok(stats);
    }
    
    @GetMapping("/status/{status}")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<List<ApplicationDto>> getApplicationsByStatus(@PathVariable Application.ApplicationStatus status) {
        log.info("Fetching applications with status: {}", status);
        
        List<ApplicationDto> applications = applicationService.getApplicationsByStatus(status);
        
        return ResponseEntity.ok(applications);
    }
    
    @PatchMapping("/{id}/withdraw")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<Void> withdrawApplication(
            @PathVariable Long id,
            @RequestBody Map<String, String> request) {
        log.info("Withdrawing application with ID: {}", id);
        
        String reason = request.get("reason");
        applicationService.withdrawApplication(id, reason);
        
        return ResponseEntity.ok().build();
    }
    
    @PutMapping("/bulk-status")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<Void> bulkUpdateApplicationStatus(@RequestBody Map<String, Object> request) {
        log.info("Bulk updating application status");
        
        @SuppressWarnings("unchecked")
        List<Long> applicationIds = (List<Long>) request.get("applicationIds");
        String statusStr = (String) request.get("status");
        String comment = (String) request.get("comment");
        
        Application.ApplicationStatus status = Application.ApplicationStatus.valueOf(statusStr.toUpperCase());
        
        applicationService.bulkUpdateApplicationStatus(applicationIds, status, comment);
        
        return ResponseEntity.ok().build();
    }
    
    private ApplicationDto convertToDto(Application application) {
        return applicationService.convertToDto(application);
    }
    
    private Long extractUserIdFromAuthentication(Authentication authentication) {
        try {
            // Get the username (email) from authentication
            String username = authentication.getName();
            log.info("Extracting user ID for username: {}", username);
            
            // Find user by username/email using the correct method name
            User user = userService.findByEmail(username);
            
            if (user == null) {
                throw new RuntimeException("User not found with email: " + username);
            }
            
            log.info("Found user ID: {} for username: {}", user.getId(), username);
            return user.getId();
        } catch (Exception e) {
            log.error("Error extracting user ID from authentication", e);
            throw new RuntimeException("Failed to extract user ID from authentication: " + e.getMessage());
        }
    }
}
