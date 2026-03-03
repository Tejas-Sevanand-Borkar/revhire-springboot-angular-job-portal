import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiredRoles = route.data['roles'] as string[];
    console.log('🔍 RoleGuard - Checking access to:', state.url);
    console.log('🔍 RoleGuard - Required roles:', requiredRoles);
    console.log('🔍 RoleGuard - Query params:', route.queryParams);
    
    // TEMPORARY: Allow ALL routes for debugging - remove authentication check entirely
    console.log('🔍 RoleGuard - TEMPORARY BYPASS: Allowing all access for debugging');
    return true;
    
    // Check for bypass parameter (temporary for debugging)
    if (route.queryParams['bypass'] === 'true' || route.queryParams['force'] === 'true') {
      console.log('🔍 RoleGuard - Bypass detected, allowing access');
      return true;
    }
    
    // TEMPORARY: Allow all employer routes for debugging
    if (state.url.includes('/employer/')) {
      console.log('🔍 RoleGuard - Employer route detected, allowing access for debugging');
      return true;
    }
    
    console.log('🔍 RoleGuard - Is logged in:', this.authService.isLoggedIn());
    console.log('🔍 RoleGuard - Current user:', this.authService.getCurrentUser());
    console.log('🔍 RoleGuard - User role:', this.authService.getUserRole());
    
    if (!this.authService.isLoggedIn()) {
      console.log('🔍 RoleGuard - User not logged in, redirecting to login');
      this.router.navigate(['/auth/login']);
      return false;
    }

    if (this.authService.hasRole(requiredRoles)) {
      console.log('🔍 RoleGuard - User has required role, allowing access');
      return true;
    }

    console.log('🔍 RoleGuard - User does not have required role, redirecting to login');
    this.router.navigate(['/auth/login']);
    return false;
  }
}
