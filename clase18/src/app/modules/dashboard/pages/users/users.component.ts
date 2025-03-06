import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsersService } from '../../../../core/services/users.service';
import { Store } from '@ngrx/store';
import { selectUsers } from './store/user.selectors';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-users',
  standalone: false,

  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent implements OnInit, OnDestroy {
  displayedColumns = ["name", "delete"];
  user$: Observable<User[]>;
  dataTableUsers: User[] = [];

  constructor(private usersService: UsersService, private store: Store) {
    this.user$ = this.store.select(selectUsers);
  }
  ngOnDestroy(): void {
    this.usersService.resetUserState()
  }

  ngOnInit(): void {
    this.usersService.loadUsers();

    this.user$.subscribe(users => {
      this.dataTableUsers = users ?? []; 
    });
  }

  deleteUserById(id: string) {
    this.usersService.deleteUserById(id)
  }


}

