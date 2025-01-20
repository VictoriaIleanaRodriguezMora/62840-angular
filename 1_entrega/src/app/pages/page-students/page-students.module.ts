import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageStudentsComponent } from './page-students.component';
import { SidenavModule } from '../../modules/sidenav/sidenav.module';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { StudentsModule } from '../../modules/students/students.module';

@NgModule({
  declarations: [
    // Componentes del modulo page-students
    PageStudentsComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    MatSidenavModule,
    // StudentsModule
  ],
  exports: [
    PageStudentsComponent
  ]
})
export class PageStudentsModule { }
