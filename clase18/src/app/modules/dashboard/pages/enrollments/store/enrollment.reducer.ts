import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from '../../../../../interfaces/enrollment';
import { randomString } from '../../../../../shared/randomString';

export const enrollmentFeatureKey = 'enrollment';

export interface EnrollmentState {
  enrollments: Enrollment[];
  isLoading: boolean;
  error: unknown;
  enrollmentDetail: Enrollment | null; // Asegurar que esta propiedad existe
}

export const initialState: EnrollmentState = {
  enrollments: [],
  isLoading: false,
  error: null,
  enrollmentDetail: null, // Inicializar correctamente
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

  on(EnrollmentActions.resetState, () => initialState),

  on(EnrollmentActions.loadEnrollmentDetailSuccess, (state, action) => ({
    ...state,
    enrollmentDetail: action.data,
    isLoading: false,
  })),

  on(EnrollmentActions.loadEnrollmentDetailFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),

  on(EnrollmentActions.clearEnrollmentDetail, (state) => ({
    ...state,
    enrollmentDetail: null, // ✅ Asegurar que se limpie correctamente
  }))
  
  
);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});