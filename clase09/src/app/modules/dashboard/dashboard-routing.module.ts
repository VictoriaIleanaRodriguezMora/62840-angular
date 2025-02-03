import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

/*
  Acá, parte de la ruta /dashboard/.
  Y LOS RUTAS QUE YO DEFINO ACÁ, HEREDAN LO QUE ESCRIBO EN PATH:
*/
const routes: Routes = [
  {
    path: 'home', // la ruta es /dashboard/home
    loadChildren: () => import('./pages/home/home.module').then((homeMod) => homeMod.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
