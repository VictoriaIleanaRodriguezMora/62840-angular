import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../shared/interfaces/students';
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


  // acá va la logica para editar/crear
  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched()
    } else {
      console.log(this.studentForm.value);
      const { name, lastName } = this.studentForm.value
      const id = randomString(8)
      // const name = this.studentForm.value.name
      // const lastName = this.studentForm.value.lastName
      // const id = this.studentForm.value.id

      // Si esto es true, es decir si tiene valor, voy a editar, sino, debo crear
      if (this.editingStudentId != null) {
        // Editar
        this.students = this.students.map((estudiante) => {
          if (estudiante.id === this.editingStudentId) {
            // retorna lo que ya tiene (...estudiante) y (...this.studentForm.value) va a sobreescribir los campos que coincidan, con nuevos valores 
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

  onEdit(student: Student) {
    console.log("Se va a editar el estudiante: ", student);
    this.editingStudentId = student.id;
    this.studentForm.patchValue({
      name: student.name,
      lastName: student.lastName,
    })
  }





  onDelete(id: string) {
    this.students = this.students.filter((e) => e.id != id)
  }


}
