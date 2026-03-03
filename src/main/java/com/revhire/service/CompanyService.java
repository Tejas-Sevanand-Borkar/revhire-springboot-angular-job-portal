package com.revhire.service;

import com.revhire.dto.EmployerProfileDto;
import com.revhire.entity.EmployerProfile;
import com.revhire.entity.Job;
import com.revhire.entity.User;
import com.revhire.exception.ResourceNotFoundException;
import com.revhire.repository.EmployerProfileRepository;
import com.revhire.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class CompanyService {
    
    private final EmployerProfileRepository employerProfileRepository;
    private final JobRepository jobRepository;
    private final UserService userService;
    
    @Transactional(readOnly = true)
    public EmployerProfileDto getCurrentEmployerProfile() {
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        EmployerProfile profile = employerProfileRepository.findByUserAndDeletedFalse(currentUser)
                .orElseThrow(() -> new ResourceNotFoundException("Employer profile not found"));
        
        return convertToDto(profile);
    }
    
    @Transactional(readOnly = true)
    public EmployerProfileDto getEmployerProfile(Long employerId) {
        EmployerProfile profile = employerProfileRepository.findByUserIdAndDeletedFalse(employerId)
                .orElseThrow(() -> new ResourceNotFoundException("Employer profile not found with ID: " + employerId));
        
        return convertToDto(profile);
    }
    
    @Transactional(readOnly = true)
    public EmployerProfileDto getPublicEmployerProfile(Long employerId) {
        EmployerProfile profile = employerProfileRepository.findByUserIdAndDeletedFalse(employerId)
                .orElseThrow(() -> new ResourceNotFoundException("Employer profile not found with ID: " + employerId));
        
        // For public view, we might want to exclude some sensitive information
        EmployerProfileDto dto = convertToDto(profile);
        // Remove sensitive info if needed for public view
        return dto;
    }
    
    @Transactional
    public EmployerProfileDto updateEmployerProfile(EmployerProfileDto profileDto) {
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        EmployerProfile profile = employerProfileRepository.findByUserAndDeletedFalse(currentUser)
                .orElseThrow(() -> new ResourceNotFoundException("Employer profile not found"));
        
        // Update profile fields
        profile.setCompanyName(profileDto.getCompanyName());
        profile.setDescription(profileDto.getDescription());
        profile.setIndustry(profileDto.getIndustry());
        profile.setCompanySize(profileDto.getCompanySize());
        profile.setWebsite(profileDto.getWebsite());
        profile.setPhoneNumber(profileDto.getPhoneNumber());
        profile.setAddress(profileDto.getAddress());
        profile.setLogoPath(profileDto.getLogoPath());
        
        profile = employerProfileRepository.save(profile);
        
        log.info("Employer profile updated successfully for user: {}", currentUser.getEmail());
        
        return convertToDto(profile);
    }
    
    @Transactional(readOnly = true)
    public List<Map<String, Object>> getCompanyJobs(Long employerId) {
        List<Job> jobs = jobRepository.findActiveJobsByEmployer(employerId);
        
        return jobs.stream()
                .map(job -> {
                    Map<String, Object> jobMap = new HashMap<>();
                    jobMap.put("id", job.getId());
                    jobMap.put("title", job.getTitle());
                    jobMap.put("location", job.getLocation());
                    jobMap.put("salary", formatSalaryRange(job.getSalaryMin(), job.getSalaryMax()));
                    jobMap.put("type", job.getJobType());
                    jobMap.put("postedDate", job.getCreatedAt());
                    jobMap.put("applications", jobRepository.countApplicationsByJob(job.getId()));
                    return jobMap;
                })
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<EmployerProfileDto> searchCompanies(String name, String industry, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        List<EmployerProfile> profiles;
        
        if (name != null && industry != null) {
            profiles = employerProfileRepository.findByCompanyNameContainingIgnoreCaseAndIndustryAndDeletedFalse(name, industry, pageable);
        } else if (name != null) {
            profiles = employerProfileRepository.findByCompanyNameContainingIgnoreCaseAndDeletedFalse(name, pageable);
        } else if (industry != null) {
            profiles = employerProfileRepository.findByIndustryAndDeletedFalse(industry, pageable);
        } else {
            profiles = employerProfileRepository.findAllByDeletedFalse(pageable);
        }
        
        return profiles.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    private EmployerProfileDto convertToDto(EmployerProfile profile) {
        EmployerProfileDto dto = new EmployerProfileDto();
        dto.setId(profile.getId());
        dto.setUserId(profile.getUser().getId());
        dto.setCompanyName(profile.getCompanyName());
        dto.setDescription(profile.getDescription());
        dto.setIndustry(profile.getIndustry());
        dto.setCompanySize(profile.getCompanySize());
        dto.setWebsite(profile.getWebsite());
        dto.setPhoneNumber(profile.getPhoneNumber());
        dto.setAddress(profile.getAddress());
        dto.setLogoPath(profile.getLogoPath());
        dto.setFirstName(profile.getUser().getFirstName());
        dto.setLastName(profile.getUser().getLastName());
        dto.setEmail(profile.getUser().getEmail());
        
        // These would need to be added to the entity if tracking creation/update times
        // dto.setCreatedAt(profile.getCreatedAt());
        // dto.setUpdatedAt(profile.getUpdatedAt());
        
        return dto;
    }
    
    private String formatSalaryRange(Integer min, Integer max) {
        if (min != null && max != null) {
            return "$" + min + " - $" + max;
        } else if (min != null) {
            return "$" + min + "+";
        } else if (max != null) {
            return "Up to $" + max;
        } else {
            return "Salary not specified";
        }
    }
}
