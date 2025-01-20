import { Component, Input } from '@angular/core';
import { Student } from '../../../shared/interfaces/students';

@Component({
  selector: 'app-students-table',
  standalone: false,

  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {
  @Input() students: Student[] = [];
  displayedColumns: string[] = ['id', 'name', 'lastName', 'action']
}
