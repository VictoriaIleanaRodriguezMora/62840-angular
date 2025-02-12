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

  isLoading = false; 
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
    this.matDialog
    .open(CourseFormDialogComponent, { data: { editingCourse } }) 
      .afterClosed() 
      .subscribe({
        next: (data) => {
          if (!!data) {
            if (!!editingCourse) {
              this.updateCourse(editingCourse.id, data)
            } else {
              this.createCourse(data)
            }
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
    this.courseService.createCourse(dataa) 
      .subscribe({ 
        next: (dataa) => this.handleCoursesUpdate(dataa),
        error: (error) => this.isLoading = false,
        complete: () => this.isLoading = false,

      })
  }

  ngOnInit(): void {
    this.isLoading = true; 
    this.courseService.getCourses()
      .subscribe({
        next: (cursos) => {
          console.log("Recbo datos de getCourses: ", cursos);
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

  onDelete(idFn: string) {
    this.isLoading = true;
    if (confirm("Está seguro?")) {
      this.courseService.deleteCourseById(idFn) 
        .subscribe({
          next: (cursos) => {
            console.log("cursos ACTUALIZADA", cursos);
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
