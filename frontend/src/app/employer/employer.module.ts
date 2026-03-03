import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';

import { EmployerDashboardComponent } from './dashboard/dashboard.component';
import { CreateJobComponent } from './create-job/create-job-final.component';
import { EmployerApplicationsComponent } from './applications/applications.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: EmployerDashboardComponent
  },
  {
    path: 'jobs',
    loadComponent: () => import('./jobs/jobs.component').then(m => m.EmployerJobsComponent)
  },
  {
    path: 'jobs/:id',
    loadComponent: () => import('./jobs/job-details.component').then(m => m.JobDetailsComponent)
  },
  {
    path: 'jobs/:id/edit',
    loadComponent: () => import('./jobs/edit-job.component').then(m => m.EditJobComponent)
  },
  {
    path: 'applications',
    loadComponent: () => import('./applications/applications.component').then(m => m.EmployerApplicationsComponent)
  },
  {
    path: 'post-job',
    loadComponent: () => import('./create-job/create-job-final.component').then(m => m.CreateJobComponent)
  },
  {
    path: 'profile',
    component: CompanyProfileComponent
  }
];

@NgModule({
  declarations: [
    EmployerDashboardComponent,
    CompanyProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressBarModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatListModule
  ],
  providers: [
    // Services will be provided at root level
  ]
})
export class EmployerModule { }
