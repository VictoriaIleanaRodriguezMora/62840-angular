import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/auth/login/login.component';
// recibe como elementos, objetos. tienen muchas propiedades opcionales
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    // El método load children es para cargar rutas hijas que están alojadas en otro módulo. En este caso la que estan en el dashboard-routing.module.ts
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (dashMod) => dashMod.DashboardModule
      ),
  },
  { path: 'auth/login', component: LoginComponent },
  { path: '**', redirectTo: 'auth/login' },
];

// Acá está la implementación del router
// forRoot --> Raiz
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
