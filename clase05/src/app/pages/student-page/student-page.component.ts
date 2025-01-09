import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Student } from '../../models';
import { StudentsListComponent } from '../../components/students-list/students-list.component';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.scss'
})
export class StudentPageComponent implements AfterViewInit {

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
  @ViewChild("titleApproveds") titleApproveds?: ElementRef<HTMLElement> // Le puedo pasar el Id de un elemento o
  @ViewChild(StudentsListComponent) studentsListComponent?: ElementRef<HTMLElement> // El nombre de la clase de un Componente
// Hay algunas librerias, angular material que si usan el ViewChild 
  
  constructor() {
    console.log(this.titleApproveds);
  }
  ngAfterViewInit(): void {
    console.log(this.titleApproveds);
    console.log(this.studentsListComponent);
    
  }
  onRemove(idDelEstudianteAEliminar: any, from: 'studentApproved' | 'studentDisapproved'): void {
    console.log("Debo eliminar el id: ", idDelEstudianteAEliminar, " de ", from);
    this[from] = this[from].filter((elId) => elId.id !== idDelEstudianteAEliminar)
  }

}
