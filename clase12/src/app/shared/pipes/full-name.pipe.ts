import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
  standalone: false
})

export class FullNamePipe implements PipeTransform {
  
    transform(value: string, type?: 'uppercase' | 'lowercase'): string {

    let result = value;

    if (type === 'lowercase') {
      result = value.toLowerCase();
    } else {
      result = value.toUpperCase();
    }

    return result
  }
}
