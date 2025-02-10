import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-form-dialog',
  standalone: false,

  templateUrl: './course-form-dialog.component.html',
  styleUrl: './course-form-dialog.component.scss'
})
export class CourseFormDialogComponent {
  constructor(private matDialogRef: MatDialogRef<CourseFormDialogComponent>) { }
  onConfirm() {
    this.matDialogRef.close("info") // Emito. Con esto voy a cerrar el dialog al hacer click en el confirm. Puedo enviar data. ¿Cómo lo atrapo? En el Componente padre. Ref.02 Lo que emito acá
  }
}
