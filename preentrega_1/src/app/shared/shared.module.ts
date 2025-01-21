import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from './directives/font-size.directive';
import { FullNamePipe } from './pipes/full-name.pipe';



@NgModule({
  declarations: [
    FontSizeDirective,
    FullNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
