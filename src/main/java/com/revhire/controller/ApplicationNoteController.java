package com.revhire.controller;

import com.revhire.entity.ApplicationNote;
import com.revhire.service.ApplicationNoteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/application-notes")
@RequiredArgsConstructor
@Slf4j
public class ApplicationNoteController {
    
    private final ApplicationNoteService applicationNoteService;
    
    @PostMapping("/application/{applicationId}")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<ApplicationNote> addNote(@PathVariable Long applicationId, @RequestBody String note) {
        log.info("Request to add note to application: {}", applicationId);
        ApplicationNote applicationNote = applicationNoteService.addNote(applicationId, note);
        return ResponseEntity.ok(applicationNote);
    }
    
    @GetMapping("/application/{applicationId}")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<List<ApplicationNote>> getApplicationNotes(@PathVariable Long applicationId) {
        log.info("Request to get notes for application: {}", applicationId);
        List<ApplicationNote> notes = applicationNoteService.getApplicationNotes(applicationId);
        return ResponseEntity.ok(notes);
    }
    
    @DeleteMapping("/{noteId}")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<Void> deleteNote(@PathVariable Long noteId) {
        log.info("Request to delete note: {}", noteId);
        applicationNoteService.deleteNote(noteId);
        return ResponseEntity.noContent().build();
    }
}
