import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../interfaces/students';
import { StudentsService } from '../../../../core/services/students.service';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  studentForm: FormGroup;
  students: Student[] = [];
  selectedStudent: Student | null = null;
  editingStudentId: string | null = null;

  displayedColumns: string[] = ['id', 'name', 'lastName', 'delete', 'edit', 'detail'];

  constructor(
    private fb: FormBuilder,
    private myStudentService: StudentsService
  ) {
    this.studentForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  private loadStudents() {
    this.myStudentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  getStudentDetails(id: string) {
    this.myStudentService.getStudentDetail(id).subscribe(student => {
      this.selectedStudent = student;
    });
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const { name, lastName } = this.studentForm.value;

    if (this.editingStudentId) {
      // Edito estudiante existente
      this.myStudentService.updateStudentById(this.editingStudentId, { name, lastName })
        .subscribe((updatedStudents) => {
          this.students = updatedStudents;
          this.editingStudentId = null;
          this.studentForm.reset();
        });
    } else {
      // Creo nuevo estudiante
      this.myStudentService.createStudent({ name, lastName })
        .subscribe((updatedStudents) => {
          this.students = updatedStudents;
          this.studentForm.reset();
        });
    }
  }

  onDelete(id: string) {
    this.myStudentService.deleteStudentById(id).subscribe((updatedStudents) => {
      this.students = updatedStudents;
    });
  }

  onEdit(student: Student) {
    this.editingStudentId = student.id;
    this.studentForm.patchValue({
      name: student.name,
      lastName: student.lastName,
    });
  }
}
