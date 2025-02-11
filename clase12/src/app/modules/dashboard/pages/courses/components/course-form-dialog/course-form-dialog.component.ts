import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-form-dialog',
  standalone: false,

  templateUrl: './course-form-dialog.component.html',
  styleUrl: './course-form-dialog.component.scss'
})
export class CourseFormDialogComponent {

  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CourseFormDialogComponent>) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required]
    })
  }
  onConfirm() {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched
    } else {
      // this.matDialogRef.close("info onconfirm") // Emito. Con esto voy a cerrar el dialog al hacer click en el confirm. Puedo enviar data. ¿Cómo lo atrapo? En el Componente padre. Ref.02 Lo que emito acá
      this.matDialogRef.close(this.courseForm.value) // emito la data del form
    }
  }
}
