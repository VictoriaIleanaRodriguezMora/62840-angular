// courses.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CoursesActions from './courses.actions';
import { CoursesService } from '../../../../../core/services/courses.service';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.loadCourses),
      mergeMap(() =>
        this.coursesService.getCourses().pipe(
          map(courses => CoursesActions.loadCoursesSuccess({ courses })),
          catchError(error => of(CoursesActions.loadCoursesFailure({ error: error.message })))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.deleteCourse),
      mergeMap(({ id }) =>
        this.coursesService.deleteCourseById(id).pipe(
          map(() => CoursesActions.deleteCourseSuccess({ id })),
          catchError(error => of(CoursesActions.deleteCourseFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}