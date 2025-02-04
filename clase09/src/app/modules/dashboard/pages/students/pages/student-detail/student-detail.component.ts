import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: false,

  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {

  studentId: string;
  fullName: string;

  constructor(private activatedRoute: ActivatedRoute) {
    // Es un objeto que tiene informacion de la ruta cargada actualmente 
    console.log(this.activatedRoute);
    // this.studentId = this.activatedRoute.snapshot.params.id // no me deja acceder así
    this.studentId = this.activatedRoute.snapshot.params['id'] // debo acceder así

    const name = this.activatedRoute.snapshot.queryParams['name']
    const lastName = this.activatedRoute.snapshot.queryParams['lastName']
    this.fullName = `${name}, ${lastName}`

  }
}
