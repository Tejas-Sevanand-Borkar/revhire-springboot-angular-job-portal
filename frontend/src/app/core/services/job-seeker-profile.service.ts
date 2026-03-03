import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobSeekerProfile } from '../models/job-seeker-profile.model';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerProfileService {
  private readonly API_URL = 'http://localhost:8080/api/job-seeker-profiles';

  constructor(private http: HttpClient) {}

  getProfileByUserId(userId: number): Observable<JobSeekerProfile> {
    return this.http.get<JobSeekerProfile>(`${this.API_URL}/user/${userId}`);
  }

  createProfile(profile: JobSeekerProfile): Observable<JobSeekerProfile> {
    return this.http.post<JobSeekerProfile>(this.API_URL, profile);
  }

  updateProfile(id: number, profile: Partial<JobSeekerProfile>): Observable<JobSeekerProfile> {
    return this.http.put<JobSeekerProfile>(`${this.API_URL}/${id}`, profile);
  }

  deleteProfile(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  uploadResume(file: File): Observable<{ resumePath: string; fileName: string }> {
    const formData = new FormData();
    formData.append('resume', file);
    return this.http.post<{ resumePath: string; fileName: string }>(`${this.API_URL}/upload-resume`, formData);
  }

  uploadProfilePicture(file: File): Observable<{ profilePicture: string }> {
    const formData = new FormData();
    formData.append('profilePicture', file);
    return this.http.post<{ profilePicture: string }>(`${this.API_URL}/upload-profile-picture`, formData);
  }

  deleteResume(): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/resume`);
  }

  deleteProfilePicture(): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/profile-picture`);
  }
}
