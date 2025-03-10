import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../../../../core/services/courses.service';
import { TeachersService } from '../../../../core/services/teachers.service';

interface Course {
  id: string;
  name: string;
}

interface Professor {
  id?: string;
  name: string;
  courseId: string;
}

@Component({
  selector: 'app-crear-profesor',
  standalone: false,
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  profesorForm: FormGroup;
  courses: Course[] = [];
  professors: Professor[] = [];

  constructor(
    private fb: FormBuilder,
    private teacherService: TeachersService,
    private coursesService: CoursesService
  ) {
    this.profesorForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      curso: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadCourses();
    this.loadProfessors();
  }

  loadCourses(): void {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  loadProfessors(): void {
    this.teacherService.getProfessors().subscribe(professors => {
      this.professors = professors;
    });
  }
  getCourseName(courseId: string): string {
    return this.courses.find(course => course.id === courseId)?.name || 'Curso no encontrado';
  }
  
  onSubmit(): void {
    if (this.profesorForm.valid) {
      const newProfessor: Professor = {
        name: this.profesorForm.value.nombre,
        courseId: this.profesorForm.value.curso
      };

      this.teacherService.createProfessor(newProfessor).subscribe(professors => {
        this.professors = professors;
        this.profesorForm.reset(); // Limpiar formulario tras crear
      });
    }
  }
}
