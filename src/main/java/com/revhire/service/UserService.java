package com.revhire.service;

import com.revhire.entity.User;
import com.revhire.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService implements UserDetailsService {
    
    private final UserRepository userRepository;
    
    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findActiveUserByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
        
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                user.getEnabled(),
                true, true, true,
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()))
        );
    }
    
    @Transactional(readOnly = true)
    public User findByEmail(String email) {
        return userRepository.findActiveUserByEmail(email).orElse(null);
    }
    
    @Transactional(readOnly = true)
    public User findById(Long id) {
        return userRepository.findActiveUserById(id).orElse(null);
    }
    
    @Transactional
    public User save(User user) {
        return userRepository.save(user);
    }
    
    @Transactional(readOnly = true)
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
    
    @Transactional(readOnly = true)
    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated() && 
            !"anonymousUser".equals(authentication.getPrincipal())) {
            String email = authentication.getName();
            return findByEmail(email);
        }
        return null;
    }
    
    @Transactional(readOnly = true)
    public java.util.List<User> findActiveUsersByRole(com.revhire.entity.User.UserRole role) {
        return userRepository.findActiveUsersByRole(role);
    }
    
    @Transactional(readOnly = true)
    public List<User> findJobSeekersWhoSavedJob(Long jobId) {
        return userRepository.findJobSeekersWhoSavedJob(jobId);
    }
}
