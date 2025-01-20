import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './students-table.component';



@NgModule({
  declarations: [
    StudentsTableComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    StudentsTableComponent
  ]
})
export class StudentsTableModule { }
