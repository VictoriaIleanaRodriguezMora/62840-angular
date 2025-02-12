import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../interfaces/students';
import { randomString } from '../../../../shared/randomString';
import { StudentsService } from '../../../../core/students.service';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})

export class StudentsComponent implements OnInit {
  studentForm: FormGroup;
  students: any[] = [];
  selectedStudent: any;

  displayedColumns: string[] = ['id', 'name', 'lastName', 'action']

  editingStudentId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private myStudentService: StudentsService 
  ) {
    this.studentForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.myStudentService.getStudents().subscribe((data) => {
      return this.students = data;
    })
  }

  getStudentDetails(id: string) {
    this.myStudentService 
    .getStudentsById(id) 
    .subscribe(student => { 
      return this.selectedStudent = student; 
    })
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched()
    } else {
      console.log(this.studentForm.value);
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
        console.log(this.students);
      }
      this.studentForm.reset()
    }
  }

  onDelete(id: string) {
    this.students = this.students.filter((e) => e.id != id)
  }

  onColorUpdated() {

  }

  onEdit(student: Student) {
    console.log("Se va a editar el estudiante: ", student);
    this.editingStudentId = student.id

    this.studentForm.patchValue({
      name: student.name,
      lastName: student.lastName,
    })
  }

}