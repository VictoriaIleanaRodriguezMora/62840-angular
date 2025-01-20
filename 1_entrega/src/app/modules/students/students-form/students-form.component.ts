import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from "../../../shared/interfaces/students"
import { randomString } from '../../../shared/functions/randomString';

@Component({
  selector: 'app-students-form',
  standalone: false,

  templateUrl: './students-form.component.html',
  styleUrl: './students-form.component.scss'
})
export class StudentsFormComponent {

  studentForm: FormGroup;
  students: Student[] = [{
    "id": "M%%Tf8&S",
    "name": "aaaaaaaaaa",
    "lastName": "ssssssss"
  }];

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: [null, [Validators.required,]],
      lastName: [null, [Validators.required,]]
    })
  }

  myControl(controlName: string) {
    return this.studentForm.get(controlName)
  }

  onSubmit() {

    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      console.log(this.studentForm.value);

      const { name, lastName } = this.studentForm.value
      
      this.students = [
        ...this.students,
        { id: randomString(8), name, lastName }
      ]

      console.log(this.students);

      this.studentForm.reset()
    }
  }

}
