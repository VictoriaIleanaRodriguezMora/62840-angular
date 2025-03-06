import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from './user.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../../interfaces/user';
import { environment } from '../../../../../../environments/environment';

@Injectable()
export class UserEffects {


  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.http.get<User[]>(`${environment.baseApiUrl}/users`).pipe(
          map((users) => UserActions.loadUsersSuccess({ data: users })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions, // ✅ Inyectado correctamente
    private http: HttpClient
  ) {
    console.log('UserEffects initialized!', this.actions$); // Debería imprimir el Observable
  }
}