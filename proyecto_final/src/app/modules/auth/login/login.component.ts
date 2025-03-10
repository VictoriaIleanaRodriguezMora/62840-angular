import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.emailValidator()]],
      password: ['', [Validators.required, this.passwordValidator()]],
    });
  }

  private emailValidator(): ValidatorFn {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) return null;
      return emailPattern.test(control.value) ? null : { invalidEmail: true };
    };
  }

  private passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) return null;
      
      const errors: any = {};
      const value = control.value;
      
      if (value.length < 8) errors.minLength = true;
      if (!/[A-Z]/.test(value)) errors.uppercase = true;
      if (!/[a-z]/.test(value)) errors.lowercase = true;
      if (!/\d/.test(value)) errors.number = true;
      if (!/[@$!%*?&]/.test(value)) errors.specialChar = true;
      
      return Object.keys(errors).length ? errors : null;
    };
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
    } else {
      this.authService.login(this.loginForm.value)
    }
  }

}
