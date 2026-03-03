package com.revhire.dto;

import com.revhire.entity.Job;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class JobSearchRequest {
    
    private String keyword;
    private String location;
    private Job.JobType jobType;
    private Job.WorkLocation workLocation;
    private Integer experienceYears;
    private Integer minSalary;
    private Integer maxSalary;
    private String companyName;
    private LocalDateTime postedAfter;
    private String sortBy; // "date", "salary", "relevance"
    private String sortDirection; // "asc", "desc"
    private int page = 0;
    private int size = 10;
}
