import { Injectable } from '@angular/core';
import { LoginPayload } from '../../interfaces/login-payload';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { randomString } from '../../shared/randomString';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../store/auth/auth.action';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { selectAuthUser } from '../../store/auth/auth.selector';

// const FAKE_USERS_DB: User[] = [
//   {
//     id: randomString(6),
//     email: 'a',
//     password: '1',
//     name: 'Administador',
//     accessToken: 'qwerty123',
//     role: 'ADMIN'
//   },
//   {
//     id: randomString(6),
//     email: 'e',
//     password: '1',
//     name: 'Empleado',
//     accessToken: '123qwerty',
//     role: 'EMPLOYEE'
//   }
// ]

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // private _authUser$ = new BehaviorSubject<null | User>(null);
  authUser$ : Observable<User | null>

  constructor(private httpClient: HttpClient, private router: Router, private store: Store) {
    this.authUser$ = this.store.select(selectAuthUser);
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

    this.httpClient.get<User[]>(`${environment.baseApiUrl}/users?email=${payload.email}&password=${payload.password}`)
      .subscribe({
        next: (userResult) => {
          if (!userResult[0]) {
            alert("email o password invalidos");
            return;
          } else {
            // Si login es satisfactorio
            localStorage.setItem("access_token", userResult[0].accessToken);
            this.store.dispatch(AuthActions.setAuthUser({ user: userResult[0] }))
            this.router.navigate(["dashboard", "home"]);
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 0) {
              alert("El servidor está caído")
            }
          }
        }
      })
    //  const loginResult = FAKE_USERS_DB.find((user) => {
    //     if (user.email === payload.email && user.password === payload.password) {
    //       return user;
    //     }
    //     return null;
    //   });

    //   if (!loginResult) {
    //     alert("email o password invalidos");
    //     return;
    //   }
    //   console.log("loginResult antes de guardar:", loginResult);
    //   localStorage.setItem("access_token", loginResult.accessToken);
    //   this.store.dispatch(AuthActions.setAuthUser({ user: loginResult }))
    //   this._authUser$.next(loginResult);
    //   console.log("Estado actual de _authUser$:", this._authUser$.value); // Verificar qué usuario se guardó
    //   this.router.navigate(["dashboard", "home"]);
  }

  logout() {
    localStorage.removeItem("access_token");
    this.store.dispatch(AuthActions.unsetAuthUser())
    this.router.navigate(['auth', 'login'])
  }

  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<User[]>(`${environment.baseApiUrl}/users?token=${localStorage.getItem('access_token')}`).pipe(
      map((res) => {
        const userResult = res[0]
        if (userResult) {
          this.store.dispatch(AuthActions.setAuthUser({ user: userResult }))
        }
        return !!userResult
      })
    )

    /* const accessToken = localStorage.getItem("access_token");
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
    })); */
  }

}  