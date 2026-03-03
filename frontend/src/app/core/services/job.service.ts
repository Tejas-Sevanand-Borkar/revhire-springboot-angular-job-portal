import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  description: string;
  requirements?: string;
  responsibilities?: string;
  skillsRequired?: string;
  experienceRequired?: number;
  educationRequired?: string;
  salaryMin?: number;
  salaryMax?: number;
  jobType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP' | 'FREELANCE';
  workLocation: 'ON_SITE' | 'REMOTE' | 'HYBRID';
  location: string;
  deleted: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  employerId: number;
  employerName?: string;
  deadline?: string;
  numberOfOpenings?: number;
  company?: string;
  benefits?: string;
  isSaved?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private readonly API_URL = 'http://localhost:8080/api/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.API_URL}`);
  }

  getAllActiveJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.API_URL}`);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.API_URL}/${id}`);
  }

  createJob(job: Omit<Job, 'id' | 'createdAt' | 'employerId'>): Observable<Job> {
    return this.http.post<Job>(this.API_URL, job);
  }

  updateJob(id: number, job: Partial<Job>): Observable<Job> {
    return this.http.put<Job>(`${this.API_URL}/${id}`, job);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  toggleJobStatus(id: number): Observable<Job> {
    return this.http.patch<Job>(`${this.API_URL}/${id}/toggle-status`, {});
  }

  searchJobs(keyword: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.API_URL}/search?keyword=${keyword}`);
  }

  getJobsByLocation(location: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.API_URL}/location/${location}`);
  }

  getJobsByType(jobType: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.API_URL}/type/${jobType}`);
  }

  getJobsByWorkLocation(workLocation: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.API_URL}/work-location/${workLocation}`);
  }

  getEmployerJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.API_URL}/employer`);
  }

  getJobStatistics(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/employer/stats`);
  }

  getJobsByHighestSalary(limit?: number): Observable<Job[]> {
    const url = limit ? `${this.API_URL}/highest-salary?limit=${limit}` : `${this.API_URL}/highest-salary`;
    return this.http.get<Job[]>(url);
  }

  createJobFromDialog(jobData: any): Observable<Job> {
    const jobPayload = {
      title: jobData.title,
      description: jobData.description,
      requirements: jobData.requirements,
      responsibilities: jobData.responsibilities || '',
      skillsRequired: jobData.skillsRequired || '',
      experienceRequired: jobData.experienceRequired || 0,
      educationRequired: jobData.educationRequired || '',
      salaryMin: jobData.salaryMin || 0,
      salaryMax: jobData.salaryMax || 0,
      jobType: jobData.jobType,
      workLocation: jobData.workLocation,
      location: jobData.location,
      company: jobData.company,
      deadline: jobData.deadline,
      numberOfOpenings: jobData.numberOfOpenings || 1,
      active: true,
      deleted: false
    };
    return this.http.post<Job>(this.API_URL, jobPayload);
  }
}
