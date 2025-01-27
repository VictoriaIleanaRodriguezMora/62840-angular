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
    id: "M%%Tf8&S",
    name: "aaaaaaaaaa",
    lastName: "ssssssss"
  }];
  // listado de las columnas que va a tener mi tabla

  displayedColumns: string[] = ['id', 'name', 'lastName', 'action']


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
      // const name = this.studentForm.value.name
      // const lastName = this.studentForm.value.lastName
      // const id = this.studentForm.value.id


      // this.students.push({ id: randomString(8), name, lastName, }) // Esto no funciona en tiempo real
      this.students = [
        ...this.students,
        { id: randomString(8), name, lastName }
      ]

      this.studentForm.reset()
      console.log(this.students);
    }
  }

  onDelete(id: string) {
    this.students = this.students.filter((e) => e.id != id)
  }

}
