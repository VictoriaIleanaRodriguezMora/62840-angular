import { Injectable } from '@angular/core';
import { LoginPayload } from '../interfaces/login-payload';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';
import { randomString } from '../shared/randomString';

const FAKE_USERS_DB: User[] = [
  {
    id: randomString(6),
    email: 'admin@email.com',
    password: '123456',
    name: 'Administador',
    role: 'ADMIN'
  },
  {
    id: randomString(6),
    email: 'employee@email.com',
    password: '123456',
    name: 'Empleado',
    role: 'EMPLOYEE'
  }
]

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser$ = new BehaviorSubject(null);
  authUser$ = this._authUser$.asObservable();

  login(payload: LoginPayload): void {
    // this._authUser$.complete(); // ❌ Esto cierra el Subject
    // this._authUser$.next(); // ✅ Emite el valor correctamente
  }
}
