package com.revhire.controller;

import com.revhire.dto.EmployerProfileDto;
import com.revhire.service.CompanyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/companies")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600)
public class CompanyController {
    
    private final CompanyService companyService;
    
    @GetMapping("/profile")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<EmployerProfileDto> getCurrentEmployerProfile() {
        log.info("Fetching current employer profile");
        
        EmployerProfileDto profile = companyService.getCurrentEmployerProfile();
        
        return ResponseEntity.ok(profile);
    }
    
    @GetMapping("/{employerId}")
    public ResponseEntity<EmployerProfileDto> getEmployerProfile(@PathVariable Long employerId) {
        log.info("Fetching employer profile for ID: {}", employerId);
        
        EmployerProfileDto profile = companyService.getEmployerProfile(employerId);
        
        return ResponseEntity.ok(profile);
    }
    
    @GetMapping("/public/{employerId}")
    public ResponseEntity<EmployerProfileDto> getPublicEmployerProfile(@PathVariable Long employerId) {
        log.info("Fetching public employer profile for ID: {}", employerId);
        
        EmployerProfileDto profile = companyService.getPublicEmployerProfile(employerId);
        
        return ResponseEntity.ok(profile);
    }
    
    @PutMapping("/profile")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<EmployerProfileDto> updateEmployerProfile(@RequestBody EmployerProfileDto profileDto) {
        log.info("Updating employer profile");
        
        EmployerProfileDto updatedProfile = companyService.updateEmployerProfile(profileDto);
        
        return ResponseEntity.ok(updatedProfile);
    }
    
    @GetMapping("/{employerId}/jobs")
    public ResponseEntity<List<Map<String, Object>>> getCompanyJobs(@PathVariable Long employerId) {
        log.info("Fetching jobs for company ID: {}", employerId);
        
        List<Map<String, Object>> jobs = companyService.getCompanyJobs(employerId);
        
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<EmployerProfileDto>> searchCompanies(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String industry,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        
        log.info("Searching companies with filters - name: {}, industry: {}", name, industry);
        
        List<EmployerProfileDto> companies = companyService.searchCompanies(name, industry, page, size);
        
        return ResponseEntity.ok(companies);
    }
}
