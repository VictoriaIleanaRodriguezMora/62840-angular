import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
/* Aquí la ruta de la que parte, es /dashboard/students/ */

const routes: Routes = [{
  path: "", // representa /dashboard/students/
  component: StudentsComponent,
},
{
  // /dashboard/students/loquesea ¡LO QUE SEA QUE ESCRIBA DESPUES DE /dashboard/students/ va a ser considerado el id!
  path: ":id", // representa /dashboard/students/:id
  component: StudentDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
