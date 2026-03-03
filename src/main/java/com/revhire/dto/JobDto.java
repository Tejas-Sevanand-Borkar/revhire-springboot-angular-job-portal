package com.revhire.dto;

import com.revhire.entity.Job;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobDto {
    private Long id;
    private String title;
    private String description;
    private String requirements;
    private String responsibilities;
    private String skillsRequired;
    private String educationRequired;
    private LocalDateTime deadline;
    private Integer numberOfOpenings;
    private Integer experienceRequired;
    private Integer salaryMin;
    private Integer salaryMax;
    private Job.JobType jobType;
    private Job.WorkLocation workLocation;
    private String location;
    private String company;
    private Boolean active;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Long employerId;
    private String employerName;
}
