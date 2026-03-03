package com.revhire.repository;

import com.revhire.entity.EmployerProfile;
import com.revhire.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployerProfileRepository extends JpaRepository<EmployerProfile, Long> {
    
    Optional<EmployerProfile> findByUserId(Long userId);
    
    @Query("SELECT ep FROM EmployerProfile ep WHERE ep.user.id = :userId AND ep.deleted = false")
    Optional<EmployerProfile> findActiveProfileByUserId(@Param("userId") Long userId);
    
    @Query("SELECT ep FROM EmployerProfile ep WHERE ep.user = :user AND ep.deleted = false")
    Optional<EmployerProfile> findByUserAndDeletedFalse(@Param("user") User user);
    
    @Query("SELECT ep FROM EmployerProfile ep WHERE ep.user.id = :userId AND ep.deleted = false")
    Optional<EmployerProfile> findByUserIdAndDeletedFalse(@Param("userId") Long userId);
    
    @Query("SELECT ep FROM EmployerProfile ep WHERE ep.deleted = false")
    List<EmployerProfile> findAllActiveProfiles();
    
    @Query("SELECT ep FROM EmployerProfile ep WHERE ep.deleted = false")
    List<EmployerProfile> findAllByDeletedFalse(Pageable pageable);
    
    @Query("SELECT ep FROM EmployerProfile ep WHERE " +
           "ep.deleted = false AND " +
           "(LOWER(ep.companyName) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(ep.industry) LIKE LOWER(CONCAT('%', :keyword, '%')))")
    List<EmployerProfile> searchActiveProfiles(@Param("keyword") String keyword);
    
    @Query("SELECT ep FROM EmployerProfile ep WHERE " +
           "ep.deleted = false AND " +
           "ep.industry = :industry")
    List<EmployerProfile> findByIndustry(@Param("industry") String industry);
    
    @Query("SELECT ep FROM EmployerProfile ep WHERE " +
           "ep.deleted = false AND " +
           "LOWER(ep.companyName) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<EmployerProfile> findByCompanyNameContainingIgnoreCaseAndDeletedFalse(@Param("name") String name, Pageable pageable);
    
    @Query("SELECT ep FROM EmployerProfile ep WHERE " +
           "ep.deleted = false AND " +
           "ep.industry = :industry")
    List<EmployerProfile> findByIndustryAndDeletedFalse(@Param("industry") String industry, Pageable pageable);
    
    @Query("SELECT ep FROM EmployerProfile ep WHERE " +
           "ep.deleted = false AND " +
           "LOWER(ep.companyName) LIKE LOWER(CONCAT('%', :name, '%')) AND " +
           "ep.industry = :industry")
    List<EmployerProfile> findByCompanyNameContainingIgnoreCaseAndIndustryAndDeletedFalse(@Param("name") String name, @Param("industry") String industry, Pageable pageable);
}
