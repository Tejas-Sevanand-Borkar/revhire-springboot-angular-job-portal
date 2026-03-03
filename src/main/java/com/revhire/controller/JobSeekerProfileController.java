package com.revhire.controller;

import com.revhire.entity.JobSeekerProfile;
import com.revhire.entity.User;
import com.revhire.service.JobSeekerProfileService;
import com.revhire.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/job-seeker-profiles")
@RequiredArgsConstructor
@Slf4j
public class JobSeekerProfileController {
    
    private final JobSeekerProfileService jobSeekerProfileService;
    private final UserRepository userRepository;
    
    @PostMapping
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<JobSeekerProfile> createProfile(@RequestBody Map<String, Object> profileData, Authentication authentication) {
        log.info("Creating profile for user: {}", authentication.getName());
        
        // Extract user ID from authentication
        Long userId = extractUserIdFromAuthentication(authentication);
        
        // Get user entity
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
        
        // Create profile from map data
        JobSeekerProfile profile = mapToJobSeekerProfile(profileData, user);
        
        JobSeekerProfile createdProfile = jobSeekerProfileService.createProfile(profile);
        return ResponseEntity.ok(createdProfile);
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<JobSeekerProfile> updateProfile(@PathVariable Long id, @RequestBody Map<String, Object> profileData, Authentication authentication) {
        log.info("Updating profile {} for user: {}", id, authentication.getName());
        
        // Verify the profile belongs to the authenticated user
        JobSeekerProfile existingProfile = jobSeekerProfileService.getProfileById(id);
        if (!existingProfile.getUser().getId().equals(extractUserIdFromAuthentication(authentication))) {
            return ResponseEntity.badRequest().build();
        }
        
        // Update profile from map data
        JobSeekerProfile updatedProfileData = mapToJobSeekerProfile(profileData, existingProfile.getUser());
        updatedProfileData.setId(id);
        
        // Save user entity in case email was updated
        userRepository.save(existingProfile.getUser());
        
        JobSeekerProfile updatedProfile = jobSeekerProfileService.updateProfile(id, updatedProfileData);
        return ResponseEntity.ok(updatedProfile);
    }
    
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('SEEKER', 'EMPLOYER', 'ADMIN')")
    public ResponseEntity<JobSeekerProfile> getProfileById(@PathVariable Long id) {
        log.info("Fetching profile: {}", id);
        
        JobSeekerProfile profile = jobSeekerProfileService.getProfileById(id);
        return ResponseEntity.ok(profile);
    }
    
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasAnyRole('SEEKER', 'EMPLOYER', 'ADMIN')")
    public ResponseEntity<JobSeekerProfile> getProfileByUserId(@PathVariable Long userId) {
        log.info("Fetching profile for user: {}", userId);
        
        JobSeekerProfile profile = jobSeekerProfileService.getProfileByUserId(userId);
        return ResponseEntity.ok(profile);
    }
    
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<JobSeekerProfile>> getAllProfiles() {
        log.info("Fetching all profiles");
        
        List<JobSeekerProfile> profiles = jobSeekerProfileService.getAllProfiles();
        return ResponseEntity.ok(profiles);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<Void> deleteProfile(@PathVariable Long id, Authentication authentication) {
        log.info("Deleting profile {} for user: {}", id, authentication.getName());
        
        // Verify the profile belongs to the authenticated user
        JobSeekerProfile existingProfile = jobSeekerProfileService.getProfileById(id);
        if (!existingProfile.getUser().getId().equals(extractUserIdFromAuthentication(authentication))) {
            return ResponseEntity.badRequest().build();
        }
        
        jobSeekerProfileService.deleteProfile(id);
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/upload-resume")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<Map<String, String>> uploadResume(@RequestParam("file") org.springframework.web.multipart.MultipartFile file, Authentication authentication) {
        log.info("Uploading resume for user: {}", authentication.getName());
        
        try {
            Long userId = extractUserIdFromAuthentication(authentication);
            String filePath = jobSeekerProfileService.uploadResume(file, userId);
            
            Map<String, String> response = new java.util.HashMap<>();
            response.put("message", "Resume uploaded successfully");
            response.put("filePath", filePath);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("Failed to upload resume", e);
            Map<String, String> errorResponse = new java.util.HashMap<>();
            errorResponse.put("error", "Failed to upload resume: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    private JobSeekerProfile mapToJobSeekerProfile(Map<String, Object> data, User user) {
        JobSeekerProfile profile = new JobSeekerProfile();
        profile.setUser(user);
        
        // Map frontend fields to backend entity
        profile.setFirstName((String) data.get("firstName"));
        profile.setLastName((String) data.get("lastName"));
        profile.setPhoneNumber((String) data.get("phone"));
        profile.setSummary((String) data.get("summary"));
        profile.setResumePath((String) data.get("resumePath"));
        profile.setLinkedinUrl((String) data.get("linkedinUrl"));
        profile.setGithubUrl((String) data.get("githubUrl"));
        profile.setPortfolioUrl((String) data.get("portfolioUrl"));
        profile.setLocation((String) data.get("location"));
        
        // Handle email - update the user entity if provided
        String email = (String) data.get("email");
        if (email != null && !email.trim().isEmpty()) {
            user.setEmail(email);
        }
        
        // Handle skills array conversion
        if (data.get("skills") instanceof List) {
            profile.setSkills(String.join(", ", (List<String>) data.get("skills")));
        } else {
            profile.setSkills((String) data.get("skills"));
        }
        
        // Handle other fields
        profile.setExpectedSalaryMin(data.get("expectedSalaryMin") != null ? 
            ((Number) data.get("expectedSalaryMin")).intValue() : null);
        profile.setExpectedSalaryMax(data.get("expectedSalaryMax") != null ? 
            ((Number) data.get("expectedSalaryMax")).intValue() : null);
        
        // Handle work preference
        profile.setWorkPreference((String) data.get("workPreference"));
        
        // Handle availability
        profile.setAvailability((String) data.get("availability"));
        
        // Handle preferred job types (convert array to string)
        if (data.get("preferredJobTypes") instanceof List) {
            profile.setPreferredJobTypes(String.join(", ", (List<String>) data.get("preferredJobTypes")));
        } else {
            profile.setPreferredJobTypes((String) data.get("preferredJobTypes"));
        }
        
        // Handle preferred locations (convert array to string)
        if (data.get("preferredLocations") instanceof List) {
            profile.setPreferredLocations(String.join(", ", (List<String>) data.get("preferredLocations")));
        } else {
            profile.setPreferredLocations((String) data.get("preferredLocations"));
        }
        
        // Set other fields with defaults
        profile.setDeleted(false);
        
        return profile;
    }
    
    private Long extractUserIdFromAuthentication(Authentication authentication) {
        try {
            // Get the username from authentication
            String username = authentication.getName();
            log.info("Extracting user ID for username: {}", username);
            
            // Find user by username/email
            User user = userRepository.findByEmail(username)
                    .orElseThrow(() -> new RuntimeException("User not found with email: " + username));
            
            log.info("Found user ID: {} for username: {}", user.getId(), username);
            return user.getId();
        } catch (Exception e) {
            log.error("Error extracting user ID from authentication", e);
            throw new RuntimeException("Failed to extract user ID from authentication: " + e.getMessage());
        }
    }
}
