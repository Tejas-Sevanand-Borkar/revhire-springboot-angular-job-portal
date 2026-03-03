package com.revhire.controller;

import com.revhire.entity.SavedJob;
import com.revhire.dto.SavedJobDto;
import com.revhire.service.SavedJobService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/saved-jobs")
@RequiredArgsConstructor
@Slf4j
public class SavedJobController {
    
    private final SavedJobService savedJobService;
    
    @PostMapping("/{jobId}")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<SavedJob> saveJob(@PathVariable Long jobId) {
        log.info("Request to save job: {}", jobId);
        SavedJob savedJob = savedJobService.saveJob(jobId);
        return ResponseEntity.ok(savedJob);
    }
    
    @DeleteMapping("/{jobId}")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<Void> unsaveJob(@PathVariable Long jobId) {
        log.info("Request to unsave job: {}", jobId);
        savedJobService.unsaveJob(jobId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<List<SavedJobDto>> getSavedJobs() {
        log.info("Request to get saved jobs for current user");
        List<SavedJobDto> savedJobs = savedJobService.getSavedJobsDto();
        return ResponseEntity.ok(savedJobs);
    }
    
    @GetMapping("/{jobId}/check")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<Map<String, Boolean>> checkIfJobSaved(@PathVariable Long jobId) {
        log.info("Request to check if job {} is saved", jobId);
        boolean isSaved = savedJobService.isJobSaved(jobId);
        Map<String, Boolean> response = new HashMap<>();
        response.put("saved", isSaved);
        return ResponseEntity.ok(response);
    }
}
