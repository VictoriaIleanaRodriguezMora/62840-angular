import { Injectable } from '@angular/core';
import { LoginPayload } from '../../interfaces/login-payload';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { randomString } from '../../shared/randomString';
import { Router } from '@angular/router';

const FAKE_USERS_DB: User[] = [
  {
    id: randomString(6),
    email: 'a',
    password: '1',
    name: 'Administador',
    accessToken: 'qwerty123',
    role: 'ADMIN'
  },
  {
    id: randomString(6),
    email: 'e',
    password: '1',
    name: 'Empleado',
    accessToken: '123qwerty',
    role: 'EMPLOYEE'
  }
]

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _authUser$ = new BehaviorSubject<null | User>(null);
  authUser$ = this._authUser$.asObservable();

  constructor(private router: Router) {
  }

  get isAdmin$(): Observable<boolean> {
    return this.authUser$.pipe(
      map(user => {
        return user?.role === "ADMIN";
      })
    );
  }

  login(payload: LoginPayload): void {
    console.log("payload", payload);

    const loginResult = FAKE_USERS_DB.find((user) => {
      if (user.email === payload.email && user.password === payload.password) {
        return user;
      }
      return null;
    });

    if (!loginResult) {
      alert("email o password invalidos");
      return;
    }

    console.log("loginResult antes de guardar:", loginResult);
    localStorage.setItem("access_token", loginResult.accessToken);
    this._authUser$.next(loginResult);
    console.log("Estado actual de _authUser$:", this._authUser$.value); // Verificar qué usuario se guardó

    this.router.navigate(["dashboard", "home"]);
  }

  logout() {
    localStorage.removeItem("access_token")
    this._authUser$.next(null)
    this.router.navigate(['auth', 'login'])
  }

  isAuthenticated(): Observable<boolean> {
    const accessToken = localStorage.getItem("access_token");
    const storageUser = FAKE_USERS_DB.find(user => user.accessToken === accessToken);

    console.log("Usuario obtenido desde localStorage:", storageUser);

    if (storageUser) {
      this._authUser$.next(storageUser);
    } else {
      this._authUser$.next(null);
    }

    return this.authUser$.pipe(map(user => {
      console.log("Usuario en authUser$ dentro de isAuthenticated:", user);
      return !!user;
    }));
  }

}  