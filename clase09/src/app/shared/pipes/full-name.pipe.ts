import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // Con este nombre debe ser llamado
  name: 'fullName',
  standalone: false
})

// el retorno de esta funcion es lo que luego se ve en la vista
export class FullNamePipe implements PipeTransform {
  /* la propiedad value, es lo 1ro que está adelante del pipe */
  /* tengo que sacarle el tipo unknown para que funcione */

  /* yo quiero que si el 1er argumento es 'lowercase', la funcion sea toLowerCase  */

  // 1° MANERA:
  // transform(value: string, ...args: string[]): string {
  // 2° MANERA:
  // transform(value: string, type: 'uppercase' | 'lowercase'): string {
  // 3° MANERA:
    /* si hago al argumento: type, opcional, el usuario no va a estar obligado a mandar nada, va a caer por defecto en el else */
    transform(value: string, type?: 'uppercase' | 'lowercase'): string {

    // console.log(args); // ['hola']

    let result = value;

    if (type === 'lowercase') {
      result = value.toLowerCase();
    } else {
      result = value.toUpperCase();
    }

    return result
    // return value.toUpperCase();

  }

}
