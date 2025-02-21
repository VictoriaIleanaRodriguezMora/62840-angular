import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-alert',
  standalone: false,

  templateUrl: './my-alert.component.html',
  styleUrl: './my-alert.component.scss'
})
export class MyAlertComponent {
  @Input() contentAlert: string | null = null;
  
  /* constructor(private router: Router) { }
  
  redirect() {
    this.router.navigate(['/dashboard/courses']); // Redirige al hacer clic
  } */
}
