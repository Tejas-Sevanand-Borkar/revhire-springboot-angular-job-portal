package com.revhire.service;

import com.revhire.dto.ApplicationDto;
import com.revhire.entity.Application;
import com.revhire.entity.Job;
import com.revhire.entity.User;
import com.revhire.exception.ResourceAlreadyExistsException;
import com.revhire.exception.ResourceNotFoundException;
import com.revhire.repository.ApplicationRepository;
import com.revhire.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ApplicationService {
    
    private final ApplicationRepository applicationRepository;
    private final JobRepository jobRepository;
    private final UserService userService;
    private final NotificationService notificationService;
    private final FileUploadService fileUploadService;
    
    @Transactional
    public ApplicationDto applyForJob(Long jobId, String coverLetter, String resumePath) {
        log.info("Applying for job with ID: {}", jobId);
        
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        Job job = jobRepository.findActiveJobById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with ID: " + jobId));
        
        boolean alreadyApplied = applicationRepository
                .findActiveApplicationByJobAndJobSeeker(jobId, currentUser.getId())
                .isPresent();
        
        if (alreadyApplied) {
            throw new ResourceAlreadyExistsException("You have already applied for this job");
        }
        
        Application application = new Application();
        application.setJob(job);
        application.setJobSeeker(currentUser);
        application.setEmployer(job.getEmployer());
        application.setCoverLetter(coverLetter);
        application.setResumePath(resumePath);
        application.setStatus(Application.ApplicationStatus.APPLIED);
        
        application = applicationRepository.save(application);
        log.info("Application saved with ID: {} for job ID: {} by user: {}", 
                application.getId(), jobId, currentUser.getEmail());
        
        notificationService.createApplicationStatusNotification(application);
        
        log.info("Application submitted successfully for job ID: {} by user: {}", jobId, currentUser.getEmail());
        
        return convertToDto(application);
    }
    
    @Transactional
    public ApplicationDto updateApplicationStatus(Long applicationId, Application.ApplicationStatus newStatus) {
        log.info("Updating application status for application ID: {} to {}", applicationId, newStatus);
        
        Application application = applicationRepository.findActiveApplicationById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with ID: " + applicationId));
        
        Application.ApplicationStatus oldStatus = application.getStatus();
        application.setStatus(newStatus);
        application = applicationRepository.save(application);
        
        notificationService.createApplicationStatusChangeNotification(application, oldStatus, newStatus);
        
        log.info("Application status updated successfully for application ID: {} from {} to {}", 
                applicationId, oldStatus, newStatus);
        
        return convertToDto(application);
    }
    
    @Transactional(readOnly = true)
    public ApplicationDto getApplicationById(Long applicationId) {
        Application application = applicationRepository.findActiveApplicationById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with ID: " + applicationId));
        
        return convertToDto(application);
    }
    
    @Transactional(readOnly = true)
    public List<ApplicationDto> getApplicationsByJob(Long jobId) {
        List<Application> applications = applicationRepository.findActiveApplicationsByJob(jobId);
        return applications.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<ApplicationDto> getApplicationsByJobSeeker(Long jobSeekerId) {
        log.info("Fetching applications for job seeker ID: {}", jobSeekerId);
        
        List<Application> applications = applicationRepository.findActiveApplicationsByJobSeeker(jobSeekerId);
        log.info("Found {} applications for job seeker ID: {}", applications.size(), jobSeekerId);
        
        for (Application app : applications) {
            log.debug("Application ID: {}, Job ID: {}, Status: {}, Created: {}", 
                    app.getId(), app.getJob() != null ? app.getJob().getId() : "null", 
                    app.getStatus(), app.getCreatedAt());
        }
        
        return applications.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public Map<String, Object> getEmployerApplicationStats() {
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        log.info("Calculating application statistics for employer: {}", currentUser.getId());
        
        List<Application> applications = applicationRepository.findActiveApplicationsByEmployer(currentUser.getId());
        
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalApplications", applications.size());
        stats.put("pendingApplications", applications.stream()
                .filter(app -> app.getStatus() == Application.ApplicationStatus.APPLIED)
                .count());
        stats.put("shortlistedApplications", applications.stream()
                .filter(app -> app.getStatus() == Application.ApplicationStatus.SHORTLISTED)
                .count());
        stats.put("interviewApplications", applications.stream()
                .filter(app -> app.getStatus() == Application.ApplicationStatus.INTERVIEW_SCHEDULED)
                .count());
        stats.put("rejectedApplications", applications.stream()
                .filter(app -> app.getStatus() == Application.ApplicationStatus.REJECTED)
                .count());
        stats.put("hiredApplications", applications.stream()
                .filter(app -> app.getStatus() == Application.ApplicationStatus.HIRED)
                .count());
        
        log.info("Employer application stats: {}", stats);
        
        return stats;
    }
    
    @Transactional(readOnly = true)
    public List<ApplicationDto> getEmployerApplications() {
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        log.info("Getting applications for employer: {}", currentUser.getId());
        
        List<Application> applications = applicationRepository.findActiveApplicationsByEmployer(currentUser.getId());
        log.info("Found {} applications for employer {}", applications.size(), currentUser.getId());
        
        List<ApplicationDto> applicationDtos = applications.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
        
        log.info("Returning {} application DTOs", applicationDtos.size());
        return applicationDtos;
    }
    
    @Transactional(readOnly = true)
    public List<ApplicationDto> getApplicationsByEmployer(Long employerId) {
        List<Application> applications = applicationRepository.findActiveApplicationsByEmployer(employerId);
        return applications.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<ApplicationDto> getApplicationsByStatus(Application.ApplicationStatus status) {
        List<Application> applications = applicationRepository.findActiveApplicationsByStatus(status);
        return applications.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional
    public void withdrawApplication(Long applicationId, String reason) {
        log.info("Withdrawing application with ID: {}", applicationId);
        
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        Application application = applicationRepository.findActiveApplicationById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with ID: " + applicationId));
        
        // Verify the job seeker owns this application
        if (!application.getJobSeeker().getId().equals(currentUser.getId())) {
            throw new ResourceNotFoundException("Access denied");
        }
        
        application.setStatus(Application.ApplicationStatus.WITHDRAWN);
        application.setWithdrawalReason(reason);
        applicationRepository.save(application);
        
        // Notify employer about withdrawal
        notificationService.createApplicationStatusChangeNotification(application, 
            Application.ApplicationStatus.APPLIED, Application.ApplicationStatus.WITHDRAWN);
        
        log.info("Application withdrawn successfully for ID: {} with reason: {}", applicationId, reason);
    }
    
    @Transactional
    public void bulkUpdateApplicationStatus(List<Long> applicationIds, Application.ApplicationStatus newStatus, String comment) {
        log.info("Bulk updating {} applications to status: {}", applicationIds.size(), newStatus);
        
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        List<Application> applications = applicationRepository.findAllById(applicationIds);
        
        for (Application application : applications) {
            // Verify the employer owns these applications
            if (!application.getEmployer().getId().equals(currentUser.getId())) {
                continue; // Skip applications not owned by this employer
            }
            
            Application.ApplicationStatus oldStatus = application.getStatus();
            application.setStatus(newStatus);
            applicationRepository.save(application);
            
            // Add note if comment provided
            if (comment != null && !comment.trim().isEmpty()) {
                // This would require ApplicationNoteService injection
                // For now, we'll just update the status
            }
            
            notificationService.createApplicationStatusChangeNotification(application, oldStatus, newStatus);
        }
        
        log.info("Bulk update completed for {} applications", applications.size());
    }
    
    public ApplicationDto convertToDto(Application application) {
        ApplicationDto dto = new ApplicationDto();
        dto.setId(application.getId());
        dto.setCoverLetter(application.getCoverLetter());
        dto.setResumePath(application.getResumePath());
        dto.setStatus(application.getStatus());
        dto.setCreatedAt(application.getCreatedAt());
        dto.setUpdatedAt(application.getUpdatedAt());
        
        if (application.getJob() != null) {
            dto.setJobId(application.getJob().getId());
            dto.setJobTitle(application.getJob().getTitle());
        }
        
        if (application.getJobSeeker() != null) {
            dto.setJobSeekerId(application.getJobSeeker().getId());
            dto.setJobSeekerName(application.getJobSeeker().getFirstName() + " " + application.getJobSeeker().getLastName());
        }
        
        if (application.getEmployer() != null) {
            dto.setEmployerId(application.getEmployer().getId());
            dto.setEmployerName(application.getEmployer().getFirstName() + " " + application.getEmployer().getLastName());
        }
        
        return dto;
    }
    
    public String uploadResumeForApplication(MultipartFile file, Long userId) throws IOException {
        log.info("Uploading resume for application from user ID: {}", userId);
        
        // Validate file type
        String contentType = file.getContentType();
        if (contentType == null || (!contentType.equals("application/pdf") && 
            !contentType.equals("application/msword") && 
            !contentType.equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document"))) {
            throw new IllegalArgumentException("Only PDF and Word documents are allowed");
        }
        
        // Validate file size (5MB max)
        if (file.getSize() > 5 * 1024 * 1024) {
            throw new IllegalArgumentException("File size must be less than 5MB");
        }
        
        // Upload file using FileUploadService
        String filePath = fileUploadService.uploadFile(file, "applications/resumes");
        
        log.info("Resume uploaded successfully for application: {}", filePath);
        return filePath;
    }
}
