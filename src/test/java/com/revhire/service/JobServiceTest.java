package com.revhire.service;

import com.revhire.dto.JobDto;
import com.revhire.entity.Job;
import com.revhire.entity.User;
import com.revhire.exception.ResourceNotFoundException;
import com.revhire.repository.JobRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class JobServiceTest {
    
    @Mock
    private JobRepository jobRepository;
    
    @Mock
    private UserService userService;
    
    @Mock
    private NotificationService notificationService;
    
    @InjectMocks
    private JobService jobService;
    
    private User testEmployer;
    private Job testJob;
    private JobDto testJobDto;
    
    @Before
    public void setUp() {
        
        testEmployer = new User();
        testEmployer.setId(1L);
        testEmployer.setEmail("employer@test.com");
        testEmployer.setFirstName("Test");
        testEmployer.setLastName("Employer");
        testEmployer.setRole(User.UserRole.EMPLOYER);
        
        testJob = new Job();
        testJob.setId(1L);
        testJob.setTitle("Software Developer");
        testJob.setDescription("Test job description");
        testJob.setRequirements("Test requirements");
        testJob.setResponsibilities("Test responsibilities");
        testJob.setSkillsRequired("Java, Spring");
        testJob.setExperienceRequired(3);
        testJob.setSalaryMin(50000);
        testJob.setSalaryMax(80000);
        testJob.setJobType(Job.JobType.FULL_TIME);
        testJob.setWorkLocation(Job.WorkLocation.ON_SITE);
        testJob.setLocation("New York");
        testJob.setActive(true);
        testJob.setDeleted(false);
        testJob.setEmployer(testEmployer);
        
        testJobDto = new JobDto();
        testJobDto.setTitle("Software Developer");
        testJobDto.setDescription("Test job description");
        testJobDto.setRequirements("Test requirements");
        testJobDto.setResponsibilities("Test responsibilities");
        testJobDto.setSkillsRequired("Java, Spring");
        testJobDto.setExperienceRequired(3);
        testJobDto.setSalaryMin(50000);
        testJobDto.setSalaryMax(80000);
        testJobDto.setJobType(Job.JobType.FULL_TIME);
        testJobDto.setWorkLocation(Job.WorkLocation.ON_SITE);
        testJobDto.setLocation("New York");
    }
    
    @Test
    public void testCreateJob_Success() {
        // Arrange
        when(userService.getCurrentUser()).thenReturn(testEmployer);
        when(jobRepository.save(any(Job.class))).thenReturn(testJob);
        doNothing().when(notificationService).createJobPostedNotification(any(Job.class));
        
        // Act
        JobDto result = jobService.createJob(testJobDto);
        
        // Assert
        assertNotNull(result);
        assertEquals("Software Developer", result.getTitle());
        assertEquals("Test job description", result.getDescription());
        assertEquals(testEmployer.getId(), result.getEmployerId());
        
        verify(userService, times(1)).getCurrentUser();
        verify(jobRepository, times(1)).save(any(Job.class));
        verify(notificationService, times(1)).createJobPostedNotification(any(Job.class));
    }
    
    @Test(expected = ResourceNotFoundException.class)
    public void testCreateJob_UserNotFound() {
        // Arrange
        when(userService.getCurrentUser()).thenReturn(null);
        
        // Act & Assert
        jobService.createJob(testJobDto);
    }
    
    @Test
    public void testGetJobById_Success() {
        // Arrange
        when(jobRepository.findActiveJobById(1L)).thenReturn(Optional.of(testJob));
        
        // Act
        JobDto result = jobService.getJobById(1L);
        
        // Assert
        assertNotNull(result);
        assertEquals("Software Developer", result.getTitle());
        assertEquals(testEmployer.getId(), result.getEmployerId());
        
        verify(jobRepository, times(1)).findActiveJobById(1L);
    }
    
    @Test(expected = ResourceNotFoundException.class)
    public void testGetJobById_NotFound() {
        // Arrange
        when(jobRepository.findActiveJobById(1L)).thenReturn(Optional.empty());
        
        // Act & Assert
        jobService.getJobById(1L);
    }
    
    @Test
    public void testGetAllActiveJobs_Success() {
        // Arrange
        List<Job> jobs = Arrays.asList(testJob);
        when(jobRepository.findAllActiveJobs()).thenReturn(jobs);
        
        // Act
        List<JobDto> result = jobService.getAllActiveJobs();
        
        // Assert
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Software Developer", result.get(0).getTitle());
        
        verify(jobRepository, times(1)).findAllActiveJobs();
    }
    
    @Test
    public void testUpdateJob_Success() {
        // Arrange
        when(jobRepository.findActiveJobById(1L)).thenReturn(Optional.of(testJob));
        when(jobRepository.save(any(Job.class))).thenReturn(testJob);
        
        JobDto updateDto = new JobDto();
        updateDto.setTitle("Updated Software Developer");
        updateDto.setDescription("Updated description");
        
        // Act
        JobDto result = jobService.updateJob(1L, updateDto);
        
        // Assert
        assertNotNull(result);
        verify(jobRepository, times(1)).findActiveJobById(1L);
        verify(jobRepository, times(1)).save(any(Job.class));
    }
    
    @Test(expected = ResourceNotFoundException.class)
    public void testUpdateJob_NotFound() {
        // Arrange
        when(jobRepository.findActiveJobById(1L)).thenReturn(Optional.empty());
        
        // Act & Assert
        jobService.updateJob(1L, testJobDto);
    }
    
    @Test
    public void testDeleteJob_Success() {
        // Arrange
        when(jobRepository.findActiveJobById(1L)).thenReturn(Optional.of(testJob));
        when(jobRepository.save(any(Job.class))).thenReturn(testJob);
        
        // Act
        jobService.deleteJob(1L);
        
        // Assert
        verify(jobRepository, times(1)).findActiveJobById(1L);
        verify(jobRepository, times(1)).save(any(Job.class));
        assertTrue(testJob.getDeleted());
    }
    
    @Test(expected = ResourceNotFoundException.class)
    public void testDeleteJob_NotFound() {
        // Arrange
        when(jobRepository.findActiveJobById(1L)).thenReturn(Optional.empty());
        
        // Act & Assert
        jobService.deleteJob(1L);
    }
    
    @Test
    public void testToggleJobStatus_Success() {
        // Arrange
        when(jobRepository.findActiveJobById(1L)).thenReturn(Optional.of(testJob));
        when(jobRepository.save(any(Job.class))).thenReturn(testJob);
        
        boolean initialStatus = testJob.getActive();
        
        // Act
        jobService.toggleJobStatus(1L);
        
        // Assert
        verify(jobRepository, times(1)).findActiveJobById(1L);
        verify(jobRepository, times(1)).save(any(Job.class));
        assertNotEquals(initialStatus, testJob.getActive());
    }
    
    @Test
    public void testSearchJobs_Success() {
        // Arrange
        List<Job> jobs = Arrays.asList(testJob);
        when(jobRepository.searchActiveJobs("Java")).thenReturn(jobs);
        
        // Act
        List<JobDto> result = jobService.searchJobs("Java");
        
        // Assert
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Software Developer", result.get(0).getTitle());
        
        verify(jobRepository, times(1)).searchActiveJobs("Java");
    }
    
    @Test
    public void testGetJobsByEmployer_Success() {
        // Arrange
        List<Job> jobs = Arrays.asList(testJob);
        when(jobRepository.findActiveJobsByEmployer(1L)).thenReturn(jobs);
        
        // Act
        List<JobDto> result = jobService.getJobsByEmployer(1L);
        
        // Assert
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Software Developer", result.get(0).getTitle());
        
        verify(jobRepository, times(1)).findActiveJobsByEmployer(1L);
    }
}
