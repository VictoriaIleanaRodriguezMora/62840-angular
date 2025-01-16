import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  // Los output siempre son de tipo EventEmitter
  @Output() myDrawerToggle = new EventEmitter();
}
