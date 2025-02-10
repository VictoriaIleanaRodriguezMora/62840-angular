import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../../core/courses.service';
import { Course } from '../../../../interfaces/courses';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent implements OnInit {

  isLoading = false; // Inicia en false
  coursesData: Course[] = [];

  constructor(private courseService: CoursesService) { }

  handleCoursesUpdate(cursos: Course[]): void {
    this.coursesData = [...cursos];
  }

  ngOnInit(): void {
    this.isLoading = true; // Cuando se inicializa el componente se pasa true, para que aunque sean 0.5segundos, se vea el spiner
    this.courseService.getCourses()
      .subscribe({
        next: (cursos) => {
          console.log("Recbo datos de getCourses: ", cursos);
          // this.coursesData = [...cursos]; // Fue reemplazado por la linea siguiente
          this.handleCoursesUpdate(cursos)
        },
        error: () => {
          this.isLoading = false; // Cuando termina la carga, lo paso a false
        },
        complete: () => {
          this.isLoading = false; // Cuando termina la carga, lo paso a false
        },
      })
  }

  onDelete(idFn: string) {
    this.isLoading = true;
    if (confirm("Está seguro?")) {
      // Operacion delete
      // Estamos trabajando con observables de manera ASINCRONICA 
      this.courseService.deleteCourseById(idFn) // cómo devuelve un observable me tengo que suscribir para recibir la respuesta
        .subscribe({
          next: (cursos) => {
            console.log("cursos ACTUALIZADA", cursos);
            // this.coursesData = [...cursos]; //Fue reemplazado por la linea siguiente
            this.handleCoursesUpdate(cursos)
          },
          error: () => {
            this.isLoading = false; 
          },
          complete: () => {
            this.isLoading = false; 
          },
        })
    }
  }
}
