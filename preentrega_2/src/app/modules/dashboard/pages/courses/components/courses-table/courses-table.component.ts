import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../../../../interfaces/courses';

@Component({
  selector: 'app-courses-table',
  standalone: false,

  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.scss'
})
export class CoursesTableComponent {
  @Input() dataSource: Course[] = []; 
  @Output() toDelete = new EventEmitter<string>; 
  displayedColumns = ["id", "name","actions"];
  @Output() toEdit = new EventEmitter<Course>()
}
