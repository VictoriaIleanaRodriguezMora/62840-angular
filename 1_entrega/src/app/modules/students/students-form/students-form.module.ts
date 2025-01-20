import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsFormComponent } from './students-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    StudentsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],
  exports: [
    StudentsFormComponent
  ]
})
export class StudentsFormModule { }
