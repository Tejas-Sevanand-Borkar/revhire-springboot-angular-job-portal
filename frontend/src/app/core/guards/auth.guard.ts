import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('🔍 AuthGuard - Checking access to:', state.url);
    
    // TEMPORARY: Allow ALL routes for debugging - remove authentication check entirely
    console.log('🔍 AuthGuard - TEMPORARY BYPASS: Allowing all access for debugging');
    return true;
    
    // TEMPORARY: Allow all employer routes for debugging
    if (state.url.includes('/employer/')) {
      console.log('🔍 AuthGuard - Employer route detected, allowing access for debugging');
      return true;
    }
    
    if (this.authService.isLoggedIn()) {
      console.log('🔍 AuthGuard - User is logged in, allowing access');
      return true;
    } else {
      console.log('🔍 AuthGuard - User not logged in, redirecting to login');
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
