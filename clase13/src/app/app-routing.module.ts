import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard], // el guard va a funcionar bajo cualquier ruta dentro del arbol de rutas de dashboard
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((dashMod) => dashMod.DashboardModule),
  },
  {
    // path: 'auth/login', // el segmento login debe ser definido en el modulo
    path: 'auth', 
    // component: LoginComponent  // Eager loading
    loadChildren: () => import('./modules/auth/auth.module').then((dashMod) => dashMod.AuthModule),
  },
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
