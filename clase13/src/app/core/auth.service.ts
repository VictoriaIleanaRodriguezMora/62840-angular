import { Injectable } from '@angular/core';
import { LoginPayload } from '../interfaces/login-payload';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { randomString } from '../shared/randomString';
import { Router } from '@angular/router';

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
  private _authUser$ = new BehaviorSubject<null | User>(null);
  authUser$ = this._authUser$.asObservable();

  constructor(private router: Router) { }

  login(payload: LoginPayload): void {
    const loginResult = FAKE_USERS_DB.find((user) => user.email === payload.email && user.password === payload.password)
    // Retorna User | undefined
    if (!loginResult) {
      alert("email o password invalidos")
      return;
    }

    this._authUser$.next(loginResult)
    this.router.navigate(['dashboard', 'home'])
  }

  isAuthenticated(): Observable<boolean>{
    // Los pipes transforman la emisión de un obsevable. El map me permite transformarlo
    return this._authUser$.pipe(map((x)=> !!x ? true : false))
  }
}
