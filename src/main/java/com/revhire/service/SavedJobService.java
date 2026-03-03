package com.revhire.service;

import com.revhire.entity.SavedJob;
import com.revhire.entity.User;
import com.revhire.entity.Job;
import com.revhire.repository.SavedJobRepository;
import com.revhire.repository.JobRepository;
import com.revhire.repository.UserRepository;
import com.revhire.exception.ResourceAlreadyExistsException;
import com.revhire.exception.ResourceNotFoundException;
import com.revhire.service.AuthService;
import com.revhire.dto.SavedJobDto;
import com.revhire.dto.JobDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class SavedJobService {
    
    private final SavedJobRepository savedJobRepository;
    private final JobRepository jobRepository;
    private final UserRepository userRepository;
    private final AuthService authService;
    
    @Transactional
    public SavedJob saveJob(Long jobId) {
        log.info("Saving job {} for current user", jobId);
        
        User currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            log.warn("Current user is null, using fallback user ID 5 for testing");
            // Fallback for testing - remove in production
            currentUser = userRepository.findById(5L).orElse(null);
        }
        
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        Job job = jobRepository.findById(jobId)
            .orElseThrow(() -> new ResourceNotFoundException("Job not found"));
        
        // Check if already saved
        if (savedJobRepository.findByJobIdAndJobSeeker(jobId, currentUser).isPresent()) {
            throw new ResourceAlreadyExistsException("Job already saved");
        }
        
        SavedJob savedJob = new SavedJob(job, currentUser);
        savedJob = savedJobRepository.save(savedJob);
        
        log.info("Job {} saved successfully for user {}", jobId, currentUser.getEmail());
        return savedJob;
    }
    
    @Transactional
    public void unsaveJob(Long jobId) {
        log.info("Unsaving job {} for current user", jobId);
        
        User currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            log.warn("Current user is null, using fallback user ID 5 for testing");
            // Fallback for testing - remove in production
            currentUser = userRepository.findById(5L).orElse(null);
        }
        
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        savedJobRepository.deleteByJobIdAndJobSeeker(jobId, currentUser);
        
        log.info("Job {} unsaved successfully for user {}", jobId, currentUser.getEmail());
    }
    
    @Transactional(readOnly = true)
    public List<SavedJob> getSavedJobs() {
        User currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            log.warn("Current user is null, using fallback user ID 5 for testing");
            // Fallback for testing - remove in production
            currentUser = userRepository.findById(5L).orElse(null);
        }
        
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        return savedJobRepository.findByJobSeekerOrderByCreatedAtDesc(currentUser);
    }
    
    @Transactional(readOnly = true)
    public boolean isJobSaved(Long jobId) {
        User currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            log.warn("Current user is null, using fallback user ID 5 for testing");
            // Fallback for testing - remove in production
            currentUser = userRepository.findById(5L).orElse(null);
        }
        
        if (currentUser == null) {
            return false;
        }
        
        return savedJobRepository.findByJobIdAndJobSeeker(jobId, currentUser).isPresent();
    }
    
    @Transactional(readOnly = true)
    public List<SavedJobDto> getSavedJobsDto() {
        User currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            log.warn("Current user is null, using fallback user ID 5 for testing");
            // Fallback for testing - remove in production
            currentUser = userRepository.findById(5L).orElse(null);
        }
        
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        List<SavedJob> savedJobs = savedJobRepository.findByJobSeekerOrderByCreatedAtDesc(currentUser);
        
        return savedJobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    private SavedJobDto convertToDto(SavedJob savedJob) {
        SavedJobDto dto = new SavedJobDto();
        dto.setId(savedJob.getId());
        dto.setJobId(savedJob.getJob().getId());
        dto.setJobSeekerId(savedJob.getJobSeeker().getId());
        dto.setCreatedAt(savedJob.getCreatedAt());
        dto.setJob(convertJobToDto(savedJob.getJob()));
        return dto;
    }
    
    private JobDto convertJobToDto(Job job) {
        JobDto dto = new JobDto();
        dto.setId(job.getId());
        dto.setTitle(job.getTitle());
        dto.setDescription(job.getDescription());
        dto.setRequirements(job.getRequirements());
        dto.setResponsibilities(job.getResponsibilities());
        dto.setSkillsRequired(job.getSkillsRequired());
        dto.setEducationRequired(job.getEducationRequired());
        dto.setDeadline(job.getDeadline());
        dto.setNumberOfOpenings(job.getNumberOfOpenings());
        dto.setExperienceRequired(job.getExperienceRequired());
        dto.setSalaryMin(job.getSalaryMin());
        dto.setSalaryMax(job.getSalaryMax());
        dto.setJobType(job.getJobType());
        dto.setWorkLocation(job.getWorkLocation());
        dto.setLocation(job.getLocation());
        dto.setCompany(job.getCompany());
        dto.setActive(job.getActive());
        dto.setCreatedAt(job.getCreatedAt());
        dto.setUpdatedAt(job.getUpdatedAt());
        dto.setEmployerId(job.getEmployer() != null ? job.getEmployer().getId() : null);
        dto.setEmployerName(job.getEmployer() != null ? job.getEmployer().getFirstName() + " " + job.getEmployer().getLastName() : null);
        return dto;
    }
}
