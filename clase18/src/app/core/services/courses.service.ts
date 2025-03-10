import { Injectable } from '@angular/core';
import { Course } from '../../interfaces/courses';
import { of, Observable, delay, concatMap } from 'rxjs';
import { randomString } from '../../shared/randomString';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EnrollmentDetail } from '../../interfaces/enrollment-detail';

@Injectable({ providedIn: 'root' })

export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getCourseDetail(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${environment.baseApiUrl}/courses/${id}?_embed=professors`)
  }

  updateCourseById(id: string, data: { name: string }): Observable<Course[]> {
    return this.httpClient.patch<Course>(`${environment.baseApiUrl}/courses/${id}`, data)
      .pipe(concatMap(() => this.getCourses()))

  }

  createCourse(payload: { name: string }): Observable<Course[]> {
    return this.httpClient.post<Course>(`${environment.baseApiUrl}/courses`, payload)
      .pipe(concatMap(() => this.getCourses()))

  }

  getCourses(): Observable<Course[]> {
    const myHeaders = new HttpHeaders().append('Authorization', localStorage.getItem('access_token') || '')

    return this.httpClient.get<Course[]>(`${environment.baseApiUrl}/courses`, {
      headers: myHeaders
    })
  }

  deleteCourseById(id: string): Observable<Course[]> {
    return this.httpClient.delete<Course>(`${environment.baseApiUrl}/courses/${id}`)
      .pipe(concatMap(() => this.getCourses()))
  }

  getEnrollmentsByCourse(courseId: string): Observable<EnrollmentDetail[]> {
    return this.httpClient.get<EnrollmentDetail[]>(`${environment.baseApiUrl}/enrollments?courseId=${courseId}&_expand=student`);
  }

  deleteEnrollment(enrollmentId: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseApiUrl}/enrollments/${enrollmentId}`);
  }

}