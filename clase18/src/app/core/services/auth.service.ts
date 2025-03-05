import { Injectable } from '@angular/core';
import { LoginPayload } from '../../interfaces/login-payload';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { randomString } from '../../shared/randomString';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../modules/auth/login/store/auth/auth.action';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { selectAuthUser } from '../../modules/auth/login/store/auth/auth.selector';

@Injectable({ providedIn: 'root' })

export class AuthService {
  authUser$: Observable<User | null>

  constructor(private httpClient: HttpClient, private router: Router, private store: Store) {
    this.authUser$ = this.store.select(selectAuthUser);
  }

  get isAdmin$(): Observable<User | null> {
    return this.authUser$.pipe(
      map(user => {
        return user?.role === "ADMIN" ? user : null;
      })
    );
  }

  login(payload: LoginPayload, next?: () => void): void {
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
          if (!!next) {
            next()
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

  }

  logout() {
    localStorage.removeItem("access_token");
    this.store.dispatch(AuthActions.unsetAuthUser())
    this.router.navigate(['auth', 'login'])
  }

  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<User[]>(
      `${environment.baseApiUrl}/users?accessToken=${localStorage.getItem('access_token')}`
    ).pipe(
      map((res) => {
        const userResult = res[0];
        if (userResult) {
          this.store.dispatch(AuthActions.setAuthUser({ user: userResult }));
        }
        return !!userResult;
      })
    );
  }

}  