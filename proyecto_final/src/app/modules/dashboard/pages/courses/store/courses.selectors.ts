import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.reducer';
import { Course } from '../../../../../interfaces/courses';

const selectCoursesState = createFeatureSelector<CoursesState>('courses');

export const selectCourses = createSelector(
  selectCoursesState,
  (state) => state.courses
);

export const selectCoursesLoading = createSelector(
  selectCoursesState,
  (state) => state.loading
);

export interface AppState {
    courses: {
      loading: boolean;
      courses: Course[];
      error: string | null;
    };
  }