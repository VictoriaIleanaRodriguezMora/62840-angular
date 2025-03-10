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
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MyAlertComponent } from './my-alert/my-alert.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    FullNamePipe,
    FullName2Pipe,
    HighlightDirective,
    MultiplyDirective,
    MyAlertComponent
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
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MyAlertComponent,
    MatSelectModule
  ]
})
  export class SharedModule { }
