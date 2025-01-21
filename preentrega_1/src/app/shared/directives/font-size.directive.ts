import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: false
})

export class FontSizeDirective implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.updateFontSize(); 
  }

  private updateFontSize(): void {
    this.elementRef.nativeElement.style.fontSize = '20px'; 
    this.elementRef.nativeElement.style.backgroundColor = 'yellow'; 
  }
}
