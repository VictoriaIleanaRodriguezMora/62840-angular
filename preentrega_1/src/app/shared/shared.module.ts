import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FontSizeDirective } from './directives/font-size.directive';


@NgModule({
  declarations: [
    FullNamePipe,
    FontSizeDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FontSizeDirective,
    FullNamePipe
  ]
})
export class SharedModule { }
