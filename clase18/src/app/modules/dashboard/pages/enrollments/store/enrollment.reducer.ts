import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from '../../../../../interfaces/enrollment';
import { randomString } from '../../../../../shared/randomString';

export const enrollmentFeatureKey = 'enrollment';

export interface State {
  enrollments: Enrollment[];
  isLoading: boolean;
  error: unknown;
}

export const initialState: State = {
  enrollments: [],
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(EnrollmentActions.loadEnrollments, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, action) => ({
    ...state,
    enrollments: action.data,
    isLoading: false,
    error: null,
  })),
  on(EnrollmentActions.loadEnrollmentsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),

  on(EnrollmentActions.createEnrollmentSuccess, (state, action) => ({
    ...state,
    enrollments: [...state.enrollments, action.data],
    isLoading: false,
  })),

  on(EnrollmentActions.updateEnrollmentSuccess, (state, action) => ({
    ...state,
    enrollments: state.enrollments.map((enrollment) =>
      enrollment.id === action.data.id ? action.data : enrollment
    ),
  })),

  on(EnrollmentActions.deleteEnrollment, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(EnrollmentActions.deleteEnrollmentSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    enrollments: state.enrollments.filter(enrollment => enrollment.id !== action.id),
  })),
  on(EnrollmentActions.deleteEnrollmentFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),

  on(EnrollmentActions.resetState, () => initialState)
);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});