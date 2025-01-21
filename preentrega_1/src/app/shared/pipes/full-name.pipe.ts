import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interfaces/students';

@Pipe({
  name: 'fullName',
  standalone: false
})
export class FullNamePipe implements PipeTransform {

  transform(value: Student): unknown {
    return `${value.lastName}, ${value.name}`;
  }

}
