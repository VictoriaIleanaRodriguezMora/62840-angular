import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../../../../core/services/students.service';
import { Student } from '../../../../../../interfaces/students';

@Component({
  selector: 'app-student-detail',
  standalone: false,

  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent implements OnInit {
  studentId: string = '';
  student: Student | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.params['id'];

    this.studentsService.getStudentDetail(this.studentId)
    .subscribe((studentData) => {
      console.log("************* studentData", studentData);

      this.student = studentData;
    });
  }
}