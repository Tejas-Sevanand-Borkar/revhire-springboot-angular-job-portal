package com.revhire.repository;

import com.revhire.entity.SavedJob;
import com.revhire.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SavedJobRepository extends JpaRepository<SavedJob, Long> {
    
    @Query("SELECT sj FROM SavedJob sj LEFT JOIN FETCH sj.job LEFT JOIN FETCH sj.jobSeeker WHERE sj.jobSeeker = :jobSeeker ORDER BY sj.createdAt DESC")
    List<SavedJob> findByJobSeekerOrderByCreatedAtDesc(@Param("jobSeeker") User jobSeeker);
    
    @Query("SELECT sj FROM SavedJob sj LEFT JOIN FETCH sj.job LEFT JOIN FETCH sj.jobSeeker WHERE sj.job.id = :jobId AND sj.jobSeeker = :jobSeeker")
    Optional<SavedJob> findByJobIdAndJobSeeker(@Param("jobId") Long jobId, @Param("jobSeeker") User jobSeeker);
    
    @Query("SELECT COUNT(sj) FROM SavedJob sj WHERE sj.job.id = :jobId")
    long countByJobId(@Param("jobId") Long jobId);
    
    @Query("SELECT COUNT(sj) FROM SavedJob sj WHERE sj.jobSeeker.id = :jobSeekerId")
    Long countByJobSeeker(@Param("jobSeekerId") Long jobSeekerId);
    
    void deleteByJobIdAndJobSeeker(Long jobId, User jobSeeker);
}
