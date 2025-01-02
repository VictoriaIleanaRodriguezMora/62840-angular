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
  estudiantes: string[] = ['Estudiante', 'Estudiante', 'Estudiante']
  loading: boolean = true
  nombreUser: string = 'Fulano'
  /* estadoEnvio: 'pendiente' | 'entregado' | 'rechazado' = 'jhgfhjf' da error porque tiene que ser de alguno de esos tipos */
  // /* 
  constructor() {
    // setInterval(() => {
    //   this.hayError = !this.hayError
    // }, 1000)
    // setInterval(() => { this.loading = !this.loading }, 2000);
  }
  // */
// No se bien porque o cuando se usa MouseEvente, y cuando se usa otra interfaz
  onClick(event: MouseEvent): void {
    console.log("click");
    console.log(event);
  }

}
