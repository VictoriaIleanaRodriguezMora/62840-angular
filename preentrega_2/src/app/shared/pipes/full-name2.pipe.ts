import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../interfaces/students';
@Pipe({
  name: 'fullName2',
  standalone: false
})
export class FullName2Pipe implements PipeTransform {
  transform(value: Student): unknown {
    // console.log('Value passed to pipe:', value); // Para depurar
    if (!value || !value.lastName || !value.name) {
      return 'Información incompleta'; 
    }
    return `${value.lastName.toUpperCase()}, ${value.name}`;
  }
}
