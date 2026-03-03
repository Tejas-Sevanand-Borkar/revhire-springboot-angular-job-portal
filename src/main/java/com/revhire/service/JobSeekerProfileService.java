package com.revhire.service;

import com.revhire.entity.JobSeekerProfile;
import com.revhire.entity.User;
import com.revhire.repository.JobSeekerProfileRepository;
import com.revhire.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class JobSeekerProfileService {
    
    private final JobSeekerProfileRepository jobSeekerProfileRepository;
    private final FileUploadService fileUploadService;
    private final UserRepository userRepository;
    
    public JobSeekerProfile createProfile(JobSeekerProfile profile) {
        log.info("Creating profile for user ID: {}", profile.getUser().getId());
        
        // Check if profile already exists for this user
        if (jobSeekerProfileRepository.existsByUserIdAndDeletedFalse(profile.getUser().getId())) {
            throw new RuntimeException("Profile already exists for this user");
        }
        
        profile.setDeleted(false);
        
        // Save the user entity first in case email was updated
        userRepository.save(profile.getUser());
        
        JobSeekerProfile savedProfile = jobSeekerProfileRepository.save(profile);
        log.info("Profile created successfully with ID: {}", savedProfile.getId());
        
        return savedProfile;
    }
    
    public JobSeekerProfile updateProfile(Long id, JobSeekerProfile profile) {
        log.info("Updating profile with ID: {}", id);
        
        JobSeekerProfile existingProfile = getProfileById(id);
        
        // Update fields
        existingProfile.setFirstName(profile.getFirstName());
        existingProfile.setLastName(profile.getLastName());
        existingProfile.setPhoneNumber(profile.getPhoneNumber());
        existingProfile.setSummary(profile.getSummary());
        existingProfile.setResumeText(profile.getResumeText());
        existingProfile.setResumePath(profile.getResumePath());
        existingProfile.setCurrentEmploymentStatus(profile.getCurrentEmploymentStatus());
        existingProfile.setLinkedinUrl(profile.getLinkedinUrl());
        existingProfile.setGithubUrl(profile.getGithubUrl());
        existingProfile.setPortfolioUrl(profile.getPortfolioUrl());
        existingProfile.setSkills(profile.getSkills());
        existingProfile.setEducation(profile.getEducation());
        existingProfile.setExperience(profile.getExperience());
        existingProfile.setProjects(profile.getProjects());
        existingProfile.setCertifications(profile.getCertifications());
        existingProfile.setExperienceYears(profile.getExperienceYears());
        existingProfile.setExpectedSalaryMin(profile.getExpectedSalaryMin());
        existingProfile.setExpectedSalaryMax(profile.getExpectedSalaryMax());
        existingProfile.setLocation(profile.getLocation());
        existingProfile.setWorkPreference(profile.getWorkPreference());
        existingProfile.setAvailability(profile.getAvailability());
        existingProfile.setPreferredJobTypes(profile.getPreferredJobTypes());
        existingProfile.setPreferredLocations(profile.getPreferredLocations());
        
        JobSeekerProfile updatedProfile = jobSeekerProfileRepository.save(existingProfile);
        log.info("Profile updated successfully");
        
        return updatedProfile;
    }
    
    public JobSeekerProfile getProfileById(Long id) {
        log.info("Fetching profile with ID: {}", id);
        
        return jobSeekerProfileRepository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new RuntimeException("Profile not found with ID: " + id));
    }
    
    public JobSeekerProfile getProfileByUserId(Long userId) {
        log.info("Fetching profile for user ID: {}", userId);
        
        return jobSeekerProfileRepository.findByUserIdAndDeletedFalse(userId)
                .orElseThrow(() -> new RuntimeException("Profile not found for user ID: " + userId));
    }
    
    public List<JobSeekerProfile> getAllProfiles() {
        log.info("Fetching all profiles");
        
        return jobSeekerProfileRepository.findAllByDeletedFalse();
    }
    
    public void deleteProfile(Long id) {
        log.info("Deleting profile with ID: {}", id);
        
        JobSeekerProfile profile = getProfileById(id);
        profile.setDeleted(true);
        jobSeekerProfileRepository.save(profile);
        
        log.info("Profile deleted successfully");
    }
    
    public String uploadResume(MultipartFile file, Long userId) throws IOException {
        log.info("Uploading resume for user ID: {}", userId);
        
        // Upload file using FileUploadService
        String filePath = fileUploadService.uploadFile(file, "resumes");
        
        // Update profile with resume path
        Optional<JobSeekerProfile> profileOpt = jobSeekerProfileRepository.findByUserIdAndDeletedFalse(userId);
        if (profileOpt.isPresent()) {
            JobSeekerProfile profile = profileOpt.get();
            profile.setResumePath(filePath);
            jobSeekerProfileRepository.save(profile);
        }
        
        log.info("Resume uploaded successfully: {}", filePath);
        return filePath;
    }
    
    public boolean existsByUserId(Long userId) {
        return jobSeekerProfileRepository.existsByUserIdAndDeletedFalse(userId);
    }
}
