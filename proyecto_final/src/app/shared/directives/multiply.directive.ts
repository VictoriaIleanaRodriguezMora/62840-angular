import { Directive, ElementRef, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiply]',
  standalone: false
})
export class MultiplyDirective implements OnChanges {

  @Input() appMultiply? = 5; 

  constructor(private elementRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<unknown>) {
    this.updateViewContainer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appMultiply']) {
      this.updateViewContainer()
    }
  }

  updateViewContainer() {
    this.viewContainer.clear()
    for (let i = 0; i < (this.appMultiply || 10); i++) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }

}
