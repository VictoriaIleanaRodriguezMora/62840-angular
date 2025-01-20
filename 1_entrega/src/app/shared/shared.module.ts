import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from './directives/font-size.directive';
import { FontSizePipe } from './directives/font-size.pipe';
import { FullNamePipe } from './pipes/full-name.pipe';



@NgModule({
  declarations: [
    FontSizeDirective,
    FontSizePipe,
    FullNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
