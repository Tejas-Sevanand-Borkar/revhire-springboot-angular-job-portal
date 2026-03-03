package com.revhire.controller;

import com.revhire.service.FileUploadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/public/files")
@RequiredArgsConstructor
@Slf4j
public class PublicFileController {
    
    private final FileUploadService fileUploadService;
    
    @GetMapping("/download/**")
    public ResponseEntity<Resource> downloadFile(HttpServletRequest request) {
        try {
            String requestURI = request.getRequestURI();
            // Extract the file path after /api/public/files/download/
            String filePath = requestURI.substring("/api/public/files/download/".length());
            
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
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Content-Type, Authorization")
                    .body(resource);
                    
        } catch (Exception e) {
            log.error("Error downloading file", e);
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Error downloading file: " + e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }
}
