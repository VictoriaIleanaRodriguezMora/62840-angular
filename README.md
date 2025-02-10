tengo que organizar y unificar mis repositorios. no tengo lo mismo en todos.

- dialog de after class
- carpeta core con services de clase

```bash
nvm use  22.13.0
cd clase12
npm i
ng serve
```

```bash
ng g m modules/dashboard/pages/teachers
```

```js
// OUTPUT
CREATE src/app/modules/dashboard/pages/teachers/teachers.module.ts (206 bytes)
```

```bash
ng g c modules/dashboard/pages/teachers
```

```js
//OUTPUT
CREATE src/app/modules/dashboard/pages/teachers/teachers.component.html (24 bytes)
CREATE src/app/modules/dashboard/pages/teachers/teachers.component.spec.ts (634 bytes)
CREATE src/app/modules/dashboard/pages/teachers/teachers.component.ts (244 bytes)
CREATE src/app/modules/dashboard/pages/teachers/teachers.component.scss (0 bytes)
UPDATE src/app/modules/dashboard/pages/teachers/teachers.module.ts (290 bytes)
```

Pero con el flag `--flat`. Se generan en la ruta indicada, no generan una carpeta

```bash
ng g m modules/dashboard/pages/teachers --flat
```

```js
//OUTPUT
CREATE src/app/modules/dashboard/pages/teachers.module.ts (206 bytes)
```

```bash
ng g c modules/dashboard/pages/teachers --flat
```

```js
//OUTPUT
CREATE src/app/modules/dashboard/pages/teachers.component.html (24 bytes)
CREATE src/app/modules/dashboard/pages/teachers.component.spec.ts (634 bytes)
CREATE src/app/modules/dashboard/pages/teachers.component.ts (244 bytes)
CREATE src/app/modules/dashboard/pages/teachers.component.scss (0 bytes)
```

Se puede definir el arbol de rutas en el .module, pero no es tan organizado.

Cada módulo que renderiza una ruta debe tener su routing.
La idea de modulos es encapsular, crear funciones independientes.

Módulo: Core, Shared y Feature.
Core: Agrupa servicios 'singleton' compartidos en toda la app. 'Interceptores', 'warn?'

_Para el futuro _

```bash
ng g m core
```

Shared: Se agrupan componentes, directivas, pipes, funciones que se usan en toda la app. Ya lo tenemos

Featured Module: No es que un módulo en especifico se llame así, sino que se refiere a la técnica de crear un módulo por caracteristica. ¿Qué es una caracteristica? Sería agrupar: componentes, directivas, pantallas y demas según el tipo de indentidad

El módulo de estudiantes, es un features, porque toda su logica y funcionalidad está en ese modulo.
No es bueno modularizar en un 100%, si no agrupar funcionalidades según la lógica.

```bash
ng g c modules/dashboard/pages/courses --skip-tests --no-standalone
```

Se agrega esta configuracion en `dashboard-routing.module.ts`

```ts
{
    path: 'courses', // la ruta es /dashboard/courses
    loadChildren: () => import('./pages/courses/courses.module').then((courseMod) => courseMod.CoursesModule),
  },
```

En: `courses-routing.module.ts`

```ts
/* Aquí la ruta de la que parte, es /dashboard/courses/ */
const routes: Routes = [
  {
    path: "", // representa /dashboard/courses/
    component: CoursesComponent,
  },
];
```

Tema aparte: En: `modules/dashboard/components/nav-menu/`
`nav-menu.component.ts`

```ts
export class NavMenuComponent {
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
  ];
}
```

`nav-menu.component.html`

```html
<mat-nav-list>
  <a
    *ngFor="let item of linktems"
    [routerLink]="item.routerLink"
    routerLinkActive
    #linkItem="routerLinkActive"
    [activated]="linkItem.isActive"
    mat-list-item
  >
    {{ item.label }}
  </a>
  <a mat-list-item routerLink="courses" (click)="logout()"> Cerrar sesión </a>
</mat-nav-list>
```

Módulo e tabla de curso

```bash
ng g c modules/dashboard/pages/courses/components/courses-table --skip-tests --no-standalone
```

[https://material.angular.io/components/table/overview](https://material.angular.io/components/table/overview)

Las listas, tablas, botones, son cosas que uso a lo largo de toda la app. Por eso sería bueno importarlas y exportarlas en el módulo compartido.

Los datos deben venir de un servicio.

```bash
ng g service core/courses --skip-tests
```

`CoursesComponent` va a sacar los datos de `CoursesService`

```bash
courses.service
```

```ts
// El servicio es el que envia los datos al componente
export class CoursesService {
  // Trabajamos con Observables para simular que estos datos vienen desde una API externa/bdd. Porque cuando realmente algún dia yo consu,a una API, va a devolver un observable, y vamos a hacer uso de un servico que se llama HttpClient que devuelve observables, asique nos adelantamos a esa forma de trabajar
  getCourses(): Observable<Course[]> {
    // El método getCourses va a devolver un array de Courses
    // El método of converte a observable lo que le paso entre ()
    return of([
      {
        id: randomString(6),
        name: "Js",
      },
      {
        id: randomString(6),
        name: "Des Web",
      },
    ]).pipe(delay(1000));
  }
}
```

### Documentarlo:

Mostrar en la tabla de cursos la data que viene del servicio. ¿Cómo?

```bash
courses-table.component.html
```

```html
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef>ID</th>
    <td mat-cell *matCellDef="let element">{{element.id}}</td>
  </ng-container>

  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef>Nombre</th>
    <td mat-cell *matCellDef="let element">{{element.name}}</td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
```

```bash
courses-table.component.ts
```

```ts
export class CoursesTableComponent {
  @Input() dataSource: Course[] = []; // necesito que la data a renderizar en la tabla sea la data del observable. Necesito poder recibirla desde el Padre. Ahora donde uso el c.hijo, en el c.padre puedo enviar una propiedad llamada [dataSource]
  displayedColumns = ["id", "name"];
}
```

Próximo: Realizar altas y bajas

01:16:00
