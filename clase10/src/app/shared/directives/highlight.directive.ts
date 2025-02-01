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

  @Input() appHighlight = "yellow" // El valor de esta propiedad puedo recibirla desde el elemento o componente padre
  @Input() bolder = false;

  // Emitir un evento colorUpdated
  @Output() colorUpdated = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    // Aparece 2 veces este console log porque lo estoy usando en una tabla y se renderiza 1 vez por fila
    // console.log("EJECUTADO CONSTRUCTOR");
    // console.log(this.elementRef);
    this.elementRef.nativeElement.style.backgroundColor = this.appHighlight // no funciona
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("EJECUTADO ngOnChanges");
    // console.log(changes);

    // Si dentro de los cambios, viene la propiedad 'appHighlight', entonces debo hacer los cambios 
    // Pero es distinta la asignacion
    if (changes['appHighlight']) {
      this.updateColor()
    }

    if (changes['bolder']) {
      this.updateFontWeight()
    }

  }

  updateColor() {
    this.elementRef.nativeElement.style.backgroundColor = this.appHighlight || 'yellow' // 
    this.colorUpdated.emit()
  }

  updateFontWeight() {
    this.elementRef.nativeElement.style.fontWeight = this.bolder ? 'bolder' : 'unset'
  }

}
