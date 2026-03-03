import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

export interface JobSearchFilters {
  keyword?: string;
  location?: string;
  jobType?: string;
  workLocation?: string;
  experienceYears?: number;
  minSalary?: number;
  maxSalary?: number;
  companyName?: string;
  postedAfter?: Date;
}

@Component({
  selector: 'app-job-search',
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
    <mat-card class="search-card">
      <mat-card-header>
        <mat-card-title>Advanced Job Search</mat-card-title>
        <button mat-icon-button (click)="toggleExpanded()" class="expand-button">
          <mat-icon>{{isExpanded ? 'expand_less' : 'expand_more'}}</mat-icon>
        </button>
      </mat-card-header>
      
      <mat-card-content [class.expanded]="isExpanded">
        <form [formGroup]="searchForm" (ngSubmit)="onSearch()">
          <!-- Basic Search -->
          <div class="search-row">
            <mat-form-field appearance="fill" class="search-field">
              <mat-label>Keywords</mat-label>
              <input matInput formControlName="keyword" 
                     placeholder="Job title, skills, or keywords">
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>
            
            <mat-form-field appearance="fill" class="search-field">
              <mat-label>Location</mat-label>
              <input matInput formControlName="location" 
                     placeholder="City, State, or Remote">
              <mat-icon matSuffix>location_on</mat-icon>
            </mat-form-field>
          </div>

          <!-- Advanced Filters -->
          <div class="filters-grid" *ngIf="isExpanded">
            <mat-form-field appearance="fill">
              <mat-label>Job Type</mat-label>
              <mat-select formControlName="jobType">
                <mat-option value="">All Types</mat-option>
                <mat-option value="FULL_TIME">Full Time</mat-option>
                <mat-option value="PART_TIME">Part Time</mat-option>
                <mat-option value="CONTRACT">Contract</mat-option>
                <mat-option value="INTERNSHIP">Internship</mat-option>
                <mat-option value="FREELANCE">Freelance</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field appearance="fill">
              <mat-label>Work Location</mat-label>
              <mat-select formControlName="workLocation">
                <mat-option value="">All Locations</mat-option>
                <mat-option value="ON_SITE">On Site</mat-option>
                <mat-option value="REMOTE">Remote</mat-option>
                <mat-option value="HYBRID">Hybrid</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field appearance="fill">
              <mat-label>Experience (years)</mat-label>
              <input matInput type="number" formControlName="experienceYears" 
                     placeholder="Maximum years">
            </mat-form-field>

            <mat-form-field appearance="fill">
              <mat-label>Company Name</mat-label>
              <input matInput formControlName="companyName" 
                     placeholder="Search by company">
            </mat-form-field>

            <mat-form-field appearance="fill">
              <mat-label>Minimum Salary</mat-label>
              <input matInput type="number" formControlName="minSalary" 
                     placeholder="e.g. 50000">
            </mat-form-field>

            <mat-form-field appearance="fill">
              <mat-label>Maximum Salary</mat-label>
              <input matInput type="number" formControlName="maxSalary" 
                     placeholder="e.g. 100000">
            </mat-form-field>

            <mat-form-field appearance="fill">
              <mat-label>Posted After</mat-label>
              <input matInput [matDatepicker]="datePicker" formControlName="postedAfter">
              <mat-datepicker-toggle matSuffix [for]="datePicker"></mat-datepicker-toggle>
              <mat-datepicker #datePicker></mat-datepicker>
            </mat-form-field>
          </div>

          <div class="search-actions">
            <button mat-raised-button color="primary" type="submit">
              <mat-icon>search</mat-icon>
              Search Jobs
            </button>
            
            <button mat-button (click)="onClear()" type="button">
              <mat-icon>clear</mat-icon>
              Clear Filters
            </button>
          </div>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .search-card {
      margin-bottom: 24px;
    }

    .search-card mat-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .expand-button {
      margin-left: auto;
    }

    .search-row {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
    }

    .search-field {
      flex: 1;
    }

    .filters-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }

    .search-actions {
      display: flex;
      gap: 12px;
      margin-top: 24px;
      justify-content: flex-start;
    }

    .search-actions button {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .search-actions mat-icon {
      font-size: 20px;
      height: 20px;
      width: 20px;
    }

    .expanded {
      max-height: 1000px;
      transition: max-height 0.3s ease-in-out;
    }

    .search-card mat-card-content:not(.expanded) {
      max-height: 100px;
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
      .search-row {
        flex-direction: column;
        gap: 12px;
      }

      .filters-grid {
        grid-template-columns: 1fr;
      }

      .search-actions {
        flex-direction: column;
      }

      .search-actions button {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class JobSearchComponent {
  @Output() search = new EventEmitter<JobSearchFilters>();
  @Output() clear = new EventEmitter<void>();

  searchForm: FormGroup;
  isExpanded = false;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      keyword: [''],
      location: [''],
      jobType: [''],
      workLocation: [''],
      experienceYears: [null],
      companyName: [''],
      minSalary: [null],
      maxSalary: [null],
      postedAfter: [null]
    });
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  onSearch(): void {
    const filters: JobSearchFilters = {};
    
    Object.keys(this.searchForm.controls).forEach(key => {
      const value = this.searchForm.get(key)?.value;
      if (value !== null && value !== '' && value !== undefined) {
        filters[key] = value;
      }
    });

    this.search.emit(filters);
  }

  onClear(): void {
    this.searchForm.reset();
    this.clear.emit();
  }

  setFilters(filters: Partial<JobSearchFilters>): void {
    this.searchForm.patchValue(filters);
  }
}
