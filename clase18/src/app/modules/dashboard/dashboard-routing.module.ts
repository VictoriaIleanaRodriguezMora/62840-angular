import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((homeMod) => homeMod.HomeModule),
  },
  {
    path: 'students',
    loadChildren: () => import('./pages/students/students.module').then((studMod) => studMod.StudentsModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then((courseMod) => courseMod.CoursesModule)
  },
  {
    path: 'users',
    canActivate: [adminGuard],
    loadChildren: () => import('./pages/users/users.module').then((userMod) => userMod.UsersModule)
  },
  {
    path: 'enrollments',
    loadChildren: () => import('./pages/enrollments/enrollments.module').then((eMod) => eMod.EnrollmentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
