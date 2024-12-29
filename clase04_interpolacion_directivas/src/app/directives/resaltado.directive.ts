import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  // El tipo de argumento es ElementRef
  constructor(private elementRef: ElementRef) {
    console.log(elementRef);
  }
}
