// courses.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CoursesActions from './courses.actions';
import { Course } from '../../../../../interfaces/courses';

export interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null
};

export const coursesReducer = createReducer(
  initialState,
  on(CoursesActions.loadCourses, (state) => ({ ...state, loading: true })),
  on(CoursesActions.loadCoursesSuccess, (state, { courses }) => ({ ...state, courses, loading: false })),
  on(CoursesActions.loadCoursesFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(CoursesActions.deleteCourseSuccess, (state, { id }) => ({
    ...state,
    courses: state.courses.filter(course => course.id !== id)
  }))
);