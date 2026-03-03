import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface AuthResponse {
  token: string;
  type: string;
  userId: number;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/api/auth';
  private readonly TOKEN_KEY = 'revhire_token';
  private readonly USER_KEY = 'revhire_user';

  private currentUserSubject = new BehaviorSubject<AuthResponse | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const userStr = localStorage.getItem(this.USER_KEY);
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.currentUserSubject.next(user);
      } catch (error) {
        this.logout();
      }
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    console.log('Making login request to:', `${this.API_URL}/login`);
    console.log('Request payload:', credentials);
    return this.http.post<AuthResponse>(`${this.API_URL}/login`, credentials).pipe(
      map(response => {
        console.log('Login response mapped:', response);
        this.setSession(response);
        this.snackBar.open('Login successful!', 'Close', { duration: 3000 });
        return response;
      })
    );
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/register`, userData).pipe(
      tap(response => {
        this.setSession(response);
        this.snackBar.open('Registration successful!', 'Close', { duration: 3000 });
      })
    );
  }

  private setSession(authResponse: AuthResponse): void {
    localStorage.setItem(this.TOKEN_KEY, authResponse.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(authResponse));
    this.currentUserSubject.next(authResponse);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
    this.snackBar.open('Logged out successfully', 'Close', { duration: 3000 });
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser(): AuthResponse | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    const user = this.currentUserSubject.value;
    console.log('AuthService.isLoggedIn() called');
    console.log('AuthService - Token exists:', !!token);
    console.log('AuthService - User exists:', !!user);
    console.log('AuthService - User:', user);
    return !!token && !!this.currentUserSubject.value;
  }

  getUserRole(): string | null {
    const user = this.getCurrentUser();
    const role = user ? user.role : null;
    console.log('AuthService.getUserRole() called');
    console.log('AuthService - Role:', role);
    return role;
  }

  isEmployer(): boolean {
    return this.getUserRole() === 'EMPLOYER';
  }

  isSeeker(): boolean {
    return this.getUserRole() === 'SEEKER';
  }

  hasRole(requiredRoles: string[]): boolean {
    const userRole = this.getUserRole();
    const hasRole = userRole ? requiredRoles.includes(userRole) : false;
    console.log('AuthService.hasRole() called');
    console.log('AuthService - Required roles:', requiredRoles);
    console.log('AuthService - User role:', userRole);
    console.log('AuthService - Has role:', hasRole);
    return hasRole;
  }
}
