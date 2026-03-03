package com.revhire.service;

import com.revhire.entity.ApplicationNote;
import com.revhire.entity.Application;
import com.revhire.entity.User;
import com.revhire.repository.ApplicationNoteRepository;
import com.revhire.repository.ApplicationRepository;
import com.revhire.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ApplicationNoteService {
    
    private final ApplicationNoteRepository applicationNoteRepository;
    private final ApplicationRepository applicationRepository;
    private final AuthService authService;
    
    @Transactional
    public ApplicationNote addNote(Long applicationId, String note) {
        log.info("Adding note to application {}", applicationId);
        
        User currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        Application application = applicationRepository.findById(applicationId)
            .orElseThrow(() -> new ResourceNotFoundException("Application not found"));
        
        // Verify the employer owns this application
        if (!application.getEmployer().getId().equals(currentUser.getId())) {
            throw new ResourceNotFoundException("Access denied");
        }
        
        ApplicationNote applicationNote = new ApplicationNote(note, application, currentUser);
        applicationNote = applicationNoteRepository.save(applicationNote);
        
        log.info("Note added successfully to application {}", applicationId);
        return applicationNote;
    }
    
    @Transactional(readOnly = true)
    public List<ApplicationNote> getApplicationNotes(Long applicationId) {
        User currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        Application application = applicationRepository.findById(applicationId)
            .orElseThrow(() -> new ResourceNotFoundException("Application not found"));
        
        // Verify the employer owns this application
        if (!application.getEmployer().getId().equals(currentUser.getId())) {
            throw new ResourceNotFoundException("Access denied");
        }
        
        return applicationNoteRepository.findByApplicationOrderByCreatedAtDesc(application);
    }
    
    @Transactional
    public void deleteNote(Long noteId) {
        log.info("Deleting note {}", noteId);
        
        User currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        ApplicationNote note = applicationNoteRepository.findById(noteId)
            .orElseThrow(() -> new ResourceNotFoundException("Note not found"));
        
        // Verify the employer owns this note
        if (!note.getEmployer().getId().equals(currentUser.getId())) {
            throw new ResourceNotFoundException("Access denied");
        }
        
        applicationNoteRepository.delete(note);
        log.info("Note {} deleted successfully", noteId);
    }
}
