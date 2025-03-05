import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from './store/enrollment.actions';
import { randomString } from '../../../../shared/randomString';
import { forkJoin, Observable } from 'rxjs';
import { Enrollment } from '../../../../interfaces/enrollment';
import {
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

  constructor(
    private store: Store,
    private coursesService: CoursesService,
    private studentsService: StudentsService,
    private fb: FormBuilder
  ) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.error$ = this.store.select(selectEnrollmentsError);
    this.isLoading$ = this.store.select(selectIsLoadingEnrollments);
    this.enrollmentForm = this.fb.group({
      studentId: [null, Validators.required],
      courseId: [null, Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(EnrollmentActions.resetState());
  }
  ngOnInit(): void {
    this.store.dispatch(EnrollmentActions.loadEnrollments());
    this.loadStudentsAndCourses();
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
    this.store.dispatch(
      EnrollmentActions.createEnrollment({
        data: {
          courseId: randomString(6),
          studentId: randomString(6),
        },
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

}
