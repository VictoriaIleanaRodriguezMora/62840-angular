import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FontSizeDirective } from './directives/font-size.directive';


// Para usar el FullNamePipe en otro módulo:
// 1° Exportarlo
// 2° Importar el módulo en el módulo padre 

@NgModule({
  declarations: [
    FullNamePipe,
    FontSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,
    FontSizeDirective
]
})
export class SharedModule { }
