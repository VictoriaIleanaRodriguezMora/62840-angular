import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  @Input() dataSource: User[] = [];
  // displayedColumns = ["name", "edit", "delete", "detail"];
  displayedColumns = ["name", "delete"];

  user$: Observable<User[]>
  constructor(private usersService: UsersService, private store: Store) {
    this.user$ = this.store.select(selectUsers)    
  }
  
  ngOnInit(): void {
    this.usersService.loadUsers()
  }

}
