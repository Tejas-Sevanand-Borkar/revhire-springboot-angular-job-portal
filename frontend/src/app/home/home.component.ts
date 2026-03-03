import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="loading-container" *ngIf="isLoading">
      <mat-spinner></mat-spinner>
      <p>Loading... Redirecting to dashboard...</p>
    </div>
  `,
  styles: [`
    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
      gap: 16px;
    }
  `]
})
export class HomeComponent implements OnInit {
  isLoading = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('HomeComponent initialized');
    console.log('User logged in:', this.authService.isLoggedIn());
    console.log('User role:', this.authService.getUserRole());
    console.log('Is employer:', this.authService.isEmployer());
    console.log('Is seeker:', this.authService.isSeeker());
    
    this.redirectBasedOnRole();
  }

  private redirectBasedOnRole(): void {
    console.log('Starting role-based redirection');
    
    if (this.authService.isEmployer()) {
      console.log('Redirecting to employer dashboard');
      this.router.navigate(['/employer/dashboard']);
    } else if (this.authService.isSeeker()) {
      console.log('Redirecting to seeker dashboard');
      this.router.navigate(['/seeker/dashboard']);
    } else {
      console.log('User not authenticated, redirecting to login');
      this.router.navigate(['/auth/login']);
    }
  }
}
