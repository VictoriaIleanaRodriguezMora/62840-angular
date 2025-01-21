import { Component } from "@angular/core";
import { Student } from "../../../../shared/interfaces/students";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  standalone: false,
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  students: Student[] = [
    { id: 'M%%Tf8&S', name: 'name', lastName: 'last name' },
  ];
  displayedColumns: string[] = ['id', 'name', 'lastName', 'fullName', 'action'];
  editingStudent: Student | null = null;

  handleSaveStudent(student: Student) {
    if (this.editingStudent) {
      this.students = this.students.map((s) =>
        s.id === student.id ? student : s
      );
    } else {
      this.students = [...this.students, student];
    }
    this.editingStudent = null;
  }

  handleEditStudent(student: Student) {
    this.editingStudent = student;
  }

  handleDeleteStudent(id: string) {
    this.students = this.students.filter((s) => s.id !== id);
  }
}
