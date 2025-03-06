import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../../../../core/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../../../../interfaces/courses';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-course-detail',
  standalone: false,

  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {
  isLoading = false;
  course: Course | null = null;
  errorMessage = '';
  alertMessage: string | null = null;

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.isLoading = true;
    this.coursesService.getCourseDetail(this.activatedRoute.snapshot.params['id']) 
      .subscribe({
        next: (c) => {
          
          if (!c.professors || c.professors.length === 0) {
          alert("Este curso no tiene profesores asignados.");
          this.router.navigate(['/dashboard/courses']);
          }
          this.course = c
        },
        complete: () => {
          this.isLoading = false;
          this.errorMessage = ''
        },
        error: (error) => {
          this.isLoading = false;
          if (error instanceof HttpErrorResponse) {
            if (error.status === 404) {
              this.errorMessage = "El curso no existe"
              alert("El curso no existe")
            }
          }
        },
      })
  }


}
