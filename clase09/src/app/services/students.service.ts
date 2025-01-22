import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// esta inyeccion lo que hace es que se pueda usar en todos lados .
/* Si quisiera acceder al array de students, en el módulo de cursos debería: "Comparación de hermanos e importar todo el componente", seria innecesario porque yo podria tener la logica en mi servicio  */

/* Los servicios funcionan con algo que se llama RxJS, es una libreria que usa angular para manipular la informacion. Tiene operadores como el map, of. Tambien permiten trabajar con Http */

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

// Hay que crear una variable para instanciar e importar la data 

private studentUrl = 'assets/students.json'

  constructor( private http: HttpClient ) { }

getStudents(): Observable

}
