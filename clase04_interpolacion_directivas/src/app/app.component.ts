import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clase04_interpolacion_directivas';
  hayError: boolean = true;

  estadoEnvio: 'pendiente' | 'entregado' | 'rechazado' = 'pendiente'
  /* estadoEnvio: 'pendiente' | 'entregado' | 'rechazado' = 'jhgfhjf' da error porque tiene que ser de alguno de esos tipos */

  constructor() {
    setInterval(() => {
      this.hayError = !this.hayError
    }, 1000)
  }
}
