import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  userRole$!: Observable<string | null>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userRole$ = this.authService.authUser$.pipe(
      map(user => user ? user.role : null)
    );
  }
}
