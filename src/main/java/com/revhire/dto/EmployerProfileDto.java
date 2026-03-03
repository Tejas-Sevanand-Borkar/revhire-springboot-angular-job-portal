package com.revhire.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class EmployerProfileDto {
    private Long id;
    private Long userId;
    private String companyName;
    private String description;
    private String industry;
    private String companySize;
    private String website;
    private String phoneNumber;
    private String address;
    private String logoPath;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
