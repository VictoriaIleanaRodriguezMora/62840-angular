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

    console.log(this.loginForm);

  }
  /* GETTER */
  myControl(ctrl: string) {
    return this.loginForm.get(ctrl)
  }
  // Funcion explayada
  myControlIsValidOrInvalid(controlName: string, nameClass: 'valid' | 'invalid'): boolean {
    const control = this.myControl(controlName);

    if (!control) {
      // Si el control no existe, siempre devuelvo false
      return false;
    }

    if (nameClass === 'valid') {
      return control.valid && control.touched;
    }

    if (nameClass === 'invalid') {
      return control.invalid && control.touched;
    }

    return false;
  }
  /* --------  FUNCION RESUMIDA -------- --------  FUNCION RESUMIDA --------*/
  /* myControlIsValidOrInvalid(controlName: string, nameClass: 'valid' | 'invalid'): boolean {
     const control = this.myControl(controlName);
     return (
       !!control &&
       ((nameClass === 'valid' && control.valid && control.touched) ||
         (nameClass === 'invalid' && control.invalid && control.touched))
     );
   }*/
  /* return control?.touched && (control.valid || control.invalid); esto me da error porque el ? permite que sea undefined */
  /* !!control: Esto asegura que el control existe y no es null o undefined. */


  controllerErrors(controller: string) {
    const control = this.myControl(controller);
    return control?.errors || null;
  }

  hasErrors(controller: string, error: string) {
    const control = this.myControl(controller);
    return control?.touched && control?.hasError(error);
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      alert('El form es invalido!');
      this.loginForm.markAllAsTouched();
      console.log('AQUÍ');
    } else {
      alert('Los datos se enviaron!');
      console.log(this.loginForm.value);
      this.loginForm.reset();
    }
  }
  

}
