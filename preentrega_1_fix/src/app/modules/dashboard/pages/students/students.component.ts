import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from './models/students';
import { randomString } from '../../../../shared/functions/randomString';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})

export class StudentsComponent {
  studentForm: FormGroup;
  students: Student[] = [{
    "id": "M%%Tf8&S",
    "name": "name",
    "lastName": " last name"
  }];

  editingStudentId: string | null = null;

  displayedColumns: string[] = ['id', 'name', 'lastName', 'myPipe', 'action']


  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    })
  }


  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched()
    } else {
      console.log(this.studentForm.value);
      const { name, lastName } = this.studentForm.value
      const id = randomString(8)
      this.students = [
        ...this.students,
        { id: randomString(8), name, lastName }
      ]

      this.studentForm.reset()
      console.log(this.students);
    }
  }

  onEdit(student: Student) {
    console.log("Se va a editar el estudiante: ", student);
    // editingStudentId va a ser igual al id que recibo cuando se hace click en el boton editar 
    this.editingStudentId = student.id

    // YO QUIERO QUE al tocar el boton editar, los campos del formulario se rellenen con lo que ya tienen. par ano escribir de cero
    // El form group tiene un metodo patchValue, permite sobreescribir el valor de los campos del formulario. Entonces yo toco en el lapiz, y en el campo nombre aparece por defecto lo que yo escribí en name: "texto"
    this.studentForm.patchValue({
      // name: "nombre editado" //esto es hardcodeado
      // ahora por defecto va a tener el valor que ya tiene el formulario
      name: student.name,
      lastName: student.lastName,
    })
  }

  onDelete(id: string) {
    this.students = this.students.filter((e) => e.id != id)
  }


}
