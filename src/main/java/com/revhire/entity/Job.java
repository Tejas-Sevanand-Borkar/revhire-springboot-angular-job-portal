package com.revhire.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "jobs")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Job {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Job title is required")
    @Size(max = 100, message = "Job title must not exceed 100 characters")
    @Column(nullable = false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(name = "requirements", columnDefinition = "TEXT")
    private String requirements;
    
    @Column(name = "responsibilities", columnDefinition = "TEXT")
    private String responsibilities;
    
    @Column(name = "skills_required", columnDefinition = "TEXT")
    private String skillsRequired;
    
    @Column(name = "education_required")
    private String educationRequired;
    
    @Column(name = "deadline")
    private LocalDateTime deadline;
    
    @Column(name = "number_of_openings")
    private Integer numberOfOpenings;
    
    @Column(name = "experience_required")
    private Integer experienceRequired;
    
    @Column(name = "salary_min")
    private Integer salaryMin;
    
    @Column(name = "salary_max")
    private Integer salaryMax;
    
    @Column(name = "job_type")
    @Enumerated(EnumType.STRING)
    private JobType jobType;
    
    @Column(name = "work_location")
    @Enumerated(EnumType.STRING)
    private WorkLocation workLocation;
    
    @Column(name = "location")
    private String location;
    
    @Column(name = "company")
    private String company;
    
    @Column(nullable = false)
    private Boolean deleted = false;
    
    @Column(nullable = false)
    private Boolean active = true;
    
    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employer_id", nullable = false)
    private User employer;
    
    public enum JobType {
        FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP, FREELANCE
    }
    
    public enum WorkLocation {
        ON_SITE, REMOTE, HYBRID
    }
    
    public Job() {}
    
    public Job(String title, String description, User employer) {
        this.title = title;
        this.description = description;
        this.employer = employer;
    }
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String getRequirements() { return requirements; }
    public void setRequirements(String requirements) { this.requirements = requirements; }
    
    public String getResponsibilities() { return responsibilities; }
    public void setResponsibilities(String responsibilities) { this.responsibilities = responsibilities; }
    
    public String getSkillsRequired() { return skillsRequired; }
    public void setSkillsRequired(String skillsRequired) { this.skillsRequired = skillsRequired; }
    
    public String getEducationRequired() { return educationRequired; }
    public void setEducationRequired(String educationRequired) { this.educationRequired = educationRequired; }
    
    public LocalDateTime getDeadline() { return deadline; }
    public void setDeadline(LocalDateTime deadline) { this.deadline = deadline; }
    
    public Integer getNumberOfOpenings() { return numberOfOpenings; }
    public void setNumberOfOpenings(Integer numberOfOpenings) { this.numberOfOpenings = numberOfOpenings; }
    
    public Integer getExperienceRequired() { return experienceRequired; }
    public void setExperienceRequired(Integer experienceRequired) { this.experienceRequired = experienceRequired; }
    
    public Integer getSalaryMin() { return salaryMin; }
    public void setSalaryMin(Integer salaryMin) { this.salaryMin = salaryMin; }
    
    public Integer getSalaryMax() { return salaryMax; }
    public void setSalaryMax(Integer salaryMax) { this.salaryMax = salaryMax; }
    
    public JobType getJobType() { return jobType; }
    public void setJobType(JobType jobType) { this.jobType = jobType; }
    
    public WorkLocation getWorkLocation() { return workLocation; }
    public void setWorkLocation(WorkLocation workLocation) { this.workLocation = workLocation; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    
    public Boolean getDeleted() { return deleted; }
    public void setDeleted(Boolean deleted) { this.deleted = deleted; }
    
    public Boolean getActive() { return active; }
    public void setActive(Boolean active) { this.active = active; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
    
    public User getEmployer() { return employer; }
    public void setEmployer(User employer) { this.employer = employer; }
}
