import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { JobService, Job } from '../../core/services/job.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  template: `
    <div class="container">
      <div class="header">
        <button mat-icon-button (click)="goBack()">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Post New Job</h1>
      </div>

      <div class="form-container">
        <form [formGroup]="jobForm" (ngSubmit)="onSubmit()">
          <mat-form-field>
            <mat-label>Job Title</mat-label>
            <input matInput formControlName="title" placeholder="e.g. Senior Software Engineer">
            <mat-error *ngIf="jobForm.get('title')?.hasError('required')">
              Job title is required
            </mat-error>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Company</mat-label>
            <input matInput formControlName="company" placeholder="e.g. Google, Microsoft, Amazon">
            <mat-error *ngIf="jobForm.get('company')?.hasError('required')">
              Company is required
            </mat-error>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Location</mat-label>
            <input matInput formControlName="location" placeholder="e.g. New York, NY">
            <mat-error *ngIf="jobForm.get('location')?.hasError('required')">
              Location is required
            </mat-error>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Job Type</mat-label>
            <mat-select formControlName="jobType">
              <mat-option value="FULL_TIME">Full Time</mat-option>
              <mat-option value="PART_TIME">Part Time</mat-option>
              <mat-option value="CONTRACT">Contract</mat-option>
              <mat-option value="INTERNSHIP">Internship</mat-option>
              <mat-option value="FREELANCE">Freelance</mat-option>
            </mat-select>
            <mat-error *ngIf="jobForm.get('jobType')?.hasError('required')">
              Job type is required
            </mat-error>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Work Location</mat-label>
            <mat-select formControlName="workLocation">
              <mat-option value="ON_SITE">On Site</mat-option>
              <mat-option value="REMOTE">Remote</mat-option>
              <mat-option value="HYBRID">Hybrid</mat-option>
            </mat-select>
            <mat-error *ngIf="jobForm.get('workLocation')?.hasError('required')">
              Work location is required
            </mat-error>
          </mat-form-field>

          <div class="salary-row">
            <mat-form-field>
              <mat-label>Min Salary (₹)</mat-label>
              <input matInput type="number" formControlName="salaryMin">
              <mat-error *ngIf="jobForm.get('salaryMin')?.hasError('min')">
                Minimum salary must be positive
              </mat-error>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Max Salary (₹)</mat-label>
              <input matInput type="number" formControlName="salaryMax">
              <mat-error *ngIf="jobForm.get('salaryMax')?.hasError('min')">
                Maximum salary must be positive
              </mat-error>
            </mat-form-field>
          </div>

          <mat-form-field>
            <mat-label>Job Description</mat-label>
            <textarea matInput formControlName="description" rows="6" 
                      placeholder="Describe role, responsibilities, and what you're looking for..."></textarea>
            <mat-error *ngIf="jobForm.get('description')?.hasError('required')">
              Job description is required
            </mat-error>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Skills Required</mat-label>
            <textarea matInput formControlName="skillsRequired" rows="3" 
                      placeholder="List specific skills required for this role..."></textarea>
            <mat-error *ngIf="jobForm.get('skillsRequired')?.hasError('required')">
              Skills are required
            </mat-error>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Education Required</mat-label>
            <input matInput formControlName="educationRequired" 
                   placeholder="e.g. Bachelor's degree in Computer Science">
          </mat-form-field>

          <div class="form-row">
            <mat-form-field>
              <mat-label>Application Deadline</mat-label>
              <input matInput [matDatepicker]="picker" formControlName="deadline">
              <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Number of Openings</mat-label>
              <input matInput type="number" formControlName="numberOfOpenings">
              <mat-error *ngIf="jobForm.get('numberOfOpenings')?.hasError('min')">
                Must be at least 1
              </mat-error>
            </mat-form-field>
          </div>

          <mat-form-field>
            <mat-label>Experience Required (years)</mat-label>
            <input matInput type="number" formControlName="experienceRequired" 
                   placeholder="e.g. 2">
            <mat-error *ngIf="jobForm.get('experienceRequired')?.hasError('min')">
              Experience must be positive
            </mat-error>
          </mat-form-field>

          <div class="actions">
            <button mat-button (click)="goBack()">Cancel</button>
            <button mat-raised-button color="primary" type="submit" 
                    [disabled]="!jobForm.valid || isSubmitting">
              <mat-icon *ngIf="isSubmitting" class="spinner">hourglass_empty</mat-icon>
              {{isSubmitting ? 'Posting...' : 'Post Job'}}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
    }

    .form-container {
      padding: 24px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .salary-row {
      display: flex;
      gap: 16px;
    }

    .salary-row mat-form-field {
      flex: 1;
    }

    .form-row {
      display: flex;
      gap: 16px;
    }

    .form-row mat-form-field {
      flex: 1;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 32px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
    }

    .spinner {
      animation: spin 1s linear infinite;
      margin-right: 8px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    mat-form-field {
      margin-bottom: 16px;
      width: 100%;
    }
  `]
})
export class CreateJobComponent implements OnInit {
  jobForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private router: Router,
    private snackBar: MatSnackBar,
    private notificationService: NotificationService
  ) {
    this.jobForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      company: ['', [Validators.required]],
      description: ['', [Validators.required]],
      skillsRequired: ['', [Validators.required]],
      educationRequired: [''],
      deadline: [null],
      numberOfOpenings: ['', [Validators.min(1)]],
      experienceRequired: ['', [Validators.min(0)]],
      salaryMin: ['', [Validators.min(0)]],
      salaryMax: ['', [Validators.min(0)]],
      jobType: ['', [Validators.required]],
      workLocation: ['', [Validators.required]],
      location: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Debug: Log initial form values
    console.log('Initial form values:', this.jobForm.value);
    
    // Subscribe to value changes for debugging
    this.jobForm.valueChanges.subscribe(values => {
      console.log('Form values changed:', values);
    });
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      this.isSubmitting = true;
      
      const jobData = this.jobForm.value;
      
      this.jobService.createJobFromDialog(jobData).subscribe({
        next: (newJob) => {
          console.log('Job created successfully:', newJob);
          
          // Create notification for successful job posting
          this.createJobPostedNotification(newJob.title, newJob.id);
          
          this.snackBar.open('Job posted successfully!', 'Close', { duration: 3000 });
          this.router.navigate(['/employer/jobs']);
        },
        error: (error) => {
          console.error('Error creating job:', error);
          this.snackBar.open('Error posting job. Please try again.', 'Close', { duration: 3000 });
          this.isSubmitting = false;
        }
      });
    }
  }

  createJobPostedNotification(jobTitle: string, jobId: number): void {
    const notification = {
      id: 0, // Will be generated by backend
      userId: 0, // Will be set by backend based on logged-in user
      type: 'NEW_JOB' as const,
      title: 'Job Posted Successfully',
      message: `Your job "${jobTitle}" has been posted successfully and is now live.`,
      isRead: false,
      createdAt: new Date().toISOString(),
      relatedJobId: jobId
    };

    this.notificationService.createNotification(notification).subscribe({
      next: () => {
        console.log('Job posted notification created');
        // Update unread count
        this.notificationService.getUnreadCount().subscribe({
          next: (response) => {
            this.notificationService.updateUnreadCount(response.count);
          }
        });
      },
      error: (error) => {
        console.error('Error creating job posted notification:', error);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/employer']);
  }
}
