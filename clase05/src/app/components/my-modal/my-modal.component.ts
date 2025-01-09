import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.scss'
})
export class MyModalComponent {
@Input() visible: boolean = false; 

@Output() close = new EventEmitter()
}
