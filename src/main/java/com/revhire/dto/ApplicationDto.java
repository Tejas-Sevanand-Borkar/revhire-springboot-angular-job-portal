package com.revhire.dto;

import com.revhire.entity.Application;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationDto {
    private Long id;
    private String coverLetter;
    private String resumePath;
    private Application.ApplicationStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Long jobId;
    private String jobTitle;
    private Long jobSeekerId;
    private String jobSeekerName;
    private Long employerId;
    private String employerName;
}
