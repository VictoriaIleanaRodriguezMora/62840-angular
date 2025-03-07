import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../../../../core/services/students.service';
import { Student } from '../../../../../../interfaces/students';
import { EnrollmentDetail } from '../../../../../../interfaces/enrollment-detail';
import { Course } from '../../../../../../interfaces/courses';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.params['id'];
  
    this.studentsService.getStudentDetail(this.studentId).subscribe((studentData) => {
      this.student = studentData;
  
      this.studentsService.getStudentCourses(this.studentId).subscribe((courses: Course[]) => {
        this.enrollments = courses.map((course) => ({
          id: course.id,  
          student: this.student!, 
          course,
        }));
      });
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