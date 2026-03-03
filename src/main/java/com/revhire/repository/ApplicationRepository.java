package com.revhire.repository;

import com.revhire.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
    
    @Query("SELECT a FROM Application a WHERE a.id = :applicationId AND a.deleted = false")
    Optional<Application> findActiveApplicationById(@Param("applicationId") Long applicationId);
    
    @Query("SELECT a FROM Application a WHERE a.job.id = :jobId AND a.deleted = false")
    List<Application> findActiveApplicationsByJob(@Param("jobId") Long jobId);
    
    @Query("SELECT a FROM Application a WHERE a.jobSeeker.id = :jobSeekerId AND a.deleted = false")
    List<Application> findActiveApplicationsByJobSeeker(@Param("jobSeekerId") Long jobSeekerId);
    
    @Query("SELECT a FROM Application a WHERE a.employer.id = :employerId AND a.deleted = false")
    List<Application> findActiveApplicationsByEmployer(@Param("employerId") Long employerId);
    
    @Query("SELECT a FROM Application a WHERE a.job.id = :jobId AND a.jobSeeker.id = :jobSeekerId AND a.deleted = false")
    Optional<Application> findActiveApplicationByJobAndJobSeeker(@Param("jobId") Long jobId, @Param("jobSeekerId") Long jobSeekerId);
    
    @Query("SELECT a FROM Application a WHERE a.status = :status AND a.deleted = false")
    List<Application> findActiveApplicationsByStatus(@Param("status") Application.ApplicationStatus status);
    
    @Query("SELECT a FROM Application a WHERE a.job.id = :jobId AND a.status = :status AND a.deleted = false")
    List<Application> findActiveApplicationsByJobAndStatus(@Param("jobId") Long jobId, @Param("status") Application.ApplicationStatus status);
    
    @Query("SELECT a FROM Application a WHERE a.jobSeeker.id = :jobSeekerId AND a.status = :status AND a.deleted = false")
    List<Application> findActiveApplicationsByJobSeekerAndStatus(@Param("jobSeekerId") Long jobSeekerId, @Param("status") Application.ApplicationStatus status);
    
    @Query("SELECT a FROM Application a WHERE a.employer.id = :employerId AND a.status = :status AND a.deleted = false")
    List<Application> findActiveApplicationsByEmployerAndStatus(@Param("employerId") Long employerId, @Param("status") Application.ApplicationStatus status);
    
    @Query("SELECT COUNT(a) FROM Application a WHERE a.job.id = :jobId AND a.deleted = false")
    Long countApplicationsByJob(@Param("jobId") Long jobId);
    
    @Query("SELECT COUNT(a) FROM Application a WHERE a.jobSeeker.id = :jobSeekerId AND a.deleted = false")
    Long countApplicationsByJobSeeker(@Param("jobSeekerId") Long jobSeekerId);
    
    @Query("SELECT COUNT(a) FROM Application a WHERE a.employer.id = :employerId AND a.deleted = false")
    Long countApplicationsByEmployer(@Param("employerId") Long employerId);
    
    @Query("SELECT COUNT(a) FROM Application a WHERE a.job.id = :jobId AND a.status = :status AND a.deleted = false")
    Long countApplicationsByJobAndStatus(@Param("jobId") Long jobId, @Param("status") Application.ApplicationStatus status);
    
    @Query("SELECT COUNT(a) FROM Application a WHERE a.employer.id = :employerId AND a.status = :status AND a.deleted = false")
    Long countApplicationsByEmployerAndStatus(@Param("employerId") Long employerId, @Param("status") Application.ApplicationStatus status);
    
    @Query("SELECT a.status, COUNT(a) FROM Application a WHERE a.job.id = :jobId AND a.deleted = false GROUP BY a.status")
    List<Object[]> getApplicationStatusCountByJob(@Param("jobId") Long jobId);
    
    @Query("SELECT COUNT(a) FROM Application a WHERE a.job.id IN :jobIds AND a.deleted = false")
    Long countApplicationsByJobs(@Param("jobIds") List<Long> jobIds);
    
    @Query("SELECT COUNT(a) FROM Application a WHERE a.job.id IN :jobIds AND a.status = :status AND a.deleted = false")
    Long countApplicationsByJobsAndStatus(@Param("jobIds") List<Long> jobIds, @Param("status") Application.ApplicationStatus status);
    
    // Fixed query using createdAt instead of appliedAt
    @Query("SELECT COUNT(a) FROM Application a WHERE a.job.id IN :jobIds AND a.createdAt >= :date AND a.deleted = false")
    Long countApplicationsByJobsAndDate(@Param("jobIds") List<Long> jobIds, @Param("date") LocalDateTime date);
    
    @Query("SELECT COUNT(a) FROM Application a WHERE a.jobSeeker.id = :jobSeekerId AND a.status = :status AND a.deleted = false")
    Long countApplicationsByJobSeekerAndStatus(@Param("jobSeekerId") Long jobSeekerId, @Param("status") Application.ApplicationStatus status);
    
    // Fixed query using createdAt instead of appliedAt
    @Query("SELECT COUNT(a) FROM Application a WHERE a.jobSeeker.id = :jobSeekerId AND a.createdAt >= :date AND a.deleted = false")
    Long countApplicationsByJobSeekerAndDate(@Param("jobSeekerId") Long jobSeekerId, @Param("date") LocalDateTime date);
    
    @Query("SELECT a.status, COUNT(a) FROM Application a WHERE a.deleted = false GROUP BY a.status")
    List<Object[]> countByStatus();
    
    @Query("SELECT COUNT(a) FROM Application a WHERE a.createdAt >= :date AND a.deleted = false")
    Long countApplicationsCreatedAfter(@Param("date") LocalDateTime date);
}
