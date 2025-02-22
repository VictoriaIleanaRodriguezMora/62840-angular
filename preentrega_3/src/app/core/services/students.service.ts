import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/students';
import { of, Observable, delay, concatMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private httpClient: HttpClient) {}

  getStudentDetail(id: string): Observable<Student> {
    return this.httpClient.get<Student>(`${environment.API_URL_STUDENTS}/students/${id}`);
  }

  updateStudentById(id: string, data: { name: string; lastName: string }): Observable<Student[]> {
    return this.httpClient.patch<Student>(`${environment.API_URL_STUDENTS}/students/${id}`, data)
      .pipe(concatMap(() => this.getStudents()));
  }

  createStudent(payload: { name: string; lastName: string }): Observable<Student[]> {
    return this.httpClient.post<Student>(`${environment.API_URL_STUDENTS}/students`, payload)
      .pipe(concatMap(() => this.getStudents()));
  }

  getStudents(): Observable<Student[]> {
    console.log("environment.API_URL_STUDENTS", environment.API_URL_STUDENTS);
    const myHeaders = new HttpHeaders().append('Authorization', localStorage.getItem('access_token') || '');
    return this.httpClient.get<Student[]>(`${environment.API_URL_STUDENTS}/students`, { headers: myHeaders });
  }

  deleteStudentById(id: string): Observable<Student[]> {
    return this.httpClient.delete<Student>(`${environment.API_URL_STUDENTS}/students/${id}`)
      .pipe(concatMap(() => this.getStudents()));
  }
}
