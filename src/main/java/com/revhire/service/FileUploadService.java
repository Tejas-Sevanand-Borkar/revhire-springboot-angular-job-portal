package com.revhire.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@Slf4j
public class FileUploadService {
    
    @Value("${file.upload-dir:uploads}")
    private String uploadDir;
    
    @Value("${file.max-size:2097152}") // 2MB in bytes
    private long maxFileSize;
    
    private static final String[] ALLOWED_EXTENSIONS = {".pdf", ".docx", ".doc"};
    
    public String uploadFile(MultipartFile file, String subDirectory) throws IOException {
        log.info("Uploading file: {}", file.getOriginalFilename());
        
        // Validate file
        validateFile(file);
        
        // Create upload directory if it doesn't exist
        Path uploadPath = Paths.get(uploadDir, subDirectory);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        
        // Generate unique filename
        String originalFilename = file.getOriginalFilename();
        String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        String newFilename = UUID.randomUUID().toString() + extension;
        
        // Save file
        Path filePath = uploadPath.resolve(newFilename);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
        
        log.info("File uploaded successfully: {}", filePath);
        return filePath.toString();
    }
    
    public void deleteFile(String filePath) throws IOException {
        log.info("Deleting file: {}", filePath);
        
        Path path = Paths.get(filePath);
        if (Files.exists(path)) {
            Files.delete(path);
            log.info("File deleted successfully: {}", filePath);
        }
    }
    
    private void validateFile(MultipartFile file) throws IOException {
        // Check if file is empty
        if (file.isEmpty()) {
            throw new IOException("File is empty");
        }
        
        // Check file size
        if (file.getSize() > maxFileSize) {
            throw new IOException("File size exceeds maximum allowed size of " + maxFileSize + " bytes");
        }
        
        // Check file extension
        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null) {
            throw new IOException("Invalid filename");
        }
        
        boolean isValidExtension = false;
        for (String extension : ALLOWED_EXTENSIONS) {
            if (originalFilename.toLowerCase().endsWith(extension)) {
                isValidExtension = true;
                break;
            }
        }
        
        if (!isValidExtension) {
            throw new IOException("Invalid file extension. Allowed extensions: " + String.join(", ", ALLOWED_EXTENSIONS));
        }
    }
    
    public boolean isValidFile(MultipartFile file) {
        try {
            validateFile(file);
            return true;
        } catch (IOException e) {
            log.warn("File validation failed: {}", e.getMessage());
            return false;
        }
    }
    
    public String getFilePath(String relativePath) {
        // Convert relative path to absolute path
        // The relative path might be stored as "resumes/applications/resumes/filename.pdf"
        // or "uploads/resumes/applications/resumes/filename.pdf"
        log.info("Getting file path for relative path: {}", relativePath);
        
        if (relativePath.startsWith("uploads/")) {
            // Path already includes uploads/, return as is
            String fullPath = relativePath;
            log.info("Full path (already includes uploads): {}", fullPath);
            return fullPath;
        }
        
        // Check if the path already starts with "resumes/" and uploadDir ends with "/resumes"
        // to avoid duplicate "resumes" in the path
        if (relativePath.startsWith("resumes/") && uploadDir.endsWith("/resumes")) {
            // Remove the leading "resumes/" from relativePath to avoid duplication
            String trimmedPath = relativePath.substring("resumes/".length());
            String fullPath = Paths.get(uploadDir, trimmedPath).toString();
            log.info("Full path (trimmed duplicate resumes): {}", fullPath);
            return fullPath;
        }
        
        // Path doesn't start with uploads/, prepend the upload directory
        String fullPath = Paths.get(uploadDir, relativePath).toString();
        log.info("Full path (prepended uploads): {}", fullPath);
        return fullPath;
    }
}
