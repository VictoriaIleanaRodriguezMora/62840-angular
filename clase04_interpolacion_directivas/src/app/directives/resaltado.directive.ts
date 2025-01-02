import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  // El tipo de argumento es ElementRef
  constructor(private elementRef: ElementRef) {

    console.log(elementRef);// esto es la referencia al elemento del DOM. Es el objeto del DOM que yo conozco.
    // elementRef > nativeElement > acá estan todas las propiedades del dom que conozco. Acá opero con el DOM
    // style.prop
    elementRef.nativeElement.style.backgroundColor = 'purple'
  }
  
}
