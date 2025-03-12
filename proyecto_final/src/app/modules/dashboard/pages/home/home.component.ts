import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  userRole$!: Observable<string | null>;
  authUser$: Observable<User | null>;
  role: string | null = null;

  linktems: { label: string; routerLink: string }[] = [];

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }

  ngOnInit() {
    this.authUser$.subscribe((user: User | null) => {
      this.role = user?.role?.toLowerCase() || null;

      this.linktems = [
        { label: 'Inicio', routerLink: 'home' },
        { label: 'Estudiantes', routerLink: 'students' },
        { label: 'Cursos', routerLink: 'courses' },
        { label: 'Inscripciones', routerLink: 'enrollments' },
      ];

      if (this.role !== 'employee') {
        this.linktems.push(
          { label: 'Usuarios', routerLink: 'users' },
          { label: 'Profesores', routerLink: 'teachers' }
        );
      }
    });
  }
}
