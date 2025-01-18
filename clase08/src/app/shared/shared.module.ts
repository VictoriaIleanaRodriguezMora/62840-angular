import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FullName2Pipe } from './pipes/full-name2.pipe';


// Para usar el FullNamePipe en otro módulo:
// 1° Exportarlo
// 2° Importar el módulo en el módulo padre 

@NgModule({
  declarations: [
    FullNamePipe,
    FullName2Pipe
  ],
  imports: [
    CommonModule
  ],
  exports: [FullNamePipe, FullName2Pipe]
})
export class SharedModule { }
