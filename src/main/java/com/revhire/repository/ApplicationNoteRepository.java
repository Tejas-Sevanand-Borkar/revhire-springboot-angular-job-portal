package com.revhire.repository;

import com.revhire.entity.ApplicationNote;
import com.revhire.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationNoteRepository extends JpaRepository<ApplicationNote, Long> {
    
    List<ApplicationNote> findByApplicationOrderByCreatedAtDesc(Application application);
    
    @Query("SELECT an FROM ApplicationNote an WHERE an.application.id = :applicationId ORDER BY an.createdAt DESC")
    List<ApplicationNote> findByApplicationIdOrderByCreatedAtDesc(@Param("applicationId") Long applicationId);
    
    @Query("SELECT COUNT(an) FROM ApplicationNote an WHERE an.application.id = :applicationId")
    long countByApplicationId(@Param("applicationId") Long applicationId);
}
