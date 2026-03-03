import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmployerProfile {
  id: number;
  userId: number;
  companyName: string;
  description?: string;
  industry?: string;
  companySize?: string;
  website?: string;
  phoneNumber?: string;
  address?: string;
  logoPath?: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CompanyJob {
  id: number;
  title: string;
  location: string;
  salary: string;
  type: string;
  postedDate: string;
  applications: number;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {
  private readonly API_URL = 'http://localhost:8080/api/companies';

  constructor(private http: HttpClient) {}

  getCurrentEmployerProfile(): Observable<EmployerProfile> {
    return this.http.get<EmployerProfile>(`${this.API_URL}/profile`);
  }

  getEmployerProfile(employerId: number): Observable<EmployerProfile> {
    return this.http.get<EmployerProfile>(`${this.API_URL}/${employerId}`);
  }

  getPublicEmployerProfile(employerId: number): Observable<EmployerProfile> {
    return this.http.get<EmployerProfile>(`${this.API_URL}/public/${employerId}`);
  }

  updateEmployerProfile(profile: Partial<EmployerProfile>): Observable<EmployerProfile> {
    return this.http.put<EmployerProfile>(`${this.API_URL}/profile`, profile);
  }

  getCompanyJobs(employerId: number): Observable<CompanyJob[]> {
    return this.http.get<CompanyJob[]>(`${this.API_URL}/${employerId}/jobs`);
  }

  searchCompanies(params: {
    name?: string;
    industry?: string;
    page?: number;
    size?: number;
  }): Observable<EmployerProfile[]> {
    const queryParams = new URLSearchParams();
    
    if (params.name) queryParams.append('name', params.name);
    if (params.industry) queryParams.append('industry', params.industry);
    queryParams.append('page', (params.page || 0).toString());
    queryParams.append('size', (params.size || 10).toString());

    return this.http.get<EmployerProfile[]>(`${this.API_URL}/search?${queryParams}`);
  }
}
