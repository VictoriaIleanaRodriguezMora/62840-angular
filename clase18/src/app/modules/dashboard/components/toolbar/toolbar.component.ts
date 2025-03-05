import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/services/auth.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  standalone: false,

  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  @Input() title: string = '';

  @Output() myDrawerToggle = new EventEmitter();
  baseApiUrl = environment.baseApiUrl
  userRole$!: Observable<string | null>;
  userName$!: Observable<string | null>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userRole$ = this.authService.authUser$
      .pipe(map(user => user ? user.role : null));

    this.userName$ = this.authService.authUser$
      .pipe(map(user => user ? user.name : null));


  }

}
