import { Injectable } from '@angular/core';
import { Course } from '../interfaces/courses';
import { of, Observable, delay, concatMap } from 'rxjs';
import { randomString } from '../shared/randomString';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// ya no se usa

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getCourseDetail(id: string): Observable<Course> {
// este es sólo el detalle del curso, no muestra los docentes
    // return this.httpClient.get<Course>(`${environment.baseApiUrl}/courses/${id}`) // si el día de mañana despliego mi aplicacion no puedo dejar hardcodeada acá algo apuntando a localhost
    
    return this.httpClient.get<Course>(`${environment.baseApiUrl}/courses/${id}?_embed=professors`) // si el día de mañana despliego mi aplicacion no puedo dejar hardcodeada acá algo apuntando a localhost
  }

  updateCourseById(id: string, data: { name: string }): Observable<Course[]> {
    // MY_FAKE_DATABASE = MY_FAKE_DATABASE.map((course) => course.id === id ? { ...course, ...data } : course)
    // return this.getCourses()
    return this.httpClient.patch<Course>(`${environment.baseApiUrl}/courses/${id}`, data)// el 2do parametro es el body, es lo que voy a pushear
      .pipe(concatMap(() => this.getCourses()))

  }

  createCourse(payload: { name: string }): Observable<Course[]> {
    // MY_FAKE_DATABASE.push({
    //   ...payload,
    //   id: randomString(6)
    // })
    // return this.getCourses()
    // return this.httpClient.post<Course>(`${environment.baseApiUrl}/courses`, payload) // este return da error porque el post devuelve un curso, pero el metodo createCourse devuelve un array de cursos. entonces le puedo concatenar el metodo getCourses 
    // 1° crea el curso
    return this.httpClient.post<Course>(`${environment.baseApiUrl}/courses`, payload)// el 2do parametro es el body, es lo que voy a pushear
      //2° retorna el listado completo con el nuevo creado incluido 
      .pipe(concatMap(() => this.getCourses()))

  }

  getCourses(): Observable<Course[]> {
    console.log("environment.baseApiUrl", environment.baseApiUrl);
    // return of([...MY_FAKE_DATABASE]).pipe(delay(500))
const myHeaders = new HttpHeaders().append('Authorization', localStorage.getItem('access_token') || '')

    return this.httpClient.get<Course[]>(`${environment.baseApiUrl}/courses`.{
      headers: myHeaders
    }) // si el día de mañana despliego mi aplicacion no puedo dejar hardcodeada acá algo apuntando a localhost
  }

  deleteCourseById(id: string): Observable<Course[]> {
    // MY_FAKE_DATABASE = MY_FAKE_DATABASE.filter((course) => course.id != id);
    // return this.getCourses();
    return this.httpClient.delete<Course>(`${environment.baseApiUrl}/courses/${id}`) // pasa lo mismo que en createCourses
      .pipe(concatMap(() => this.getCourses()))

  }

}