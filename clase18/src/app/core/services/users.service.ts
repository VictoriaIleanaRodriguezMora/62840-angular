import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { loadUsersSuccess, loadUsersFailure, deleteUserById, resetState } from '../../modules/dashboard/pages/users/store/user.actions'; // Importar las acciones individualmente
import { environment } from '../../../environments/environment';
import { User } from '../../interfaces/user';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(
    private httpClient: HttpClient,
    private store: Store
  ) { }

  getStudentUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.baseApiUrl}/users?role=STUDENT`);
  }

  loadUsers(): void {
    this.getStudentUsers().subscribe({
      next: (users) => {
        console.log('✅ Usuarios cargados:', users);
        this.store.dispatch(loadUsersSuccess({ data: users }));
      },
      error: (error) => {
        console.error('❌ Error al cargar usuarios:', error);
        this.store.dispatch(loadUsersFailure({ error }));
      },
    });
  }

  deleteUserById(id: string): void {
    this.store.dispatch(deleteUserById({ id }));
  }

  resetUserState(): void {
    this.store.dispatch(resetState());
  }
}
