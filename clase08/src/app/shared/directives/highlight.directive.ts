import { Directive, ElementRef, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';

/* Quiero que si el usuario no especifica que color de fondo poner, enviar uno por defecto. 
Para eso, pued pedir/usar @Input. El nombre de la propiedad tiene que ser el mismo del selector, eso va a permitir  
enviar como argumento algun dato
*/

@Directive({
  // nombre para usar la directiva
  selector: '[appHighlight]',
  standalone: false
})

export class HighlightDirective implements OnChanges {

  @Input() colorHighlight: string = "yellow" // El valor de esta propiedad puedo recibirla desde el elemento o componente padre
  @Input() bolder: boolean = false;

  // Emitir un evento myColorUpdated
  @Output() myColorUpdated = new EventEmitter(); // <-- Especifica el tipo de dato a emitir (ej: string)

  constructor(private elementRef: ElementRef) {
    // Aparece 2 veces este console log porque lo estoy usando en una tabla y se renderiza 1 vez por fila
    console.log("EJECUTADO CONSTRUCTOR");
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.backgroundColor = this.colorHighlight // no funciona

  }

  // Cuando
  ngOnChanges(changes: SimpleChanges): void {
    console.log("EJECUTADO ngOnChanges");
    console.log(changes);

    // Si dentro de los cambios, viene la propiedad 'colorHighlight', entonces debo hacer los cambios 
    // Pero es distinta la asignacion
    if (changes['colorHighlight']) {
      this.updateColor()
    }

    if (changes['bolder']) {
      this.updateFontWeight()
    }
  }

  updateColor() {
    if (this.colorHighlight !== undefined && this.colorHighlight !== null) {
      this.elementRef.nativeElement.style.backgroundColor = this.colorHighlight
    } else {
      this.colorHighlight = 'yellow'
    }
    // const color = this.colorHighlight !== undefined && this.colorHighlight !== null ? this.colorHighlight : 'yellow';
    // this.elementRef.nativeElement.style.backgroundColor = color;
    // this.myColorUpdated.emit(this.colorHighlight); //Output
    this.myColorUpdated.emit(); //Output

  }

  updateFontWeight() {
    if (this.bolder === true) {
      this.elementRef.nativeElement.style.fontWeight = 'bolder';
    } else {
      this.elementRef.nativeElement.style.fontWeight = 'unset';
    }
    // const fontWeight = this.bolder === true ? 'bolder' : 'unset';
    // this.elementRef.nativeElement.style.fontWeight = fontWeight;
  }
}
