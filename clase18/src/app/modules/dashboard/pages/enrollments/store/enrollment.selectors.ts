import * as fromEnrollment from './enrollment.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');


export const selectEnrollments = createSelector(
  selectEnrollmentState,
  (state) => state.enrollments
);

export const selectIsLoadingEnrollments = createSelector(
  selectEnrollmentState,
  (state) => state.isLoading
);

export const selectEnrollmentsError = createSelector(
  selectEnrollmentState,
  (state) => state.error
);

export const selectEnrollmentDetail = createSelector(
  selectEnrollmentState,
  (state) => state.enrollmentDetail
);

