import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

/* Aquí la ruta de la que parte, es /dashboard/courses/ */

const routes: Routes = [
  {
    path: '', // representa /dashboard/courses/
    component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
