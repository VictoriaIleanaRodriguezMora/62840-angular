import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/auth.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  standalone: false,

  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {

  @Output() myDrawerToggle = new EventEmitter();
  baseApiUrl = environment.baseApiUrl
  userRole$!: Observable<string | null>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userRole$ = this.authService.authUser$.pipe(
      map(user => user ? user.role : null) 
    );
  }

}
