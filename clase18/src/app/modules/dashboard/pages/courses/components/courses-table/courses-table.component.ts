import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class CoursesTableComponent implements OnInit {
  @Input() dataSource: Course[] = [];
  @Output() toDelete = new EventEmitter<string>;
  displayedColumns: string[] = [];
  @Output() toEdit = new EventEmitter<Course>()

  isAdmin$: Observable<User | null>
  role: string | null = null;

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef 

  ) {
    this.isAdmin$ = this.authService.isAdmin$;
  }

  ngOnInit(): void {
    this.isAdmin$.subscribe((user: User | null) => {
      const isAdmin = user !== null; 
      
      if (isAdmin) {
        this.displayedColumns = ["id", "name", "edit", "delete", "detail"];
      } else {
        this.displayedColumns = ["id", "name", "detail"];
      }

      this.cdr.detectChanges();
      console.log("Columnas actualizadas:", this.displayedColumns);
    });
  }

}
