import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, retry } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SavedJobService {
  private readonly API_URL = 'http://localhost:8080/api/saved-jobs';

  constructor(private http: HttpClient) {}

  saveJob(jobId: number): Observable<void> {
    console.log(`Attempting to save job ${jobId}`);
    return this.http.post<void>(`${this.API_URL}/${jobId}`, {}).pipe(
      timeout(10000),
      catchError(this.handleError)
    );
  }

  unsaveJob(jobId: number): Observable<void> {
    console.log(`Attempting to unsave job ${jobId}`);
    return this.http.delete<void>(`${this.API_URL}/${jobId}`).pipe(
      timeout(10000),
      catchError(this.handleError)
    );
  }

  getSavedJobs(): Observable<any[]> {
    console.log('Fetching saved jobs...');
    return this.http.get<any[]>(`${this.API_URL}`).pipe(
      timeout(10000),
      catchError(this.handleError)
    );
  }

  checkIfJobSaved(jobId: number): Observable<{ saved: boolean }> {
    console.log(`Checking if job ${jobId} is saved`);
    return this.http.get<{ saved: boolean }>(`${this.API_URL}/${jobId}/check`).pipe(
      timeout(10000),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('SavedJobService Error:', error);
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => error);
  }
}
