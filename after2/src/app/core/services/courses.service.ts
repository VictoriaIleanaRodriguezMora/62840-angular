import { Injectable } from '@angular/core';
import { Course } from '../../interfaces/courses';
import { of, Observable, delay, concatMap } from 'rxjs';
import { randomString } from '../../shared/randomString';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

// ya no se usa

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getCourseDetail(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${environment.baseApiUrl}/courses/${id}?_embed=professors`) // si el día de mañana despliego mi aplicacion no puedo dejar hardcodeada acá algo apuntando a localhost
  }

  updateCourseById(id: string, data: { name: string }): Observable<Course[]> {
    return this.httpClient.patch<Course>(`${environment.baseApiUrl}/courses/${id}`, data)// el 2do parametro es el body, es lo que voy a pushear
      .pipe(concatMap(() => this.getCourses()))

  }

  createCourse(payload: { name: string }): Observable<Course[]> {
    return this.httpClient.post<Course>(`${environment.baseApiUrl}/courses`, payload)// el 2do parametro es el body, es lo que voy a pushear
      .pipe(concatMap(() => this.getCourses()))

  }

  getCourses(): Observable<Course[]> {
    console.log("environment.baseApiUrl", environment.baseApiUrl);
    const myHeaders = new HttpHeaders().append('Authorization', localStorage.getItem('access_token') || '')

    return this.httpClient.get<Course[]>(`${environment.baseApiUrl}/courses`, {
      headers: myHeaders
    }) 
  }

  deleteCourseById(id: string): Observable<Course[]> {
    return this.httpClient.delete<Course>(`${environment.baseApiUrl}/courses/${id}`) // pasa lo mismo que en createCourses
      .pipe(concatMap(() => this.getCourses()))
  }

}