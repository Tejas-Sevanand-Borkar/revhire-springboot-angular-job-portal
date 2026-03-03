package com.revhire.service;

import com.revhire.dto.JobDto;
import com.revhire.dto.JobSearchRequest;
import com.revhire.entity.Job;
import com.revhire.entity.User;
import com.revhire.exception.ResourceNotFoundException;
import com.revhire.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class JobService {
    
    private final JobRepository jobRepository;
    private final UserService userService;
    private final NotificationService notificationService;
    
    @Transactional
    public JobDto createJob(JobDto jobDto) {
        log.info("Creating new job with title: {}", jobDto.getTitle());
        
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        Job job = new Job();
        job.setTitle(jobDto.getTitle());
        job.setDescription(jobDto.getDescription());
        job.setRequirements(jobDto.getRequirements());
        job.setResponsibilities(jobDto.getResponsibilities());
        job.setSkillsRequired(jobDto.getSkillsRequired());
        job.setEducationRequired(jobDto.getEducationRequired());
        job.setDeadline(jobDto.getDeadline());
        job.setNumberOfOpenings(jobDto.getNumberOfOpenings());
        job.setExperienceRequired(jobDto.getExperienceRequired());
        job.setSalaryMin(jobDto.getSalaryMin());
        job.setSalaryMax(jobDto.getSalaryMax());
        job.setJobType(jobDto.getJobType());
        job.setWorkLocation(jobDto.getWorkLocation());
        job.setLocation(jobDto.getLocation());
        job.setCompany(jobDto.getCompany());
        job.setActive(true);
        job.setDeleted(false);
        job.setEmployer(currentUser);
        
        job = jobRepository.save(job);
        
        notificationService.createJobPostedNotification(job);
        
        log.info("Job created successfully with ID: {}", job.getId());
        
        return convertToDto(job);
    }
    
    @Transactional
    public JobDto updateJob(Long jobId, JobDto jobDto) {
        log.info("Updating job with ID: {}", jobId);
        
        Job job = jobRepository.findActiveJobById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with ID: " + jobId));
        
        job.setTitle(jobDto.getTitle());
        job.setDescription(jobDto.getDescription());
        job.setRequirements(jobDto.getRequirements());
        job.setResponsibilities(jobDto.getResponsibilities());
        job.setSkillsRequired(jobDto.getSkillsRequired());
        job.setEducationRequired(jobDto.getEducationRequired());
        job.setDeadline(jobDto.getDeadline());
        job.setNumberOfOpenings(jobDto.getNumberOfOpenings());
        job.setExperienceRequired(jobDto.getExperienceRequired());
        job.setSalaryMin(jobDto.getSalaryMin());
        job.setSalaryMax(jobDto.getSalaryMax());
        job.setJobType(jobDto.getJobType());
        job.setWorkLocation(jobDto.getWorkLocation());
        job.setLocation(jobDto.getLocation());
        job.setCompany(jobDto.getCompany());
        
        job = jobRepository.save(job);
        
        log.info("Job updated successfully with ID: {}", jobId);
        
        return convertToDto(job);
    }
    
    @Transactional
    public void deleteJob(Long jobId) {
        log.info("Deleting job with ID: {}", jobId);
        
        Job job = jobRepository.findActiveJobById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with ID: " + jobId));
        
        job.setDeleted(true);
        jobRepository.save(job);
        
        log.info("Job deleted successfully with ID: {}", jobId);
    }
    
    @Transactional
    public void toggleJobStatus(Long jobId) {
        log.info("Toggling job status for ID: {}", jobId);
        
        Job job = jobRepository.findActiveJobById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with ID: " + jobId));
        
        job.setActive(!job.getActive());
        jobRepository.save(job);
        
        log.info("Job status toggled successfully for ID: {}, new status: {}", 
                jobId, job.getActive());
    }
    
    @Transactional(readOnly = true)
    public JobDto getJobById(Long jobId) {
        Job job = jobRepository.findActiveJobById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with ID: " + jobId));
        
        return convertToDto(job);
    }
    
    @Transactional(readOnly = true)
    public List<JobDto> getAllActiveJobs() {
        List<Job> jobs = jobRepository.findAllActiveJobs();
        return jobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<JobDto> getJobsByEmployer(Long employerId) {
        List<Job> jobs = jobRepository.findActiveJobsByEmployer(employerId);
        return jobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<JobDto> searchJobs(String keyword) {
        List<Job> jobs = jobRepository.searchActiveJobs(keyword);
        return jobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<JobDto> getJobsByLocation(String location) {
        List<Job> jobs = jobRepository.findActiveJobsByLocation(location);
        return jobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<JobDto> getJobsByJobType(Job.JobType jobType) {
        List<Job> jobs = jobRepository.findActiveJobsByJobType(jobType);
        return jobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<JobDto> getJobsByWorkLocation(Job.WorkLocation workLocation) {
        List<Job> jobs = jobRepository.findActiveJobsByWorkLocation(workLocation);
        return jobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<JobDto> getJobsBySalaryRange(Integer minSalary) {
        List<Job> jobs = jobRepository.findActiveJobsByMinSalary(minSalary);
        return jobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<JobDto> getJobsByExperience(Integer maxExperience) {
        List<Job> jobs = jobRepository.findActiveJobsByMaxExperience(maxExperience);
        return jobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<JobDto> advancedJobSearch(JobSearchRequest searchRequest) {
        log.info("Performing advanced job search with filters: {}", searchRequest);
        
        List<Job> jobs = jobRepository.advancedJobSearch(
            searchRequest.getKeyword(),
            searchRequest.getLocation(),
            searchRequest.getJobType(),
            searchRequest.getWorkLocation(),
            searchRequest.getExperienceYears(),
            searchRequest.getMinSalary(),
            searchRequest.getMaxSalary(),
            searchRequest.getCompanyName(),
            searchRequest.getPostedAfter()
        );
        return jobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    private JobDto convertToDto(Job job) {
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
        
        if (job.getEmployer() != null) {
            dto.setEmployerId(job.getEmployer().getId());
            dto.setEmployerName(job.getEmployer().getFirstName() + " " + job.getEmployer().getLastName());
        }
        
        return dto;
    }
    
    public List<JobDto> getEmployerJobs() {
        log.info("Fetching jobs for current employer");
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        List<Job> jobs = jobRepository.findByEmployerIdAndDeletedFalse(currentUser.getId());
        return jobs.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    public Object getJobStatistics() {
        log.info("Fetching job statistics for current employer");
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        List<Job> allJobs = jobRepository.findByEmployerIdAndDeletedFalse(currentUser.getId());
        List<Job> activeJobs = jobRepository.findByEmployerIdAndActiveTrueAndDeletedFalse(currentUser.getId());
        
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalJobs", allJobs.size());
        stats.put("activeJobs", activeJobs.size());
        stats.put("inactiveJobs", allJobs.size() - activeJobs.size());
        
        return stats;
    }
}
