import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { UserActions } from '../../modules/dashboard/pages/users/store/user.actions';
import { environment } from '../../../environments/environment';
import { User } from '../../interfaces/user';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private httpClient: HttpClient, private store: Store) {}

  loadUsers(): void {
    this.store.dispatch(UserActions.loadUsers());
  }

//   deleteUserById(id: string) {
//     this.store.dispatch(UserActions.deleteUserById({ id }));
//   }

//   resetUserState(): void {
//     this.store.dispatch(UserActions.resetState());
//   }
}