import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: any = null;
  isMenuOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authService.logout();
  }

  navigateToDashboard(): void {
    if (this.authService.isEmployer()) {
      this.router.navigate(['/employer/dashboard']);
    } else if (this.authService.isSeeker()) {
      this.router.navigate(['/seeker/dashboard']);
    }
  }

  get isEmployer(): boolean {
    return this.authService.isEmployer();
  }

  get isSeeker(): boolean {
    return this.authService.isSeeker();
  }

  isMobileView(): boolean {
    return window.innerWidth <= 768;
  }
}
