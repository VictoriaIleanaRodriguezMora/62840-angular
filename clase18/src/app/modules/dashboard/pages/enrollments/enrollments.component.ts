import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from './store/enrollment.actions';
import { randomString } from '../../../../shared/randomString';
import { forkJoin, Observable } from 'rxjs';
import { Enrollment } from '../../../../interfaces/enrollment';
import {
  selectEnrollmentDetail,
  selectEnrollments,
  selectEnrollmentsError,
  selectIsLoadingEnrollments,
} from './store/enrollment.selectors';
import { Course } from '../../../../interfaces/courses';
import { User } from '../../../../interfaces/user';
import { CoursesService } from '../../../../core/services/courses.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../interfaces/students';
import { StudentsService } from '../../../../core/services/students.service';
import { AuthService } from '../../../../core/services/auth.service';
import { EnrollmentsService } from '../../../../core/services/enrollments.service';
@Component({
  selector: 'app-enrollments',
  standalone: false,

  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})
export class EnrollmentsComponent implements OnInit, OnDestroy {
  enrollments$: Observable<Enrollment[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<unknown>;

  courses: Course[] = [];
  students: Student[] = [];

  enrollmentForm: FormGroup;
  displayedColumns: string[] = [];

  isAdmin$: Observable<User | null>
  enrollmentData: Enrollment[] = [];

  enrollmentDetail$: Observable<Enrollment | null>; // 👈 Agregar esta línea

  constructor(
    private store: Store,
    private coursesService: CoursesService,
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService,

    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.error$ = this.store.select(selectEnrollmentsError);
    this.isLoading$ = this.store.select(selectIsLoadingEnrollments);
    this.enrollmentForm = this.fb.group({
      studentId: [null, Validators.required],
      courseId: [null, Validators.required],
    });
    this.isAdmin$ = this.authService.isAdmin$;
    this.enrollmentDetail$ = this.store.select(selectEnrollmentDetail);

  }

  ngOnDestroy(): void {
    this.store.dispatch(EnrollmentActions.resetState());
  }
  ngOnInit(): void {
    this.store.dispatch(EnrollmentActions.loadEnrollments());
    this.loadStudentsAndCourses();
    this.isAdmin$.subscribe((user: User | null) => {
      const isAdmin = user !== null;

      if (isAdmin) {
        this.displayedColumns = ['id', 'studentId', 'courseId', 'delete', 'edit', 'detail'];
      } else {
        this.displayedColumns = ["id", 'studentId', 'courseId', "detail"];
      }

      this.cdr.detectChanges();
    });
  }

  loadStudentsAndCourses(): void {
    forkJoin([
      this.coursesService.getCourses(),
      this.studentsService.getStudents(),
    ]).subscribe({
      next: ([courses, students]) => {
        this.courses = courses;
        this.students = students;
      },
    });
  }

  createEnrollment(): void {
    if (this.enrollmentForm.invalid) {
      this.enrollmentForm.markAllAsTouched();
      return;
    }

    this.store.dispatch(
      EnrollmentActions.createEnrollment({
        data: this.enrollmentForm.value,
      })
    );
  }

  onSubmit(): void {
    if (this.enrollmentForm.invalid) {
      this.enrollmentForm.markAllAsTouched();
    } else {
      this.store.dispatch(
        EnrollmentActions.createEnrollment({ data: this.enrollmentForm.value })
      );
    }
  }

  editEnrollment(enrollment: Enrollment): void {
    this.enrollmentForm.patchValue({
      studentId: enrollment.studentId,
      courseId: enrollment.courseId,
    });

    this.store.dispatch(
      EnrollmentActions.updateEnrollment({
        id: enrollment.id,
        data: this.enrollmentForm.value,
      })
    );
  }


  deleteEnrollment(id: string): void {
    this.enrollmentsService.deleteEnrollment(id).subscribe({
      next: () => {
        this.store.dispatch(EnrollmentActions.deleteEnrollmentSuccess({ id }));
      },
      error: (error) => {
        this.store.dispatch(EnrollmentActions.deleteEnrollmentFailure({ error }));
      }
    });
  }

  viewEnrollmentDetail(id: string): void {
    this.store.dispatch(EnrollmentActions.loadEnrollmentDetail({ id }));
  }

  loadEnrollmentDetail(id: string): void {
    this.store.dispatch(EnrollmentActions.loadEnrollmentDetail({ id }));
  }

  clearEnrollmentDetail(): void {
    this.store.dispatch(EnrollmentActions.clearEnrollmentDetail()); // ✅ Asegurar que se usa correctamente
  }
}
