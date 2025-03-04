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

  // Leer listado...
  on(EnrollmentActions.loadEnrollments, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, action) => {
    return {
      ...state,
      enrollments: action.data,
      isLoading: false,
      error: null,
    };
  }),
  on(EnrollmentActions.loadEnrollmentsFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),

  // Crear...
  on(EnrollmentActions.createEnrollment, (state, action) => {
    return {
      ...state,
      enrollments:[
        ...state.enrollments,
        {id: randomString(6), ...action.data}
      ]
    };
  }),
  on(EnrollmentActions.createEnrollmentSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: null,
      enrollments: [...state.enrollments, action.data],
    };
  }),
  on(EnrollmentActions.createEnrollmentFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),

  // Reset
  on(EnrollmentActions.resetState, () => initialState),

  // Proximamente...
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, action) => state),
  on(EnrollmentActions.loadEnrollmentsFailure, (state, action) => state)
);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});