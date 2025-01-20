import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsFormComponent } from './students-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentsFormComponent
  ]
})
export class StudentsFormModule { }
