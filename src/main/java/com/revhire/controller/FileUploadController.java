package com.revhire.controller;

import com.revhire.service.FileUploadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
@Slf4j
public class FileUploadController {
    
    private final FileUploadService fileUploadService;
    
    @PostMapping("/upload/resume")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<Map<String, String>> uploadResume(@RequestParam("file") MultipartFile file) {
        log.info("Uploading resume file: {}", file.getOriginalFilename());
        
        try {
            String filePath = fileUploadService.uploadFile(file, "resumes");
            
            Map<String, String> response = new HashMap<>();
            response.put("message", "File uploaded successfully");
            response.put("filePath", filePath);
            response.put("originalFilename", file.getOriginalFilename());
            
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            log.error("Failed to upload resume file", e);
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to upload file: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    @PostMapping("/upload/company-logo")
    @PreAuthorize("hasRole('EMPLOYER')")
    public ResponseEntity<Map<String, String>> uploadCompanyLogo(@RequestParam("file") MultipartFile file) {
        log.info("Uploading company logo: {}", file.getOriginalFilename());
        
        try {
            String filePath = fileUploadService.uploadFile(file, "logos");
            
            Map<String, String> response = new HashMap<>();
            response.put("message", "File uploaded successfully");
            response.put("filePath", filePath);
            response.put("originalFilename", file.getOriginalFilename());
            
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            log.error("Failed to upload company logo", e);
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to upload file: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    @DeleteMapping("/delete")
    @PreAuthorize("hasAnyRole('SEEKER', 'EMPLOYER')")
    public ResponseEntity<Map<String, String>> deleteFile(@RequestParam String filePath) {
        log.info("Deleting file: {}", filePath);
        
        try {
            fileUploadService.deleteFile(filePath);
            
            Map<String, String> response = new HashMap<>();
            response.put("message", "File deleted successfully");
            
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            log.error("Failed to delete file", e);
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to delete file: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    @PostMapping("/validate")
    public ResponseEntity<Map<String, Object>> validateFile(@RequestParam("file") MultipartFile file) {
        log.info("Validating file: {}", file.getOriginalFilename());
        
        Map<String, Object> response = new HashMap<>();
        response.put("filename", file.getOriginalFilename());
        response.put("size", file.getSize());
        response.put("contentType", file.getContentType());
        response.put("valid", fileUploadService.isValidFile(file));
        
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/download/**")
    public ResponseEntity<Resource> downloadFile(HttpServletRequest request) {
        try {
            String requestURI = request.getRequestURI();
            // Extract the file path after /api/files/download/
            String filePath = requestURI.substring("/api/files/download/".length());
            
            log.info("Downloading file: {} for user: {}", filePath, "anonymous");
            
            // Get the actual file path
            String fullPath = fileUploadService.getFilePath(filePath);
            Path path = Paths.get(fullPath);
            Resource resource = new FileSystemResource(path);
            
            if (!resource.exists() || !resource.isReadable()) {
                log.error("File not found or not readable: {}", fullPath);
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "File not found: " + filePath);
                errorResponse.put("debugPath", fullPath);
                return ResponseEntity.status(404).body(null);
            }
            
            // Determine content type
            String contentType = null;
            try {
                contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
            } catch (IOException ex) {
                log.info("Could not determine file type.");
            }
            
            if (contentType == null) {
                contentType = "application/octet-stream";
            }
            
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);
                    
        } catch (Exception e) {
            log.error("Error downloading file", e);
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Error downloading file: " + e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/public/download/**")
    public ResponseEntity<Resource> downloadFilePublic(HttpServletRequest request) {
        try {
            String requestURI = request.getRequestURI();
            // Extract the file path after /api/files/public/download/
            String filePath = requestURI.substring("/api/files/public/download/".length());
            
            log.info("Publicly downloading file: {}", filePath);
            
            // Get the actual file path
            String fullPath = fileUploadService.getFilePath(filePath);
            Path path = Paths.get(fullPath);
            Resource resource = new FileSystemResource(path);
            
            if (!resource.exists() || !resource.isReadable()) {
                log.error("File not found or not readable: {}", fullPath);
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "File not found: " + filePath);
                errorResponse.put("debugPath", fullPath);
                return ResponseEntity.status(404).body(null);
            }
            
            // Determine content type
            String contentType = null;
            try {
                contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
            } catch (IOException ex) {
                log.info("Could not determine file type.");
            }
            
            if (contentType == null) {
                contentType = "application/octet-stream";
            }
            
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);
                    
        } catch (Exception e) {
            log.error("Error downloading file", e);
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Error downloading file: " + e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }
}
