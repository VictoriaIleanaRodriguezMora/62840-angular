import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../../../../core/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../../../../interfaces/courses';
import { HttpErrorResponse } from '@angular/common/http';
import { EnrollmentDetail } from '../../../../../../interfaces/enrollment-detail';
import { forkJoin, map, Observable } from 'rxjs';
import { Store } from '@ngrx/store'; // Importar Store
import { AppState, selectCourses } from '../../store/courses.selectors';
import { AuthService } from '../../../../../../core/services/auth.service';
import { User } from '../../../../../../interfaces/user';
import { StudentsService } from '../../../../../../core/services/students.service';

@Component({
  selector: 'app-course-detail',
  standalone: false,
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent implements OnInit {
  isLoading = false;
  course: Course | null = null;
  errorMessage = '';
  alertMessage: string | null = null;
  enrollments: EnrollmentDetail[] = [];
  loading$: Observable<boolean>;
  courses$: Observable<Course[]>;
  isAdmin$: Observable<User | null>;
  displayedColumns: string[] = ['idS', 'actions'];

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private authService: AuthService,
    private studentsService: StudentsService
  ) {
    this.isAdmin$ = this.authService.isAdmin$;
    this.courses$ = this.store.select(selectCourses);
    this.loading$ = this.store.select((state) => state.courses.loading);
  }

  ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.params['id'];

    this.isLoading = true;
    this.coursesService.getCourseDetail(courseId).subscribe({
      next: (c) => {
        if (!c.professors || Object.keys(c.professors).length === 0) {
          alert('Este curso no tiene profesores asignados.');
          this.router.navigate(['/dashboard/courses']);
        }
        this.course = c;
      },
      complete: () => {
        this.isLoading = false;
        this.errorMessage = '';
      },
      error: (error) => {
        this.isLoading = false;
        if (error instanceof HttpErrorResponse && error.status === 404) {
          this.errorMessage = 'El curso no existe';
          alert('El curso no existe');
        }
      },
    });

    this.coursesService
      .getEnrollmentsByCourse(courseId)
      .subscribe((enrollments) => {
        console.log(
          'Enrollments antes de obtener los detalles del estudiante:',
          enrollments
        );
        const studentRequests = enrollments
          .filter((enrollment) => enrollment.student && enrollment.student.id)
          .map((enrollment) =>
            this.studentsService.getStudentById(enrollment.student.id).pipe(
              map((student) => {
                console.log('Detalles del estudiante:', student);
                return {
                  ...enrollment,
                  student: student,
                };
              })
            )
          );

        if (studentRequests.length > 0) {
          forkJoin(studentRequests).subscribe(
            (enrollmentsWithStudentDetails) => {
              this.enrollments = enrollmentsWithStudentDetails;
              console.log(
                'Enrollments con detalles de estudiantes:',
                this.enrollments
              );
            }
          );
        } else {
          this.enrollments = enrollments;
        }
      });
  }

  onUnenroll(enrollmentId: string) {
    this.coursesService.deleteEnrollment(enrollmentId).subscribe(() => {
      this.enrollments = this.enrollments.filter((e) => e.id !== enrollmentId);
    });
  }
}
