import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from './models/students';
import { randomString } from '../../../../shared/randomString';

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
  // listado de las columnas que va a tener mi tabla

  displayedColumns: string[] = ['id', 'name', 'lastName', 'action']

  // Si el id del estudiante que se está editando es null, significa que no estoy editando, si tiene valor, significa que estoy editando un estudiante 
  editingStudentId: string | null = null;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    })
  }

  // acá va la logica para editar/crear
  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched()
    } else {
      console.log(this.studentForm.value);
      const { name, lastName } = this.studentForm.value

      // const name = this.studentForm.value.name
      // const lastName = this.studentForm.value.lastName

      // Si esto es true, es decir si tiene valor, voy a editar, sino, debo crear
      if (this.editingStudentId != null) {
        // Editar
        this.students = this.students.map((estudiante) => {
          if (estudiante.id === this.editingStudentId) {
            // retorna lo que ya tiene (...estudiante) y (...this.studentForm.value) va a sobreescribir los campos que coincidan el nombr, con nuevos valores 
            return { ...estudiante, ...this.studentForm.value }
          } else {
            // sino, lo dejo como está
            return estudiante
          }
        })

        // reestablezco el id a null luego de ser editado, porque si no el estado va a quedar siempre editandose
        this.editingStudentId = null // reestablezco
      } else {
        // crear (ya lo tenia)
        // this.students.push({ id: randomString(8), name, lastName, }) // Esto no funciona en tiempo real
        this.students = [
          ...this.students,
          { id: randomString(8), name, lastName }
        ]
        console.log(this.students);
      }
      this.studentForm.reset() 
    }
  }

  onDelete(id: string) {
    this.students = this.students.filter((e) => e.id != id)
  }

  onColorUpdated() {
    console.log("Se actualizó el color del fondo del componente");
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

}
