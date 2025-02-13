```bash
nvm use  22.13.0
cd clase13
npm i
ng serve
```




| Eager Loading                   | Lazy Loading               |
| ------------------------------- | -------------------------- |
| Carga Ansiosa (todo de una vez) | Carga Perezosa (a demanda) |



Eager Loading
```ts
const routes: Routes = [
  { path: 'auth/login', component: LoginComponent }
];
```

Lazy Loading
**Es la manera de hacer configuraciones a nivel de modulo, en cada nivel de profundidad, no es sólo esto**
```ts
const routes: Routes = [
{
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((dashMod) => dashMod.DashboardModule),
  }
];
```

00:10:00