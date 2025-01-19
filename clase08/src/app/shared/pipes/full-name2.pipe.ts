import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../modules/dashboard/pages/students/models/students';

@Pipe({
  name: 'fullName2',
  standalone: false
})
export class FullName2Pipe implements PipeTransform {
  transform(value: Student): unknown {
    // console.log('Value passed to pipe:', value); // Para depurar
    if (!value || !value.lastName || !value.name) {
      return 'Información incompleta'; // Manejar casos donde falta información
    }
    return `${value.lastName.toUpperCase()}, ${value.name}`;
  }
}
