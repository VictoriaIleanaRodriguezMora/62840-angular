import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageStudentsComponent } from './page-students.component';
import { SidenavModule } from '../../modules/sidenav/sidenav.module';
<<<<<<< HEAD
import { MatSidenavModule } from '@angular/material/sidenav';
// import { StudentsModule } from '../../modules/students/students.module';
=======
import { StudentsModule } from '../../modules/students/students.module';
>>>>>>> 46c6a8154dc54b49afb8635294d428a59dc53946

@NgModule({
  declarations: [
    // Componentes del modulo page-students
    PageStudentsComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
<<<<<<< HEAD
    MatSidenavModule,
    // StudentsModule
=======
    StudentsModule,

>>>>>>> 46c6a8154dc54b49afb8635294d428a59dc53946
  ],
  exports: [
    PageStudentsComponent
  ]
})
export class PageStudentsModule { }
