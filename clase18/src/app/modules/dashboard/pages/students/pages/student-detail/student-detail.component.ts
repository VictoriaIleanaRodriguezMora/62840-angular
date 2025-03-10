import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../../../../core/services/students.service';
import { Student } from '../../../../../../interfaces/students';
import { EnrollmentDetail } from '../../../../../../interfaces/enrollment-detail';
import { Course } from '../../../../../../interfaces/courses';
import { AuthService } from '../../../../../../core/services/auth.service';
import { forkJoin, map, Observable } from 'rxjs';
import { User } from '../../../../../../interfaces/user';

@Component({
  selector: 'app-student-detail',
  standalone: false,

  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent implements OnInit {
  studentId: string = '';
  student: Student | null = null;
  enrollments: EnrollmentDetail[] = [];
  isAdmin$: Observable<User | null>;
  displayedColumns: string[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef

  ) {
    this.isAdmin$ = this.authService.isAdmin$;

  }

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.params['id'];
    console.log("ID del estudiante:", this.studentId); 

    this.studentsService.getStudentDetail(this.studentId).subscribe((studentData) => {
      console.log("studentData:", studentData); 

      this.student = studentData;
      console.log("Estudiante:", this.student); 
    
      this.studentsService.getStudentCourses(this.studentId).subscribe((courses: Course[]) => {
        console.log("Cursos del estudiante:", courses); 
        this.enrollments = courses.map((course) => ({
          id: course.id,
          student: this.student!,
          course,
          error: '',
          enrollmentDetail: null,
        }));
        console.log("Enrollments:", this.enrollments); 
      });
    });
    

    this.isAdmin$.subscribe((user: User | null) => {
      const isAdmin = user !== null;
      this.displayedColumns = isAdmin ? ['name', 'actions'] : ['name'];
      this.cdr.detectChanges();
    });

  }

  unenroll(enrollment: EnrollmentDetail) {
    if (this.student) {
      this.studentsService.deleteEnrollment(enrollment.student.id, enrollment.course.id)
        .subscribe(() => {
          this.enrollments = this.enrollments.filter(e => e.id !== enrollment.id);
        });
    }
  }

}