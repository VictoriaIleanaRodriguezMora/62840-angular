// courses.actions.ts
import { createAction, props } from '@ngrx/store';
import { Course } from '../../../../../interfaces/courses';

export const loadCourses = createAction('[Courses] Load Courses');
export const loadCoursesSuccess = createAction('[Courses] Load Courses Success', props<{ courses: Course[] }>());
export const loadCoursesFailure = createAction('[Courses] Load Courses Failure', props<{ error: string }>());

export const deleteCourse = createAction('[Courses] Delete Course', props<{ id: string }>());
export const deleteCourseSuccess = createAction('[Courses] Delete Course Success', props<{ id: string }>());
export const deleteCourseFailure = createAction('[Courses] Delete Course Failure', props<{ error: string }>());