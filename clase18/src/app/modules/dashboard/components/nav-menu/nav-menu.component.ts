import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-nav-menu',
  standalone: false,

  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent implements OnInit {
  authUser$: Observable<User | null>;
  role: string | null = null; 

   linktems: { label: string; routerLink: string }[] = [];

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }

  ngOnInit(): void {
    this.authUser$.subscribe((user: User | null) => {
      this.role = user?.role?.toLowerCase() || null; 
  
      this.linktems = [
        { label: 'Inicio', routerLink: 'home' },
        { label: 'Estudiantes', routerLink: 'students' },
        { label: 'Cursos', routerLink: 'courses' },
        { label: 'Inscripciones', routerLink: 'enrollments' },
      ];
  
      if (this.role !== 'employee') {
        this.linktems.push({ label: 'Usuarios', routerLink: 'users' });
      }
  
      console.log("Rol del usuario:", this.role); // Verificar en consola
    });
  }
  
  logout(): void {
    this.authService.logout();
  }
}
