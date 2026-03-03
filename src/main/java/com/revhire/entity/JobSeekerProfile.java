package com.revhire.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "job_seeker_profiles")
public class JobSeekerProfile {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;
    
    @NotBlank(message = "First name is required")
    @Size(max = 50, message = "First name must not exceed 50 characters")
    @Column(name = "first_name", nullable = false)
    private String firstName;
    
    @NotBlank(message = "Last name is required")
    @Size(max = 50, message = "Last name must not exceed 50 characters")
    @Column(name = "last_name", nullable = false)
    private String lastName;
    
    @Column(name = "phone_number")
    private String phoneNumber;
    
    @Column(columnDefinition = "TEXT")
    private String summary;
    
    @Column(name = "resume_text", columnDefinition = "TEXT")
    private String resumeText;
    
    @Column(name = "resume_path")
    private String resumePath;
    
    @Column(name = "current_employment_status")
    private String currentEmploymentStatus;
    
    @Column(name = "linkedin_url")
    private String linkedinUrl;
    
    @Column(name = "github_url")
    private String githubUrl;
    
    @Column(name = "portfolio_url")
    private String portfolioUrl;
    
    @Column(name = "skills", columnDefinition = "TEXT")
    private String skills;
    
    @Column(name = "education", columnDefinition = "TEXT")
    private String education;
    
    @Column(name = "experience", columnDefinition = "TEXT")
    private String experience;
    
    @Column(name = "projects", columnDefinition = "TEXT")
    private String projects;
    
    @Column(name = "certifications", columnDefinition = "TEXT")
    private String certifications;
    
    @Column(name = "experience_years")
    private Integer experienceYears;
    
    @Column(name = "expected_salary_min")
    private Integer expectedSalaryMin;
    
    @Column(name = "expected_salary_max")
    private Integer expectedSalaryMax;
    
    @Column(name = "location")
    private String location;
    
    @Column(name = "work_preference")
    private String workPreference;
    
    @Column(name = "availability")
    private String availability;
    
    @Column(name = "preferred_job_types")
    private String preferredJobTypes;
    
    @Column(name = "preferred_locations")
    private String preferredLocations;
    
    @Column(nullable = false)
    private Boolean deleted = false;
    
    public JobSeekerProfile() {}
    
    public JobSeekerProfile(User user, String firstName, String lastName) {
        this.user = user;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    
    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
    
    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
    
    public String getResumePath() { return resumePath; }
    public void setResumePath(String resumePath) { this.resumePath = resumePath; }
    
    public String getSkills() { return skills; }
    public void setSkills(String skills) { this.skills = skills; }
    
    public Integer getExperienceYears() { return experienceYears; }
    public void setExperienceYears(Integer experienceYears) { this.experienceYears = experienceYears; }
    
    public Integer getExpectedSalaryMin() { return expectedSalaryMin; }
    public void setExpectedSalaryMin(Integer expectedSalaryMin) { this.expectedSalaryMin = expectedSalaryMin; }
    
    public Integer getExpectedSalaryMax() { return expectedSalaryMax; }
    public void setExpectedSalaryMax(Integer expectedSalaryMax) { this.expectedSalaryMax = expectedSalaryMax; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    
    public String getResumeText() { return resumeText; }
    public void setResumeText(String resumeText) { this.resumeText = resumeText; }
    
    public String getCurrentEmploymentStatus() { return currentEmploymentStatus; }
    public void setCurrentEmploymentStatus(String currentEmploymentStatus) { this.currentEmploymentStatus = currentEmploymentStatus; }
    
    public String getLinkedinUrl() { return linkedinUrl; }
    public void setLinkedinUrl(String linkedinUrl) { this.linkedinUrl = linkedinUrl; }
    
    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
    
    public String getPortfolioUrl() { return portfolioUrl; }
    public void setPortfolioUrl(String portfolioUrl) { this.portfolioUrl = portfolioUrl; }
    
    public String getEducation() { return education; }
    public void setEducation(String education) { this.education = education; }
    
    public String getExperience() { return experience; }
    public void setExperience(String experience) { this.experience = experience; }
    
    public String getProjects() { return projects; }
    public void setProjects(String projects) { this.projects = projects; }
    
    public String getCertifications() { return certifications; }
    public void setCertifications(String certifications) { this.certifications = certifications; }
    
    public String getWorkPreference() { return workPreference; }
    public void setWorkPreference(String workPreference) { this.workPreference = workPreference; }
    
    public String getAvailability() { return availability; }
    public void setAvailability(String availability) { this.availability = availability; }
    
    public String getPreferredJobTypes() { return preferredJobTypes; }
    public void setPreferredJobTypes(String preferredJobTypes) { this.preferredJobTypes = preferredJobTypes; }
    
    public String getPreferredLocations() { return preferredLocations; }
    public void setPreferredLocations(String preferredLocations) { this.preferredLocations = preferredLocations; }
    
    public Boolean getDeleted() { return deleted; }
    public void setDeleted(Boolean deleted) { this.deleted = deleted; }
}
