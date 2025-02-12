import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
