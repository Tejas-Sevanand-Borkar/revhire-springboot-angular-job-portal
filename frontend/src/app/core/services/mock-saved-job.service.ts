import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockSavedJobService {
  private mockSavedJobs: any[] = [];

  constructor() {
    // Initialize with some mock data for testing
    this.mockSavedJobs = [
      {
        id: 1,
        createdAt: new Date().toISOString(),
        job: {
          id: 1,
          title: 'Senior Frontend Developer',
          company: 'Tech Corp',
          location: 'San Francisco, CA',
          jobType: 'FULL_TIME',
          workLocation: 'REMOTE',
          salaryMin: 120000,
          salaryMax: 180000,
          description: 'We are looking for an experienced frontend developer...',
          createdAt: new Date(Date.now() - 86400000).toISOString() // 1 day ago
        }
      },
      {
        id: 2,
        createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        job: {
          id: 2,
          title: 'Full Stack Engineer',
          company: 'StartupXYZ',
          location: 'New York, NY',
          jobType: 'FULL_TIME',
          workLocation: 'HYBRID',
          salaryMin: 100000,
          salaryMax: 150000,
          description: 'Join our team as a full stack engineer...',
          createdAt: new Date(Date.now() - 259200000).toISOString() // 3 days ago
        }
      }
    ];
  }

  saveJob(jobId: number): Observable<void> {
    console.log(`Mock: Saving job ${jobId}`);
    // Check if already saved
    const exists = this.mockSavedJobs.some(sj => sj.job.id === jobId);
    if (exists) {
      return of(void 0); // Simulate success
    }
    
    // Add new saved job
    const newSavedJob = {
      id: this.mockSavedJobs.length + 1,
      createdAt: new Date().toISOString(),
      job: {
        id: jobId,
        title: `Mock Job ${jobId}`,
        company: 'Mock Company',
        location: 'Mock Location',
        jobType: 'FULL_TIME',
        workLocation: 'REMOTE',
        salaryMin: 80000,
        salaryMax: 120000,
        description: 'This is a mock job description for testing purposes.',
        createdAt: new Date().toISOString()
      }
    };
    
    this.mockSavedJobs.push(newSavedJob);
    return of(void 0);
  }

  unsaveJob(jobId: number): Observable<void> {
    console.log(`Mock: Unsaving job ${jobId}`);
    this.mockSavedJobs = this.mockSavedJobs.filter(sj => sj.job.id !== jobId);
    return of(void 0);
  }

  getSavedJobs(): Observable<any[]> {
    console.log('Mock: Returning saved jobs', this.mockSavedJobs);
    return of(this.mockSavedJobs);
  }

  checkIfJobSaved(jobId: number): Observable<{ saved: boolean }> {
    const isSaved = this.mockSavedJobs.some(sj => sj.job.id === jobId);
    console.log(`Mock: Job ${jobId} saved status: ${isSaved}`);
    return of({ saved: isSaved });
  }
}
