import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FullName2Pipe } from './pipes/full-name2.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { MultiplyDirective } from './directives/multiply.directive';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Para usar el FullNamePipe en otro módulo:
// 1° Exportarlo
// 2° Importar el módulo en el módulo padre 

@NgModule({
  declarations: [
    FullNamePipe,
    FullName2Pipe,
    HighlightDirective,
    MultiplyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,
    FullName2Pipe,
    HighlightDirective,
    MultiplyDirective,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class SharedModule { }
