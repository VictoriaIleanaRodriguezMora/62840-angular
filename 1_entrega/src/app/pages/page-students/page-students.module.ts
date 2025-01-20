import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageStudentsComponent } from './page-students.component';
// import { ToolbarModule } from '../../modules/toolbar/toolbar.module';
import { SidenavModule } from '../../modules/sidenav/sidenav.module';

@NgModule({
  declarations: [
    // Componentes del modulo page-students
    PageStudentsComponent
  ],
  imports: [
    CommonModule,
    // ToolbarModule,
    SidenavModule,
    
  ],
  exports: [
    PageStudentsComponent
  ]
})
export class PageStudentsModule { }
