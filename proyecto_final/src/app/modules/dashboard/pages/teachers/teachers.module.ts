import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { SharedModule } from '../../../../shared/shared.module';
import { TeachersRoutingModule } from './teachers-routing.module';



@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule
  ], exports: [
    TeachersComponent

  ]
})
export class TeachersModule { }
