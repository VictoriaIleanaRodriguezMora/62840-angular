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
  ngOnInit(): void {
    this.isLoading = true; // Cuando se inicializa el componente se pasa true, para que aunque sean 0.5segundos, se vea el spiner
    this.courseService.getCourses()
      .subscribe({
        next: (cursos) => {
          console.log("Recbo datos de getCourses: ", cursos);
          this.coursesData = [...cursos];
        },
        error: () => {
          this.isLoading = false; // Cuando termina la carga, lo paso a false
        },
        complete: () => {
          this.isLoading = false; // Cuando termina la carga, lo paso a false
        },
      })
  }

}
