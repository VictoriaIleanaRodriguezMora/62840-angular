import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsFormModule } from './students-form/students-form.module';
import { StudentsTableModule } from './students-table/students-table.module';



@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsFormModule,
<<<<<<< HEAD
    StudentsTableModule,
  ],
  exports: [
    StudentsComponent
=======
    StudentsTableModule
  ],
  exports: [
    StudentsComponent,
>>>>>>> 46c6a8154dc54b49afb8635294d428a59dc53946
  ]
})
export class StudentsModule { }
