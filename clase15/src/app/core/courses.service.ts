import { Injectable } from '@angular/core';
import { Course } from '../interfaces/courses';
import { of, Observable, delay } from 'rxjs';
import { randomString } from '../shared/randomString';

let MY_FAKE_DATABASE: Course[] = [
  {
    id: randomString(6),
    name: 'Js'
  },
  {
    id: randomString(6),
    name: 'Des Web'
  },
]
@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  updateCourseById(id: string, data: { name: string }): Observable<Course[]> {
    MY_FAKE_DATABASE = MY_FAKE_DATABASE.map((course) => course.id === id ? { ...course, ...data } : course)
    return this.getCourses()
  }

  createCourse(payload: { name: string }): Observable<Course[]> {
    MY_FAKE_DATABASE.push({
      ...payload,
      id: randomString(6)
    })
    return this.getCourses()
  }

  getCourses(): Observable<Course[]> {
    return of([...MY_FAKE_DATABASE])
      .pipe(delay(500))
  }

  deleteCourseById(id: string): Observable<Course[]> {
    MY_FAKE_DATABASE = MY_FAKE_DATABASE.filter((course) => course.id != id);
    return this.getCourses();
  }

}