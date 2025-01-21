import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../../../shared/interfaces/students';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  standalone: false,
  styleUrl: './students-table.component.scss',
})
export class StudentsTableComponent {
  @Input() students: Student[] = [];
  @Input() displayedColumns: string[] = [];
  @Output() editStudent = new EventEmitter<Student>();
  @Output() deleteStudent = new EventEmitter<string>();

  onEdit(student: Student) {
    this.editStudent.emit(student);
  }

  onDelete(id: string) {
    this.deleteStudent.emit(id);
  }
}
