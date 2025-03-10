import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectUsers, selectLoading, selectError } from './store/user.selectors';
import { UsersService } from '../../../../core/services/users.service';
import { User } from '../../../../interfaces/user';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [];
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  isAdmin$: Observable<boolean>;

  constructor(
    private store: Store,
    private usersService: UsersService,
    private authService: AuthService
  ) {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    
    this.isAdmin$ = this.authService.isAdmin$.pipe(
      map(user => user?.role === 'ADMIN')
    );
  }

  ngOnDestroy(): void {
    this.usersService.resetUserState();
  }

  ngOnInit(): void {
    this.usersService.loadUsers(); // Cargar usuarios siempre
    
    this.isAdmin$.subscribe(isAdmin => {
      this.displayedColumns = isAdmin 
        ? ['name', 'id', 'role', 'email', 'delete'] 
        : ['name'];
    });
  }

  deleteUserById(id: string) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usersService.deleteUserById(id);
    }
  }
}