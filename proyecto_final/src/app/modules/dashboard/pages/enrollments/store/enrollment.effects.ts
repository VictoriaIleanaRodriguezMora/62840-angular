import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { EnrollmentsService } from '../../../../../core/services/enrollments.service';

import { Store } from '@ngrx/store';
import { selectEnrollments } from './enrollment.selectors';


@Injectable()
export class EnrollmentEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);

  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentActions.loadEnrollments),
      concatMap(() =>
        this.enrollmentsService.getEnrollments().pipe(
          map((enrollments) =>
            EnrollmentActions.loadEnrollmentsSuccess({ data: enrollments })
          ),
          catchError((error) =>
            of(EnrollmentActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });

  createEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentActions.createEnrollment),
      withLatestFrom(this.store.select(selectEnrollments)),
      concatMap(([action, enrollments]) => {
        const isDuplicate = enrollments.some(
          (enrollment) =>
            enrollment.studentId === action.data.studentId &&
            enrollment.courseId === action.data.courseId
        );
        
        if (isDuplicate) {
          return of(
            EnrollmentActions.createEnrollmentFailure({
              error: 'El alumno ya está inscrito en este curso.' // Texto EXACTO
            })
          );
        }
  
        return this.enrollmentsService.createEnrollment(action.data).pipe(
          map((enrollment) =>
            EnrollmentActions.createEnrollmentSuccess({ data: enrollment })
          ),
          catchError((error) =>
            of(
              EnrollmentActions.createEnrollmentFailure({
                error: error.message || 'Error al crear la inscripción',
              })
            )
          )
        );
      })
    );
  });

  loadEnrollmentDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentActions.loadEnrollmentDetail),
      concatMap((action) =>
        this.enrollmentsService.getEnrollmentById(action.id).pipe(
          map((enrollment) =>
            EnrollmentActions.loadEnrollmentDetailSuccess({ data: enrollment })
          ),
          catchError((error) =>
            of(EnrollmentActions.loadEnrollmentDetailFailure({ error }))
          )
        )
      )
    );
  });
  


  constructor(private enrollmentsService: EnrollmentsService) { }
}