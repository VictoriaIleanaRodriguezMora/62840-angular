import { Component, Input, OnInit } from '@angular/core';
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
export class UsersComponent implements OnInit {
  displayedColumns = ["name", "delete"];
  user$: Observable<User[]>;
  dataTableUsers: User[] = []; // Aquí guardaremos los usuarios

  constructor(private usersService: UsersService, private store: Store) {
    this.user$ = this.store.select(selectUsers);
  }

  ngOnInit(): void {
    this.usersService.loadUsers();

    this.user$.subscribe(users => {
      this.dataTableUsers = users ?? []; // Asigna los datos y evita null
    });
  }
}

