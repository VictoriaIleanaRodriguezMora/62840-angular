import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { StudentsModule } from '../students/students.module';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    ToolbarModule,
    StudentsModule
  ], exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
