import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application, ApplicationStats } from '../models/application.model';

export { Application, ApplicationStats } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private readonly API_URL = 'http://localhost:8080/api/applications';

  constructor(private http: HttpClient) {}

  getEmployerApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.API_URL}/employer`);
  }

  getApplicationById(id: number): Observable<Application> {
    return this.http.get<Application>(`${this.API_URL}/${id}`);
  }

  applyForJob(jobId: number, coverLetter?: string, resumePath?: string): Observable<Application> {
    const payload: any = { coverLetter };
    if (resumePath) {
      payload.resumePath = resumePath;
    }
    return this.http.post<Application>(`${this.API_URL}/apply/${jobId}`, payload);
  }

  applyWithResume(jobId: number, file: File, coverLetter?: string): Observable<Application> {
    const formData = new FormData();
    formData.append('file', file);
    if (coverLetter) {
      formData.append('coverLetter', coverLetter);
    }
    return this.http.post<Application>(`${this.API_URL}/apply-with-resume/${jobId}`, formData);
  }

  updateApplicationStatus(id: number, status: string, comment?: string): Observable<Application> {
    return this.http.put<Application>(`${this.API_URL}/${id}/status`, { status, comment });
  }

  bulkUpdateApplicationStatus(applicationIds: number[], status: string, comment?: string): Observable<Application[]> {
    return this.http.put<Application[]>(`${this.API_URL}/bulk-status`, { applicationIds, status, comment });
  }

  withdrawApplication(id: number, reason?: string): Observable<Application> {
    return this.http.patch<Application>(`${this.API_URL}/${id}/withdraw`, { reason });
  }

  getApplicationsByJob(jobId: number): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.API_URL}/job/${jobId}`);
  }

  getApplicationsByJobSeeker(jobSeekerId: number): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.API_URL}/seeker/${jobSeekerId}`);
  }

  getApplicationsByEmployer(employerId: number): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.API_URL}/employer/${employerId}`);
  }

  getAllApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.API_URL}`);
  }

  getApplicationStats(): Observable<ApplicationStats> {
    return this.http.get<ApplicationStats>(`${this.API_URL}/employer/stats`);
  }

  acceptApplication(id: number): Observable<Application> {
    return this.http.put<Application>(`${this.API_URL}/${id}/accept`, {});
  }

  rejectApplication(id: number, reason?: string): Observable<Application> {
    return this.http.put<Application>(`${this.API_URL}/${id}/reject`, { reason });
  }
}
