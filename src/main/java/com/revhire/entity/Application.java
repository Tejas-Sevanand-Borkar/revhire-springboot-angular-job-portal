package com.revhire.entity;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "applications")
@EntityListeners(AuditingEntityListener.class)
public class Application {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "cover_letter", columnDefinition = "TEXT")
    private String coverLetter;
    
    @Column(name = "withdrawal_reason", columnDefinition = "TEXT")
    private String withdrawalReason;
    
    @Column(name = "resume_path")
    private String resumePath;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ApplicationStatus status;
    
    @Column(nullable = false)
    private Boolean deleted = false;
    
    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_id", nullable = false)
    private Job job;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_seeker_id", nullable = false)
    private User jobSeeker;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employer_id", nullable = false)
    private User employer;
    
    public enum ApplicationStatus {
        APPLIED, SHORTLISTED, INTERVIEW_SCHEDULED, HIRED, REJECTED, WITHDRAWN
    }
    
    public Application() {}
    
    public Application(Job job, User jobSeeker, User employer) {
        this.job = job;
        this.jobSeeker = jobSeeker;
        this.employer = employer;
        this.status = ApplicationStatus.APPLIED;
    }
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getCoverLetter() { return coverLetter; }
    public void setCoverLetter(String coverLetter) { this.coverLetter = coverLetter; }
    
    public String getWithdrawalReason() { return withdrawalReason; }
    public void setWithdrawalReason(String withdrawalReason) { this.withdrawalReason = withdrawalReason; }
    
    public String getResumePath() { return resumePath; }
    public void setResumePath(String resumePath) { this.resumePath = resumePath; }
    
    public ApplicationStatus getStatus() { return status; }
    public void setStatus(ApplicationStatus status) { this.status = status; }
    
    public Boolean getDeleted() { return deleted; }
    public void setDeleted(Boolean deleted) { this.deleted = deleted; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
    
    public Job getJob() { return job; }
    public void setJob(Job job) { this.job = job; }
    
    public User getJobSeeker() { return jobSeeker; }
    public void setJobSeeker(User jobSeeker) { this.jobSeeker = jobSeeker; }
    
    public User getEmployer() { return employer; }
    public void setEmployer(User employer) { this.employer = employer; }
}
