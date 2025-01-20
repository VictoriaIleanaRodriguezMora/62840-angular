import { Component, ViewChild } from '@angular/core';
import { StudentsFormComponent } from './students-form/students-form.component';
import { Student } from '../../shared/interfaces/students';

@Component({
  selector: 'app-students',
  standalone: false,

  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  @ViewChild(StudentsFormComponent) studentsForm!: StudentsFormComponent;
  students: Student[] = [];

  ngAfterViewInit() {
    setTimeout(() => {
      this.students = this.studentsForm.students; // Asignar la lista del componente hijo
    });
  }
}
