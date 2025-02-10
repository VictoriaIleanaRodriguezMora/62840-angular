import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

/* Aquí la ruta de la que parte, es /dashboard/home/ */

const routes: Routes = [{
  path: "", // representa /dashboard/home/
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
