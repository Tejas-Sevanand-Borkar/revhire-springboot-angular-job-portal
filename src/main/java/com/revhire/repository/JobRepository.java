package com.revhire.repository;

import com.revhire.dto.JobSearchRequest;
import com.revhire.entity.Job;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    
    @Query("SELECT j FROM Job j WHERE j.id = :jobId AND j.deleted = false")
    Optional<Job> findActiveJobById(@Param("jobId") Long jobId);
    
    @Query("SELECT j FROM Job j WHERE j.employer.id = :employerId AND j.deleted = false")
    List<Job> findActiveJobsByEmployer(@Param("employerId") Long employerId);
    
    @Query("SELECT j FROM Job j WHERE j.deleted = false AND j.active = true")
    List<Job> findAllActiveJobs();
    
    @Query("SELECT j FROM Job j WHERE " +
           "j.deleted = false AND j.active = true AND " +
           "(LOWER(j.title) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(j.description) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(j.skillsRequired) LIKE LOWER(CONCAT('%', :keyword, '%')))")
    List<Job> searchActiveJobs(@Param("keyword") String keyword);
    
    @Query("SELECT j FROM Job j WHERE " +
           "j.deleted = false AND j.active = true AND " +
           "j.location = :location")
    List<Job> findActiveJobsByLocation(@Param("location") String location);
    
    @Query("SELECT j FROM Job j WHERE " +
           "j.deleted = false AND j.active = true AND " +
           "j.jobType = :jobType")
    List<Job> findActiveJobsByJobType(@Param("jobType") Job.JobType jobType);
    
    @Query("SELECT j FROM Job j WHERE " +
           "j.deleted = false AND j.active = true AND " +
           "j.workLocation = :workLocation")
    List<Job> findActiveJobsByWorkLocation(@Param("workLocation") Job.WorkLocation workLocation);
    
    @Query("SELECT j FROM Job j WHERE " +
           "j.deleted = false AND j.active = true AND " +
           "j.salaryMin >= :minSalary")
    List<Job> findActiveJobsByMinSalary(@Param("minSalary") Integer minSalary);
    
    @Query("SELECT j FROM Job j WHERE " +
           "j.deleted = false AND j.active = true AND " +
           "j.salaryMax <= :maxSalary")
    List<Job> findActiveJobsByMaxSalary(@Param("maxSalary") Integer maxSalary);
    
    @Query("SELECT j FROM Job j WHERE " +
           "j.deleted = false AND j.active = true AND " +
           "j.experienceRequired <= :maxExperience")
    List<Job> findActiveJobsByMaxExperience(@Param("maxExperience") Integer maxExperience);
    
    @Query("SELECT COUNT(j) FROM Job j WHERE j.employer.id = :employerId AND j.deleted = false")
    Long countJobsByEmployer(@Param("employerId") Long employerId);
    
    @Query("SELECT COUNT(j) FROM Job j WHERE j.employer.id = :employerId AND j.deleted = false AND j.active = true")
    Long countActiveJobsByEmployer(@Param("employerId") Long employerId);
    
    @Query("SELECT j FROM Job j WHERE " +
           "j.deleted = false AND j.active = true AND " +
           "(:keyword IS NULL OR LOWER(j.title) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(j.description) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(j.skillsRequired) LIKE LOWER(CONCAT('%', :keyword, '%'))) AND " +
           "(:location IS NULL OR LOWER(j.location) LIKE LOWER(CONCAT('%', :location, '%'))) AND " +
           "(:jobType IS NULL OR j.jobType = :jobType) AND " +
           "(:workLocation IS NULL OR j.workLocation = :workLocation) AND " +
           "(:experienceYears IS NULL OR j.experienceRequired <= :experienceYears) AND " +
           "(:minSalary IS NULL OR j.salaryMin >= :minSalary) AND " +
           "(:maxSalary IS NULL OR j.salaryMax <= :maxSalary) AND " +
           "(:companyName IS NULL OR LOWER(j.employer.firstName) LIKE LOWER(CONCAT('%', :companyName, '%')) OR " +
           "LOWER(j.employer.lastName) LIKE LOWER(CONCAT('%', :companyName, '%'))) AND " +
           "(:postedAfter IS NULL OR j.createdAt >= :postedAfter)")
    List<Job> advancedJobSearch(@Param("keyword") String keyword,
                               @Param("location") String location,
                               @Param("jobType") Job.JobType jobType,
                               @Param("workLocation") Job.WorkLocation workLocation,
                               @Param("experienceYears") Integer experienceYears,
                               @Param("minSalary") Integer minSalary,
                               @Param("maxSalary") Integer maxSalary,
                               @Param("companyName") String companyName,
                               @Param("postedAfter") java.time.LocalDateTime postedAfter);
    
    @Query("SELECT j FROM Job j WHERE j.employer.id = :employerId AND j.deleted = false ORDER BY j.createdAt DESC")
    List<Job> findJobsByEmployerOrderByDate(@Param("employerId") Long employerId);
    
    @Query("SELECT j FROM Job j WHERE j.employer.id = :employerId AND j.deleted = false ORDER BY SIZE((SELECT a FROM Application a WHERE a.job.id = j.id AND a.deleted = false)) DESC")
    List<Job> findPopularJobsByEmployer(@Param("employerId") Long employerId);
    
    @Query("SELECT j FROM Job j WHERE j.employer.id = :employerId AND j.deleted = false ORDER BY SIZE((SELECT a FROM Application a WHERE a.job.id = j.id AND a.deleted = false)) DESC LIMIT :limit")
    List<Job> findPopularJobsByEmployer(@Param("employerId") Long employerId, @Param("limit") int limit);
    
    @Query("SELECT COUNT(j) FROM Job j WHERE j.deleted = false")
    Long countActive();
    
    @Query("SELECT COUNT(j) FROM Job j WHERE j.createdAt >= :date AND j.deleted = false")
    Long countJobsCreatedAfter(@Param("date") java.time.LocalDateTime date);
    
    @Query("SELECT j FROM Job j WHERE " +
           "j.deleted = false AND j.active = true AND " +
           "(LOWER(j.title) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(j.description) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(j.skillsRequired) LIKE LOWER(CONCAT('%', :keyword, '%'))) AND " +
           "j.experienceRequired <= :experienceYears AND " +
           "j.salaryMin >= :minSalary AND " +
           "j.salaryMax <= :maxSalary AND " +
           "j.location = :location AND " +
           "j.jobType = :jobType AND " +
           "j.workLocation = :workLocation")
    List<Job> findRecommendedJobsForJobSeeker(@Param("keyword") String keyword,
                                               @Param("experienceYears") Integer experienceYears,
                                               @Param("minSalary") Integer minSalary,
                                               @Param("maxSalary") Integer maxSalary,
                                               @Param("location") String location,
                                               @Param("jobType") Job.JobType jobType,
                                               @Param("workLocation") Job.WorkLocation workLocation,
                                               Pageable pageable);
    
    // Additional methods for employer dashboard
    List<Job> findByEmployerIdAndDeletedFalse(Long employerId);
    List<Job> findByEmployerIdAndActiveTrueAndDeletedFalse(Long employerId);
    
    @Query("SELECT COUNT(a) FROM Application a WHERE a.job.id = :jobId AND a.deleted = false")
    Long countApplicationsByJob(@Param("jobId") Long jobId);
}
