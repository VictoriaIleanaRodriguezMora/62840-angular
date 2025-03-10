import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsers, selectLoading, selectError } from './store/user.selectors';
import { UsersService } from '../../../../core/services/users.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-users',
  standalone: false,

  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent implements OnInit, OnDestroy {
  displayedColumns = ["name", "delete"];
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  dataTableUsers: User[] = [];

  constructor(
    private store: Store,
    private usersService: UsersService
  ) {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnDestroy(): void {
    this.usersService.resetUserState()
  }

  ngOnInit(): void {
    this.usersService.loadUsers();
  }

  deleteUserById(id: string) {
    this.usersService.deleteUserById(id)
  }

}