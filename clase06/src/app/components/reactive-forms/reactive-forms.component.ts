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
  /* GETTER */
  myControl(ctrl: string) {
    return this.loginForm.get(ctrl)
  }

  // Funcion explayada
  myControlIsValidOrInvalid(myControl: string): boolean {
    const control = this.myControl(myControl);
    // Verificar si el control existe
    if (!control) {
      return false;
    }
    // Verificar si el control fue tocado
    if (!control.touched) {
      return false;
    }
    // Verificar si el control es válido o inválido
    if (control.valid || control.invalid) {
      return true;
    }
    return false;
  }

  /* --------  FUNCION RESUMIDA -------- --------  FUNCION RESUMIDA --------
  myControlIsValidOrInvalid(myControl: string): boolean {
      const control = this.myControl(myControl);
      return !!control && control.touched && (control.valid || control.invalid);
    } 
      */
  /* return control?.touched && (control.valid || control.invalid); esto me da error porque el ? permite que sea undefined */
  /* !!control: Esto asegura que el control existe y no es null o undefined. */

}
