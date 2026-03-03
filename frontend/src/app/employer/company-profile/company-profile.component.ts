import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyProfileService, EmployerProfile, CompanyJob } from '../../core/services/company-profile.service';
import { AuthService, AuthResponse } from '../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  profile: EmployerProfile | null = null;
  companyJobs: CompanyJob[] = [];
  isLoading = true;
  isOwnProfile = false;
  currentUser: AuthResponse | null = null;
  employerId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyProfileService: CompanyProfileService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    
    // Check if we're viewing our own profile or someone else's
    this.route.params.subscribe(params => {
      if (params['id']) {
        // Viewing someone else's profile
        this.employerId = +params['id'];
        this.isOwnProfile = false;
        this.loadPublicProfile(this.employerId);
      } else {
        // Viewing our own profile
        this.isOwnProfile = true;
        this.loadOwnProfile();
      }
    });
  }

  loadOwnProfile(): void {
    if (!this.currentUser) {
      this.snackBar.open('Please login to view your profile', 'Close', { duration: 3000 });
      this.router.navigate(['/auth/login']);
      return;
    }

    this.companyProfileService.getCurrentEmployerProfile().subscribe({
      next: (profile) => {
        this.profile = profile;
        this.employerId = profile.userId;
        this.loadCompanyJobs(profile.userId);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading profile:', error);
        this.snackBar.open('Failed to load profile', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  loadPublicProfile(employerId: number): void {
    this.companyProfileService.getPublicEmployerProfile(employerId).subscribe({
      next: (profile) => {
        this.profile = profile;
        this.loadCompanyJobs(employerId);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading profile:', error);
        this.snackBar.open('Company profile not found', 'Close', { duration: 3000 });
        this.router.navigate(['/']);
        this.isLoading = false;
      }
    });
  }

  loadCompanyJobs(employerId: number): void {
    this.companyProfileService.getCompanyJobs(employerId).subscribe({
      next: (jobs) => {
        this.companyJobs = jobs;
      },
      error: (error) => {
        console.error('Error loading company jobs:', error);
        // Don't show error for jobs, just continue with empty list
      }
    });
  }

  editProfile(): void {
    if (this.profile) {
      this.router.navigate(['/employer/profile/edit']);
    }
  }

  viewJobDetails(jobId: number): void {
    this.router.navigate(['/employer/jobs', jobId]);
  }

  formatCompanySize(size?: string): string {
    if (!size) return 'Company size not specified';
    
    const sizeMap: { [key: string]: string } = {
      'SMALL': '1-50 employees',
      'MEDIUM': '51-200 employees',
      'LARGE': '201-1000 employees',
      'ENTERPRISE': '1000+ employees'
    };
    
    return sizeMap[size] || size;
  }

  getLogoUrl(logoPath?: string): string {
    if (!logoPath) {
      return 'assets/images/company-placeholder.png';
    }
    return `http://localhost:8080/api/files/${logoPath}`;
  }

  getWebsiteUrl(website?: string): string {
    if (!website) return '#';
    
    if (!website.startsWith('http://') && !website.startsWith('https://')) {
      return `https://${website}`;
    }
    return website;
  }

  onImageError(event: any): void {
    event.target.src = 'assets/images/company-placeholder.png';
  }
}
