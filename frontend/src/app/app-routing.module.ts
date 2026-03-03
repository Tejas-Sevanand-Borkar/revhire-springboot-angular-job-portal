import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'seeker',
    loadChildren: () => import('./seeker/seeker.module').then(m => m.SeekerModule),
    canActivate: [RoleGuard],
    data: { roles: ['SEEKER'] }
  },
  {
    path: 'employer',
    loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule),
    canActivate: [RoleGuard],
    data: { roles: ['EMPLOYER'] }
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
