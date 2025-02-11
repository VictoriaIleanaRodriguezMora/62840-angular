import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../../core/courses.service';
import { Course } from '../../../../interfaces/courses';
import { MatDialog } from "@angular/material/dialog"
import { CourseFormDialogComponent } from './components/course-form-dialog/course-form-dialog.component';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent implements OnInit {

  isLoading = false; // Inicia en false
  coursesData: Course[] = [];

  constructor(
    private courseService: CoursesService,
    private matDialog: MatDialog,
  ) { }

  handleCoursesUpdate(cursos: Course[]): void {
    this.coursesData = [...cursos];
  }

  openFormDialog(editingCourse?: Course) {
    if (editingCourse) {
      console.log("Se va a editar el curso: ", editingCourse);
    }
    // Este método abre el form 
    this.matDialog
    .open(CourseFormDialogComponent, { data: { editingCourse } }) // esto tiene un método  .afterClosed
      .afterClosed() // Ref.02 Lo recibo en la data de .afterClosed este devuelve un Observable
      .subscribe({
        next: (data) => {
          // recibo data si es el caso del confirm. Pero si es el cancelar recibo un undefined
          // console.log(data);
          //Entonces para crear un curso tengo que validar que la data no sea undefined
          if (!!data) {
            // crear o actualizar un curso
            if (!!editingCourse) {
              // actualizar
              this.updateCourse(editingCourse.id, data)
            } else {
              //crear
              this.createCourse(data)
            }
            // this.courseService.createCourse(data) // retorna un observable
            //   .subscribe({ // un subscribe dentro de un subrcibe no está bien visto
            //     next: (data) => this.handleCoursesUpdate(data)
            //   })
          }
        }
      })
  }

  updateCourse(id: string, data: { name: string }) {
    this.isLoading = true;
    this.courseService.updateCourseById(id, data)
      .subscribe({
        next: (data) => this.handleCoursesUpdate(data),
        error: (error) => this.isLoading = false,
        complete: () => this.isLoading = false

      })
  }

  createCourse(dataa: { name: string }) {
    this.isLoading = true;
    this.courseService.createCourse(dataa) // retorna un observable
      .subscribe({ // un subscribe dentro de un subrcibe no está bien visto
        next: (dataa) => this.handleCoursesUpdate(dataa),
        error: (error) => this.isLoading = false,
        complete: () => this.isLoading = false,

      })
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
