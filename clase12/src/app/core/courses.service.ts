import { Injectable } from '@angular/core';
import { Course } from '../interfaces/courses';
import { of, Observable, delay } from 'rxjs';
import { randomString } from '../shared/randomString';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // El servicio es el que envia los datos al componente
  // Trabajamos con Observables para simular que estos datos vienen desde una API externa/bdd. Porque cuando realmente algún dia yo consu,a una API, va a devolver un observable, y vamos a hacer uso de un servico que se llama HttpClient que devuelve observables, asique nos adelantamos a esa forma de trabajar
  // El método getCourses va a devolver un array de Courses
  getCourses(): Observable<Course[]> {
    // El método of converte a observable lo que le paso 
    return of([
      {
        id: randomString(6),
        name: 'Js'
      },
      {
        id: randomString(6),
        name: 'Des Web'
      },
    ])
      .pipe(delay(1000))
  }
}