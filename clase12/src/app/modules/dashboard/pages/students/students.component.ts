import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../interfaces/students';
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

  displayedColumns: string[] = ['id', 'name', 'lastName', 'action']

  editingStudentId: string | null = null;

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
      const { name, lastName } = this.studentForm.value
      const id = randomString(8)
      if (this.editingStudentId != null) {
        this.students = this.students.map((estudiante) => {
          if (estudiante.id === this.editingStudentId) {
            return { ...estudiante, ...this.studentForm.value }
          } else {
            return estudiante
          }
        })

        this.editingStudentId = null
      } else {
        this.students = [
          ...this.students,
          { id: randomString(8), name, lastName }
        ]
      }
      this.studentForm.reset()
    }
  }

  onDelete(id: string) {
    this.students = this.students.filter((e) => e.id != id)
  }

  onColorUpdated() {
    // console.log("Se actualizó el color del fondo del componente");
  }

  onEdit(student: Student) {

    this.editingStudentId = student.id

    this.studentForm.patchValue({
      name: student.name,
      lastName: student.lastName,
    })
  }

}
