package com.revhire.repository;

import com.revhire.entity.JobSeekerProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JobSeekerProfileRepository extends JpaRepository<JobSeekerProfile, Long> {
    
    Optional<JobSeekerProfile> findByUserId(Long userId);
    
    @Query("SELECT jsp FROM JobSeekerProfile jsp WHERE jsp.user.id = :userId AND jsp.deleted = false")
    Optional<JobSeekerProfile> findActiveProfileByUserId(@Param("userId") Long userId);
    
    @Query("SELECT jsp FROM JobSeekerProfile jsp WHERE jsp.user.id = :userId AND jsp.deleted = false")
    Optional<JobSeekerProfile> findByUserIdAndDeletedFalse(@Param("userId") Long userId);
    
    @Query("SELECT jsp FROM JobSeekerProfile jsp WHERE jsp.id = :id AND jsp.deleted = false")
    Optional<JobSeekerProfile> findByIdAndDeletedFalse(@Param("id") Long id);
    
    @Query("SELECT jsp FROM JobSeekerProfile jsp WHERE jsp.deleted = false")
    List<JobSeekerProfile> findAllByDeletedFalse();
    
    @Query("SELECT jsp FROM JobSeekerProfile jsp WHERE jsp.deleted = false")
    List<JobSeekerProfile> findAllActiveProfiles();
    
    @Query("SELECT jsp FROM JobSeekerProfile jsp WHERE " +
           "jsp.deleted = false AND " +
           "(LOWER(jsp.firstName) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(jsp.lastName) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(jsp.skills) LIKE LOWER(CONCAT('%', :keyword, '%')))")
    List<JobSeekerProfile> searchActiveProfiles(@Param("keyword") String keyword);
    
    @Query("SELECT jsp FROM JobSeekerProfile jsp WHERE " +
           "jsp.deleted = false AND " +
           "jsp.experienceYears BETWEEN :minExp AND :maxExp")
    List<JobSeekerProfile> findByExperienceRange(@Param("minExp") Integer minExp, @Param("maxExp") Integer maxExp);
    
    @Query("SELECT jsp FROM JobSeekerProfile jsp WHERE " +
           "jsp.deleted = false AND " +
           "jsp.expectedSalaryMin <= :maxSalary AND " +
           "jsp.expectedSalaryMax >= :minSalary")
    List<JobSeekerProfile> findBySalaryRange(@Param("minSalary") Integer minSalary, @Param("maxSalary") Integer maxSalary);
    
    @Query("SELECT COUNT(jsp) > 0 FROM JobSeekerProfile jsp WHERE jsp.user.id = :userId AND jsp.deleted = false")
    boolean existsByUserIdAndDeletedFalse(@Param("userId") Long userId);
}
