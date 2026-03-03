import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

export interface JobCreationDialogData {
  job?: any; // For editing existing jobs
}

export interface JobCreationDialogResult {
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  skillsRequired: string;
  experienceRequired: number;
  salaryMin: number;
  salaryMax: number;
  jobType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP' | 'FREELANCE';
  workLocation: 'ON_SITE' | 'REMOTE' | 'HYBRID';
  location: string;
}

@Component({
  selector: 'app-job-creation-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  template: `
    <div class="dialog-container">
      <h2 mat-dialog-title>{{data.job ? 'Edit Job' : 'Post New Job'}}</h2>
      
      <form [formGroup]="jobForm" (ngSubmit)="onSubmit()">
        <mat-dialog-content>
          <div class="form-grid">
            <!-- Job Title -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Job Title</mat-label>
              <input matInput formControlName="title" placeholder="e.g. Senior Software Engineer">
              <mat-error *ngIf="jobForm.get('title')?.hasError('required')">
                Job title is required
              </mat-error>
              <mat-error *ngIf="jobForm.get('title')?.hasError('maxlength')">
                Job title must not exceed 100 characters
              </mat-error>
            </mat-form-field>

            <!-- Location -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Location</mat-label>
              <input matInput formControlName="location" placeholder="e.g. New York, NY">
              <mat-error *ngIf="jobForm.get('location')?.hasError('required')">
                Location is required
              </mat-error>
            </mat-form-field>

            <!-- Job Type -->
            <mat-form-field appearance="outline" class="full-width">
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

            <!-- Work Location -->
            <mat-form-field appearance="outline" class="full-width">
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

            <!-- Experience Required -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Experience Required (years)</mat-label>
              <input matInput type="number" formControlName="experienceRequired" placeholder="e.g. 3">
              <mat-error *ngIf="jobForm.get('experienceRequired')?.hasError('min')">
                Experience must be 0 or more years
              </mat-error>
            </mat-form-field>

            <!-- Salary Range -->
            <div class="salary-row">
              <mat-form-field appearance="outline" class="salary-field">
                <mat-label>Min Salary ($)</mat-label>
                <input matInput type="number" formControlName="salaryMin" placeholder="e.g. 60000">
                <mat-error *ngIf="jobForm.get('salaryMin')?.hasError('min')">
                  Minimum salary must be positive
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="salary-field">
                <mat-label>Max Salary ($)</mat-label>
                <input matInput type="number" formControlName="salaryMax" placeholder="e.g. 120000">
                <mat-error *ngIf="jobForm.get('salaryMax')?.hasError('min')">
                  Maximum salary must be positive
                </mat-error>
              </mat-form-field>
            </div>

            <!-- Job Description -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Job Description</mat-label>
              <textarea matInput formControlName="description" rows="4" 
                        placeholder="Describe the role, responsibilities, and what you're looking for..."></textarea>
              <mat-error *ngIf="jobForm.get('description')?.hasError('required')">
                Job description is required
              </mat-error>
            </mat-form-field>

            <!-- Responsibilities -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Responsibilities</mat-label>
              <textarea matInput formControlName="responsibilities" rows="3" 
                        placeholder="List the key responsibilities and duties..."></textarea>
            </mat-form-field>

            <!-- Requirements -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Requirements</mat-label>
              <textarea matInput formControlName="requirements" rows="3" 
                        placeholder="List the required skills, experience, and qualifications..."></textarea>
              <mat-error *ngIf="jobForm.get('requirements')?.hasError('required')">
                Requirements are required
              </mat-error>
            </mat-form-field>

            <!-- Skills Required -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Skills Required</mat-label>
              <textarea matInput formControlName="skillsRequired" rows="3" 
                        placeholder="List specific skills needed (e.g. Java, Angular, SQL)..."></textarea>
            </mat-form-field>
          </div>
        </mat-dialog-content>

        <mat-dialog-actions align="end">
          <button mat-button (click)="onCancel()">Cancel</button>
          <button mat-raised-button color="primary" type="submit" 
                  [disabled]="!jobForm.valid">
            {{data.job ? 'Update Job' : 'Post Job'}}
          </button>
        </mat-dialog-actions>
      </form>
    </div>
  `,
  styles: [`
    .dialog-container {
      padding: 20px;
      max-width: 600px;
    }

    .form-grid {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .full-width {
      width: 100%;
    }

    .salary-row {
      display: flex;
      gap: 16px;
    }

    .salary-field {
      flex: 1;
    }

    mat-dialog-content {
      margin: 20px 0;
      max-height: 70vh;
      overflow-y: auto;
    }

    mat-dialog-actions {
      padding: 20px 0 0 0;
    }

    textarea {
      resize: vertical;
      min-height: 80px;
    }
  `]
})
export class JobCreationDialogComponent implements OnInit {
  jobForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<JobCreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JobCreationDialogData
  ) {
    this.jobForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required]],
      requirements: ['', [Validators.required]],
      responsibilities: [''],
      skillsRequired: [''],
      experienceRequired: [0, [Validators.min(0)]],
      salaryMin: [0, [Validators.min(0)]],
      salaryMax: [0, [Validators.min(0)]],
      jobType: ['', [Validators.required]],
      workLocation: ['', [Validators.required]],
      location: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.data.job) {
      // Pre-fill form if editing existing job
      this.jobForm.patchValue(this.data.job);
    }
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      const result: JobCreationDialogResult = this.jobForm.value;
      this.dialogRef.close(result);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
