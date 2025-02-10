import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: false,

  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

  linktems: { label: string, routerLink: string }[] = [
    {
      label: 'Inicio',
      routerLink: 'home'
    },
    {
      label: 'Estudiantes',
      routerLink: 'students'
    }
    ,
    {
      label: 'Cursos',
      routerLink: 'courses'
    }
  ]

  constructor(private router: Router) { }

  logout(): void {
    localStorage.removeItem('token');
    // navigacion /auth/login
    this.router.navigate(['auth', 'login']);
  }
}
