import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, 
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((homeMod) => homeMod.HomeModule),
        data: { title: "Inicio" }
      },
      {
        path: 'students',
        loadChildren: () => import('./pages/students/students.module').then((studMod) => studMod.StudentsModule),
        data: { title: "Estudiantes" }
      },
      {
        path: 'courses',
        loadChildren: () => import('./pages/courses/courses.module').then((courseMod) => courseMod.CoursesModule),
        data: { title: "Cursos" }
      },
      {
        path: 'users',
        canActivate: [adminGuard],
        loadChildren: () => import('./pages/users/users.module').then((userMod) => userMod.UsersModule),
        data: { title: "Usuarios" }
      },
      {
        path: 'enrollments',
        loadChildren: () => import('./pages/enrollments/enrollments.module').then((eMod) => eMod.EnrollmentsModule),
        data: { title: "Inscripciones" }
      },
      {
        path: 'teachers',
        loadChildren: () => import('./pages/teachers/teachers.module').then((eMod) => eMod.TeachersModule),
        data: { title: "Inscripciones" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
