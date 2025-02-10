import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../../../../interfaces/courses';

@Component({
  selector: 'app-courses-table',
  standalone: false,

  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.scss'
})
export class CoursesTableComponent {
  @Input() dataSource: Course[] = []; // necesito que la data a renderizar en la tabla sea la data del observable. Necesito poder recibirla desde el Padre. Ahora donde uso el c.hijo, en el c.padre puedo enviar una propiedad llamada [dataSource]
  @Output() toDelete = new EventEmitter<string>; // Va a emitir un string con el ID del curso a eliminar
  displayedColumns = ["id", "name","actions"];
}
