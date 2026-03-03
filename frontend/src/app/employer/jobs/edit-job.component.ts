import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { JobService, Job } from '../../core/services/job.service';

@Component({
  selector: 'app-edit-job',
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
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  template: `
    <div class="container">
      <mat-toolbar class="edit-toolbar">
        <button mat-icon-button (click)="goBack()">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Edit Job</h1>
        <span class="spacer"></span>
        <button mat-raised-button color="primary" type="submit" 
                (click)="onSubmit()" 
                [disabled]="!jobForm.valid || isSubmitting">
          <mat-icon *ngIf="isSubmitting" class="spinner">hourglass_empty</mat-icon>
          {{isSubmitting ? 'Updating...' : 'Update Job'}}
        </button>
      </mat-toolbar>

      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner diameter="40"></mat-spinner>
        <p>Loading job details...</p>
      </div>

      <div *ngIf="!isLoading" class="form-container">
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
              {{isSubmitting ? 'Updating...' : 'Update Job'}}
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

    .edit-toolbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      margin-bottom: 24px;
      border-radius: 8px;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
      gap: 16px;
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
export class EditJobComponent implements OnInit {
  jobForm: FormGroup;
  isSubmitting = false;
  isLoading = true;
  jobId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.jobForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required]],
      skillsRequired: ['', [Validators.required]],
      educationRequired: [''],
      deadline: [null],
      numberOfOpenings: [1, [Validators.min(1)]],
      experienceRequired: [0, [Validators.min(0)]],
      salaryMin: [null, [Validators.min(0)]],
      salaryMax: [null, [Validators.min(0)]],
      jobType: ['', [Validators.required]],
      workLocation: ['', [Validators.required]],
      location: ['', [Validators.required]],
      company: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jobId = +id;
      this.loadJobDetails(this.jobId);
    } else {
      this.snackBar.open('Invalid job ID', 'Close', { duration: 3000 });
      this.goBack();
    }
  }

  loadJobDetails(jobId: number): void {
    this.jobService.getJobById(jobId).subscribe({
      next: (job) => {
        this.jobForm.patchValue({
          title: job.title,
          description: job.description,
          skillsRequired: job.skillsRequired,
          educationRequired: job.educationRequired,
          deadline: job.deadline ? new Date(job.deadline) : null,
          numberOfOpenings: job.numberOfOpenings,
          experienceRequired: job.experienceRequired,
          salaryMin: job.salaryMin,
          salaryMax: job.salaryMax,
          jobType: job.jobType,
          workLocation: job.workLocation,
          location: job.location,
          company: job.company
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading job details:', error);
        this.snackBar.open('Error loading job details', 'Close', { duration: 3000 });
        this.goBack();
      }
    });
  }

  onSubmit(): void {
    if (this.jobForm.valid && this.jobId) {
      this.isSubmitting = true;
      
      const jobData = this.jobForm.value;
      
      this.jobService.updateJob(this.jobId, jobData).subscribe({
        next: (updatedJob) => {
          console.log('Job updated successfully:', updatedJob);
          this.snackBar.open('Job updated successfully!', 'Close', { duration: 3000 });
          this.router.navigate(['/employer/jobs', this.jobId]);
        },
        error: (error) => {
          console.error('Error updating job:', error);
          this.snackBar.open('Error updating job. Please try again.', 'Close', { duration: 3000 });
          this.isSubmitting = false;
        }
      });
    }
  }

  goBack(): void {
    if (this.jobId) {
      this.router.navigate(['/employer/jobs', this.jobId]);
    } else {
      this.router.navigate(['/employer/jobs']);
    }
  }
}
