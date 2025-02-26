import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

/* Acá parte de /auth/ */
const routes: Routes = [
  {
    path: "login", // /auth/login
    component: LoginComponent
    // loadChildren: () => import('./auth.module').then((authMod) => authMod.AuthModule) // ❌
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
