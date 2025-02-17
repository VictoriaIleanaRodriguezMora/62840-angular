import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../../../../core/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../../../../interfaces/courses';

@Component({
  selector: 'app-course-detail',
  standalone: false,

  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {
  isLoading = false;
  course: Course | null = null;
  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.isLoading = true;
    this.coursesService.getCourseDetail(this.activatedRoute.snapshot.params['id']) // importante
      .subscribe({
        next: (c) => {
          console.log("c",c);
          
          this.course = c
        },
        complete: () => {
          this.isLoading = false;

        },
        error: (error) => {
          this.isLoading = false;
          console.log(error);
        },
      })
  }


}
