import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../../../../interfaces/courses';
import { AuthService } from '../../../../../../core/services/auth.service';
import { map, Observable } from 'rxjs';
import { User } from '../../../../../../interfaces/user';

@Component({
  selector: 'app-courses-table',
  standalone: false,

  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.scss'
})
export class CoursesTableComponent {
  @Input() dataSource: Course[] = [];
  @Output() toDelete = new EventEmitter<string>;
  displayedColumns = ["id", "name", "edit", "delete", "detail"];
  @Output() toEdit = new EventEmitter<Course>()

  isAdmin$: Observable<User | null>
  constructor(private authService: AuthService) {
    this.isAdmin$ = this.authService.isAdmin$;
  }
}
