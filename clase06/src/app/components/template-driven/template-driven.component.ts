import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {
  // Modelo de Formulario, va a estar basado en una propiedad 'loginFormMode' (lo elijo yo). Ahí pongo los campos que quiero manejar y sus valores
  // 1° diferencia 
  // En reactive forms, yo generaba un objeto, FormGroup, definia los valores, validaciones, etc. Acá solo se crea un objeto con el nombre del campo y su valor .
  // ¿Como hago para conectar este modelo al html? 
  // Sobre la etiqueta form se aplica una directiva. Tengo que generar una especie de referencia al FormGroup pero en el html #loginForm="ngForm" ngForm sale de la importacion del app.module, si no, no lo reconoceria 

  loginFormModel = {
    emailTD: "", // por defecto un campo en blanco
    passwordTD: "",
    rememberMeTD: false
  }

  onSubmit(ev: NgForm) {
    if (ev.invalid) {
      alert('El formulario es invalido!');
    } else {
      console.log(ev.value);
      alert('Datos enviados!');
      ev.reset();
    }
  }


}
