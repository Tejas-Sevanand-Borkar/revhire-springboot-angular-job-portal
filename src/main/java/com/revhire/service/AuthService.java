package com.revhire.service;

import com.revhire.dto.AuthResponse;
import com.revhire.dto.LoginRequest;
import com.revhire.dto.RegisterRequest;
import com.revhire.entity.User;
import com.revhire.exception.ResourceAlreadyExistsException;
import com.revhire.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {
    
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final com.revhire.security.JwtTokenProvider jwtTokenProvider;
    
    @Transactional
    public AuthResponse register(RegisterRequest registerRequest) {
        log.info("Registering new user with email: {}", registerRequest.getEmail());
        
        if (userService.existsByEmail(registerRequest.getEmail())) {
            throw new ResourceAlreadyExistsException("Email already exists");
        }
        
        User.UserRole role;
        try {
            role = User.UserRole.valueOf(registerRequest.getRole().toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid role. Must be SEEKER or EMPLOYER");
        }
        
        User user = new User();
        user.setEmail(registerRequest.getEmail());
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setRole(role);
        user.setEnabled(true);
        user.setDeleted(false);
        
        user = userService.save(user);
        
        // Create authentication for the newly registered user
        Authentication authentication = new UsernamePasswordAuthenticationToken(
            user.getEmail(),
            null,
            Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()))
        );
        
        String token = jwtTokenProvider.generateToken(authentication);
        
        log.info("User registered successfully with email: {}", user.getEmail());
        
        return new AuthResponse(
            token,
            "Bearer",
            user.getId(),
            user.getEmail(),
            user.getRole().name(),
            user.getFirstName(),
            user.getLastName()
        );
    }
    
    @Transactional(readOnly = true)
    public AuthResponse login(LoginRequest loginRequest) {
        log.info("Authenticating user with email: {}", loginRequest.getEmail());
        
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                loginRequest.getEmail(),
                loginRequest.getPassword()
            )
        );
        
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        String token = jwtTokenProvider.generateToken(authentication);
        
        User user = userService.findByEmail(loginRequest.getEmail());
        if (user == null) {
            throw new ResourceNotFoundException("User not found");
        }
        
        log.info("User authenticated successfully with email: {}", user.getEmail());
        
        return new AuthResponse(
            token,
            "Bearer",
            user.getId(),
            user.getEmail(),
            user.getRole().name(),
            user.getFirstName(),
            user.getLastName()
        );
    }
    
    @Transactional(readOnly = true)
    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }
        
        String email = authentication.getName();
        return userService.findByEmail(email);
    }
    
    @Transactional(readOnly = true)
    public boolean isCurrentUser(Long userId) {
        User currentUser = getCurrentUser();
        return currentUser != null && currentUser.getId().equals(userId);
    }
}
