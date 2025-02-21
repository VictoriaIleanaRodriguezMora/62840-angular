import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '', 
    component: CoursesComponent
    // loadChildren: () => import('./courses.module').then((studMod) => studMod.CoursesModule), // ❌
  },
  {
    path: ':id',
    loadChildren: () => import('./courses.module').then((studMod) => studMod.CoursesModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }