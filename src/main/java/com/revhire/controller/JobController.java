package com.revhire.controller;

import com.revhire.dto.JobDto;
import com.revhire.dto.JobSearchRequest;
import com.revhire.entity.Job;
import com.revhire.service.JobService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600)
public class JobController {
    
    private final JobService jobService;
    
    @PostMapping
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<JobDto> createJob(@Valid @RequestBody JobDto jobDto) {
        log.info("Creating job with title: {}", jobDto.getTitle());
        
        JobDto createdJob = jobService.createJob(jobDto);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(createdJob);
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<JobDto> updateJob(@PathVariable Long id, @Valid @RequestBody JobDto jobDto) {
        log.info("Updating job with ID: {}", id);
        
        JobDto updatedJob = jobService.updateJob(id, jobDto);
        
        return ResponseEntity.ok(updatedJob);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<Void> deleteJob(@PathVariable Long id) {
        log.info("Deleting job with ID: {}", id);
        
        jobService.deleteJob(id);
        
        return ResponseEntity.noContent().build();
    }
    
    @PatchMapping("/{id}/toggle-status")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<Void> toggleJobStatus(@PathVariable Long id) {
        log.info("Toggling job status for ID: {}", id);
        
        jobService.toggleJobStatus(id);
        
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<JobDto> getJobById(@PathVariable Long id) {
        log.info("Fetching job with ID: {}", id);
        
        JobDto job = jobService.getJobById(id);
        
        return ResponseEntity.ok(job);
    }
    
    @GetMapping
    public ResponseEntity<List<JobDto>> getAllActiveJobs() {
        log.info("Fetching all active jobs");
        
        List<JobDto> jobs = jobService.getAllActiveJobs();
        
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/employer/{employerId}")
    @PreAuthorize("hasRole('EMPLOYER') or #employerId == authentication.principal.id")
    public ResponseEntity<List<JobDto>> getJobsByEmployer(@PathVariable Long employerId) {
        log.info("Fetching jobs for employer ID: {}", employerId);
        
        List<JobDto> jobs = jobService.getJobsByEmployer(employerId);
        
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<JobDto>> searchJobs(@RequestParam String keyword) {
        log.info("Searching jobs with keyword: {}", keyword);
        
        List<JobDto> jobs = jobService.searchJobs(keyword);
        
        return ResponseEntity.ok(jobs);
    }
    
    @PostMapping("/advanced-search")
    public ResponseEntity<List<JobDto>> advancedJobSearch(@RequestBody JobSearchRequest searchRequest) {
        log.info("Performing advanced job search with filters");
        
        List<JobDto> jobs = jobService.advancedJobSearch(searchRequest);
        
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/location/{location}")
    public ResponseEntity<List<JobDto>> getJobsByLocation(@PathVariable String location) {
        log.info("Fetching jobs for location: {}", location);
        
        List<JobDto> jobs = jobService.getJobsByLocation(location);
        
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/type/{jobType}")
    public ResponseEntity<List<JobDto>> getJobsByJobType(@PathVariable Job.JobType jobType) {
        log.info("Fetching jobs for job type: {}", jobType);
        
        List<JobDto> jobs = jobService.getJobsByJobType(jobType);
        
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/work-location/{workLocation}")
    public ResponseEntity<List<JobDto>> getJobsByWorkLocation(@PathVariable Job.WorkLocation workLocation) {
        log.info("Fetching jobs for work location: {}", workLocation);
        
        List<JobDto> jobs = jobService.getJobsByWorkLocation(workLocation);
        
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/salary")
    public ResponseEntity<List<JobDto>> getJobsBySalaryRange(@RequestParam Integer minSalary) {
        log.info("Fetching jobs with minimum salary: {}", minSalary);
        
        List<JobDto> jobs = jobService.getJobsBySalaryRange(minSalary);
        
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/experience/{maxExperience}")
    public ResponseEntity<List<JobDto>> getJobsByExperience(@PathVariable Integer maxExperience) {
        log.info("Fetching jobs with maximum experience: {}", maxExperience);
        
        List<JobDto> jobs = jobService.getJobsByExperience(maxExperience);
        
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/employer")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<List<JobDto>> getEmployerJobs() {
        log.info("Fetching jobs for current employer");
        
        List<JobDto> jobs = jobService.getEmployerJobs();
        
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/employer/stats")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<Object> getJobStatistics() {
        log.info("Fetching job statistics for current employer");
        
        Object stats = jobService.getJobStatistics();
        
        return ResponseEntity.ok(stats);
    }
}
