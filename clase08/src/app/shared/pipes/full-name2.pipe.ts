import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../modules/dashboard/pages/students/models/students';

@Pipe({
  name: 'fullName2',
  standalone: false
})
export class FullName2Pipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): unknown {
    return null;
  }

}
