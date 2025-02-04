```bash
nvm use  22.13.0
cd clase09
npm i
ng serve
```

Angular permite hacer aplicaciones SPA, osea que las rutas/navegacion y los componentes los renderiza JavaScript. Para eso voy a usar el router de Angular

![alt text](./clase09/src/app/assets/imagee.png)

El componente <app-dashboard /> , app.component.html estaba hardcodeado, sin importar las rutas que defina, si eso está ahí hardcodeado siempre se va a ver lo mismo. Y no va a dar error, pero no van a funcionar las rutas.

Para que las rutas que yo definí funcionen, debo usar:
<router-outlet/>
En app.c.html

Lo que va a hacer, es mostrar el contenido, segun las rutas definidas en el arbol de rutas (array Routes de app-routing.module). Busca y funciona en base a lo definido en los objetos

Para cuando el usuario ingresa cualquier path que no esté definido en el array Routes, debo usar:

```html
{ path: '**', redirectTo: 'auth/login' },
```

Rutas como:
`dashboard/inscripciones
dashboard/cursos`
Son rutas hijas del dashboard, porque el `/dashboard` es parte de la ruta que las contiene

// El método load children es para cargar rutas hijas que están alojadas en otro módulo. En este caso la que estan en el `dashboard-routing.module`.ts

```js
loadChildren: () => import("./modules/dashboard/dashboard.module"); // devuelve una promesa
```

Cuando la ruta sea `'dashboard'`, va a cargar el `DashboardComponent` y tambien va a cargar las rutas hijas definidas en el ./modules/dashboard/dashboard.module .

Porque el `DashboardModule`, tiene importado el `DashboardRoutingModule`, el cúal tiene la configuracion de las rutas hijas del dashboard

```js
{
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
    import('./modules/dashboard/dashboard.module').then((dashMod) => dashMod.DashboardModule),
},
```

Cada una de las pages representan una ruta dentro de dashboard
![alt text](clase09/src/app/assets/image.png)

El `DashboardRoutingModule` es el archivo de configuracion de rutas hijas

En `dashboard-routing.module`, todas las rutas que yo configure tienen de base la ruta /dashboard/ , son .forChild

```bash
ng g c modules/dashboard/pages/home --skip-tests --no-standalone
```

Por el 'lazy loading' que vamos a ver más adelante hace eso en el `dashboard-routing.module`

No define un component, si no un loadChildren

Luego de realizar la configuracion en `dashboard-routing.module`:

```js
const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((homeMod) => homeMod.HomeModule),
  },
];
```

Hay que configurar el ¡**`home-routing.module.ts`**!

A pesar de que yo tengo las rutas bien definidas, no tengo errores ni nada, en todas las rutas veo el componente estudiantes en todas las rutas.
Es porque está hardcodeado en el html de dashboard.

Lo que hace `<router-outlet />` es ir a consultar al módulo, cuales son las rutas definidas en el módulo y según cual sea la ruta definida en el módulo, la va a comparar con la URL actual y va a mostrar el componente el cúal corresponda a la ruta

El `<router-outlet />` va, donde yo quiero representar el area de contenido.

```js
// ¡No alcanza con esto en `dashboard-routing.module`! Debo definir en students-routing.module.ts la ruta hija
  {
    path: 'students', // la ruta es /dashboard/students
    loadChildren: () => import('./pages/students/students.module').then((studMod) => studMod.StudentsModule),
  }
```

Debo configurar el ¡**`students-routing.module.ts`**!

```js {
// Esta forma de definir rutas hijas sólo es válida si todos los componentes de la aplicación pertenecen a un mismo módulo. Si mi aplicación no está modularizada.
  path: 'some-path',
    children: [
      {
        path: 'detail',
        componente: ...
      }
    ]
  }
```

El beneficio de modularizar la aplicación, es que genera más rendimiento, en tiempos de carga y memoria.
Y es mas organizado para trabajar y detectar errores.

[Listas angular material](https://material.angular.io/components/list/overview)

```bash
ng g c modules/dashboard/components/nav-menu --skip-tests --no-standalone
```

La navegacion/enrutamiento de angular, provee la directiva `routerLink=""`, es cómo el Link, Route, Routes de React. `routerLink` maneja una navegacion dentro de Angular. href no, porque usa el coportamiento por defecto del navegador, va a recargar todo el documento, la pantalla se va a poner en blanco al recargar. Indico una ruta relativa en `routerLink`

Cuando uso `routerLink` y el valor que le paso NO COMIENZA CON "/" quiere decir que hago una navegacion **relativa**. Quiere decir que el path que le sigue a ese segmente de url se va a mantener.

Osea, que si el path es `/dashboard`, lo que yo le pasé cómo valor al routerLink, va a ir precedido de `/dashboard + lo que le puse como valor`. En este caso:

```html
// /dashboard/+ el valor de routerLink // /dashboard/home
<a mat-list-item routerLink="home"> Inicio </a>
```

‼⁉
Si en cambio yo pusiera con "/". Lo que va a hacer angular, es reemplazar TODO EL PATH, por lo que puse textualmente/explicitamente en el `routerLink`

```html
<a mat-list-item routerLink="/home"> Inicio </a>
```

Osea que la ruta que renderiza, es: `/home`

En aplicaciones reales, el cierre de sesion viene acompañado de otra lógica, no es sólo redirigir a la ruta.
Se limpia el token de acceso, se ceirra el backend, se elimina algunas cookies, etc...
Entonces toda esa lógica tiene que ser manejada en el .ts

Navegacion por .ts:

```html
<a mat-list-item routerLink="courses" (click)="logout()"> Cerrar sesión </a>
```

```ts
constructor(private router: Router) { }

  logout(): void {
    localStorage.removeItem('token');
    // navigacion /auth/login
    this.router.navigate(['auth', 'login']);
  }
```

### Pasaje de parametros por URL

Quiero que al hacer click en el boton de 👁️, me lleve al detalle. Una redrección

```bash
ng g c modules/dashboard/pages/students/pages/student-detail --skip-tests --no-standalone
```

Yo necesito crear una ruta, que muestre el detalle y maneje el pasaje de parametros.

```ts
{
 // /dashboard/students/loquesea ¡LO QUE SEA QUE ESCRIBA DESPUES DE /dashboard/students/ va a ser considerado el id!
  path: "/:id", // representa /dashboard/students/:id
  component: StudentDetailComponent
}
```

Los :id indican que es un parametro que se va a pasar por URL, es un parametro dinamico.

```ts
constructor(private activatedRoute: ActivatedRoute) {
  // Es un objeto que tiene informacion de la ruta cargada actualmente
  console.log(this.activatedRoute);
}
```

Ese objeto tiene toda esta info:
![alt text](image.png)

¿Para que sirve esto? En un futuro cuando aprendamos a trabajar con APIS que son servicios en la nube que van a devolver informacion de la bbdd, voy a poder usar ese id que recibo por URL para hacer una petición HTTP, y que el servidor se encargue de buscar en la bdd cual es ese usuario, que cursos tiene,

| Parametro de URL                                 | Parametro de Consulta (query)                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------- |
| Van directamente despues de una /, son estáticos | Los que estan seguidos de un símbolo de ? Pueden ser usados para hacer búsquedas |
| -                                                | Ejemplo: localhost:8080/dashboard/?id=234&name=ola                               |

**Query Parameters**

```html
<button
  [routerLink]="element.id"
  [queryParams]="{
                  name: element.name,
                  lastName: element.lastName
                 }"
  mat-button
></button>
```

```ts

  studentId: string;
  fullName: string;

  constructor(private activatedRoute: ActivatedRoute) {
    // Es un objeto que tiene informacion de la ruta cargada actualmente
    console.log(this.activatedRoute);
    this.studentId = this.activatedRoute.snapshot.params['id'] 
    const name = this.activatedRoute.snapshot.queryParams['name']
    const lastName = this.activatedRoute.snapshot.queryParams['lastName']
    this.fullName = `${name}, ${lastName}`
  }
```

01:33:00
