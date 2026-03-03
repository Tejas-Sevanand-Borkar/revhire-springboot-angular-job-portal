import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SeekerDashboardComponent } from './dashboard/dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplicationsComponent } from './applications/applications.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { SeekerProfileComponent } from './profile/profile.component';
import { CompanyProfileComponent } from '../employer/company-profile/company-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: SeekerDashboardComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'jobs/:id',
    component: JobDetailsComponent
  },
  {
    path: 'applications',
    component: ApplicationsComponent
  },
  {
    path: 'companies/:id',
    component: CompanyProfileComponent
  },
  {
    path: 'profile',
    component: SeekerProfileComponent
  },
  {
    path: 'saved-jobs',
    component: SavedJobsComponent
  }
];

@NgModule({
  declarations: [
    SeekerDashboardComponent,
    JobsComponent,
    JobDetailsComponent,
    ApplicationsComponent,
    SavedJobsComponent,
    SeekerProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
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
    MatListModule,
    MatCheckboxModule
  ]
})
export class SeekerModule { }
