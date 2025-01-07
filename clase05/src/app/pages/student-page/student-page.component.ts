import { Component } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.scss'
})
export class StudentPageComponent {

  studentApproved: Student[] = [
    { id: 1, name: "Fulano" },
    { id: 2, name: "Mengano" },
    { id: 3, name: "Sultano" },
  ]

  studentDisapproved: Student[] = [
    { id: 4, name: "Estudiante A" },
    { id: 5, name: "Estudiante B" },
    { id: 6, name: "Estudiante C" },
  ]


}
