import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

// esta inyeccion lo que hace es que se pueda usar en todos lados .
/* Si quisiera acceder al array de students, en el módulo de cursos debería: "Comparación de hermanos e importar todo el componente", seria innecesario porque yo podria tener la logica en mi servicio  */

/* Los servicios funcionan con algo que se llama RxJS, es una libreria que usa angular para manipular la informacion. Tiene operadores como el map, of. Tambien permiten trabajar con Http */

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  // Hay que crear una variable para instanciar e importar la data 

  private studentUrl = 'assets/students.json'  // ruta privada donde tengo la data 

  constructor(private http: HttpClient) { }

  // primer metodo dentro de nuestro servicio
  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.studentUrl)
  }

  // este metodo tiene un parametro. esto es lo que estoy mandando no lo que estoy recibiendo 
  // donde recibo el id?
  getStudentsById(myId: string): Observable<any> {
    // vamos a hacer un mapeo / editar
    return this.http.get<any[]>(this.studentUrl).pipe(
      // map((students) => {
      //   return students.find((student) => { return student.id === myId })
      // })
      map(students => students.find(student => student.id === myId))
    )
  }

}
