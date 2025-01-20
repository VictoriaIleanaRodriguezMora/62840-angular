import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsFormComponent } from './students-form.component';



@NgModule({
  declarations: [
    StudentsFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentsFormComponent
  ]
})
export class StudentsFormModule { }
