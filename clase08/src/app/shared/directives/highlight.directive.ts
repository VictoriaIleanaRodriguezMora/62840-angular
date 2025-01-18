import { Directive, ElementRef } from '@angular/core';

@Directive({
  // nombre para usar la directiva
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) {
    // Aparece 2 veces este console log porque lo estoy usando en una tabla y se renderiza 1 vez por fila
    console.log(this.elementRef);

    this.elementRef.nativeElement.style.backgroundColor = "yellow"

  }

}
