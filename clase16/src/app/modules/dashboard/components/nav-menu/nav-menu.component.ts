import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth.service';

@Component({
  selector: 'app-nav-menu',
  standalone: false,

  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  linktems: { label: string; routerLink: string }[] = [
    {
      label: "Inicio",
      routerLink: "home",
    },
    {
      label: "Estudiantes",
      routerLink: "students",
    },
    {
      label: "Cursos",
      routerLink: "courses",
    },
    {
      label: "Usuarios",
      routerLink: "users",
    },
  ];

  logout(): void {
    // localStorage.removeItem('token');
    // this.router.navigate(['auth', 'login']);
    this.authService.logout()
  }
}
