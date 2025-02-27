import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from './store/enrollment.actions';
import { randomString } from '../../../../shared/randomString';
import { Observable } from 'rxjs';
import { Enrollment } from '../../../../interfaces/enrollment';
import { selectEnrollments } from './store/enrollment.selectors';

@Component({
  selector: 'app-enrollments',
  standalone: false,

  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})
export class EnrollmentsComponent implements OnInit, OnDestroy {

  enrollments$: Observable<Enrollment[]>;

  constructor(private store: Store) {
    this.enrollments$ = this.store.select(selectEnrollments);
  }


  ngOnInit(): void {
    this.store.dispatch(EnrollmentActions.loadEnrollments())
  }

  ngOnDestroy(): void {
    this.store.dispatch(EnrollmentActions.resetState());
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

}
