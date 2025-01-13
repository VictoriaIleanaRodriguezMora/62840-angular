import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  loginForm: FormGroup;
  /* FormGroup es una clase que va a representar un grupo de controles. (cada input dentro del form) */
  /* ¿Cómo le indico a Angular que esos controles pertenecen al loginForm ? */
  /* 
  cada [] de los controladores recibe  argumentos. La primer posicion es el valor por defecto, la segunda es un Validador o un array de validadores
  */
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      emailFB: [null, [Validators.required, Validators.email]],
      passwordFB: [null, [Validators.required, Validators.minLength(6)]],
      rememberMeFB: []
    })
  }

}
