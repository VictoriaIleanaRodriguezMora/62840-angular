import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';

/* Aquí la ruta de la que parte, es /dashboard/students/ */

const routes: Routes = [{
  path: "", 
  component: StudentsComponent,
},
{
  path: ":id", 
  loadChildren: () => import('./students.module').then((studMod) => studMod.StudentsModule),

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
