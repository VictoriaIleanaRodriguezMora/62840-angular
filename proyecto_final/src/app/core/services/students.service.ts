import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/students';
import { of, Observable, delay, concatMap, forkJoin, map, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Course } from '../../interfaces/courses';
import { Enrollment } from '../../interfaces/enrollment';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  constructor(private httpClient: HttpClient) { }

  getStudentById(id: string): Observable<Student> {
    return this.httpClient.get<Student>(`${environment.baseApiUrl}/students/${id}`);
  }

  getStudentDetail(id: string): Observable<Student> {
    console.log(("getStudentDetail SERVICIO: " + id));

    return this.httpClient.get<Student>(`${environment.baseApiUrl}/students/${id}`);
  }

  updateStudentById(id: string, data: { name: string; lastName: string, age: number }): Observable<Student[]> {
    return this.httpClient.patch<Student>(`${environment.baseApiUrl}/students/${id}`, data)
      .pipe(concatMap(() => this.getStudents()));
  }

  createStudent(payload: { name: string; lastName: string, age: number }): Observable<Student[]> {
    return this.httpClient.post<Student>(`${environment.baseApiUrl}/students`, payload)
      .pipe(concatMap(() => this.getStudents()));
  }

  getStudents(): Observable<Student[]> {
    const myHeaders = new HttpHeaders().append('Authorization', localStorage.getItem('access_token') || '');
    return this.httpClient.get<Student[]>(`${environment.baseApiUrl}/students`, { headers: myHeaders });
  }

  deleteStudentById(id: string): Observable<Student[]> {
    return this.httpClient.delete<Student>(`${environment.baseApiUrl}/students/${id}`)
      .pipe(concatMap(() => this.getStudents()));
  }

  getStudentCourses(studentId: string): Observable<Course[]> {
    return this.httpClient.get<Enrollment[]>(`${environment.baseApiUrl}/enrollments?studentId=${studentId}`).pipe(
      map((enrollments) => enrollments.map((enrollment) => enrollment.courseId)),
      switchMap((courseIds) =>
        forkJoin(courseIds.map((id) => this.httpClient.get<Course>(`${environment.baseApiUrl}/courses/${id}`)))
      )
    );
  }

  deleteEnrollment(studentId: string, courseId: string): Observable<void> {
    return this.httpClient.get<Enrollment[]>(`${environment.baseApiUrl}/enrollments?studentId=${studentId}&courseId=${courseId}`).pipe(
      switchMap((enrollments) => {
        if (enrollments.length === 0) {
          throw new Error('No se encontró la inscripción');
        }
        const enrollmentId = enrollments[0].id; // Tomamos el ID de la inscripción
        return this.httpClient.delete<void>(`${environment.baseApiUrl}/enrollments/${enrollmentId}`);
      })
    );
  }


}
