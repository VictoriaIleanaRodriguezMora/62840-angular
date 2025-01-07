import { Component, Input } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})
export class StudentsListComponent {
  // @Input() students: Student[] = []; // Inicializarlo como un array vacio es 1 manera. O: 
  // Esto significa que yo voy a recibir 'students', cuando el componente HIJO se use en el compnente PADRE

  @Input({ required: true }) students!: Student[]; // el ! le indica a ts que estoy segura que voy a recibir la propiedad estudiante. Pero al marcarlo como requerido, me da error en donde estoy usando este componente HIjo, porque indica, que es necesario indicar la propiedad students

  // @Input() students!: Student[]; // El require es opcional, si lo quito, no da error en el componente padre
}
