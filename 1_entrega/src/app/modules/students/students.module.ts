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
    StudentsTableModule,
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
