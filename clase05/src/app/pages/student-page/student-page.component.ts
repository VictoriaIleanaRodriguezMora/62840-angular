import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.scss'
})
export class StudentPageComponent implements AfterViewInit{

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
  // con el signo ?, acepto que esa propiedad pueda ser undefined, por errarle al nombre del elemento que quiero seleccionar
  // ElementRef<HTMLElement> esto esta diciendo que va a recibir la referencia a un elemento, a un elemento de tipo HTML
  @ViewChild("#titleApproveds") titleApproveds?: ElementRef<HTMLElement>

  constructor() {
    console.log(this.titleApproveds);

  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  onRemove(idDelEstudianteAEliminar: any, from: 'studentApproved' | 'studentDisapproved'): void {
    console.log("Debo eliminar el id: ", idDelEstudianteAEliminar, " de ", from);
    this[from] = this[from].filter((elId) => elId.id !== idDelEstudianteAEliminar)
  }

}
