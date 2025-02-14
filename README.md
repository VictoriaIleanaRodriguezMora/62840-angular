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
const routes: Routes = [{ path: "auth/login", component: LoginComponent }];
```

Lazy Loading
**Es la manera de hacer configuraciones a nivel de modulo, en cada nivel de profundidad, no es sólo esto**

```ts
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    loadChildren: () =>
      import("./modules/dashboard/dashboard.module").then(
        (dashMod) => dashMod.DashboardModule
      ),
  },
];
```

En la consola del navegador > Redes > Filtrar por archivos JS.
Aparecen los archivos chunk, que son los que se cargan, en esa ruta para renderizar la página

```bash
login.componente.html
```

```html
<button routerLink="/dashboard/home" mat-button>Iniciar sesión</button>
<!-- Poner una / en router link significa que es una ruta ABSOLUTA que voy a reemplazar todo el path por lo que literalmente hay ahí. Si no tuviera la barra adelante significa que va a querer entrar a la ruta formada a partir de la que ya tiene
 Ejemplo: localhost:4200/auth/dashboard/home y esta ruta no existe, no es a la que quiero acceder
 -->
```

### Guards y autenticación de usuarios.

Los guards son cómo middlewares

| Característica                          | Guards (Angular)                     | Middlewares (Express.js, etc.)          |
| --------------------------------------- | ------------------------------------ | --------------------------------------- |
| Se ejecutan antes de acceder a una ruta | ✅ Sí                                | ✅ Sí                                   |
| Pueden bloquear el acceso               | ✅ Sí (`false` o `UrlTree`)          | ✅ Sí (`res.status(403).send()`)        |
| Pueden modificar la solicitud           | ❌ No                                | ✅ Sí (`req.body`, `req.headers`, etc.) |
| Se pueden encadenar                     | ✅ Sí (múltiples guards en una ruta) | ✅ Sí (múltiples middlewares)           |

Yo cómo usuario no debería poder acceder a una pantalla administrativa cómo dashboard/courses, sin haberme logueado antes.
Para esto Angular trae funciones Guards que permiten controlar estos accesos, se ejecutan antes de cargar una ruta. Hay 4 tipos.

| Guard                | Descripción                                         | Ejemplo                                                                              |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **CanActivate**      | Antes de cargar los componentes de la ruta.         |                                                                                      |
| **CanDeactivate**    | Antes de intentar salir de la ruta actual.          | (usualmente utilizado para evitar salir de una ruta si no se han guardado los datos) |
| **CanLoad**          | Antes de cargar los recursos (_assets_) de la ruta. |                                                                                      |
| **CanActivateChild** | Antes de cargar las rutas hijas de la ruta actual.  |                                                                                      |

El que mas vamos a usar acá es: **CanActivate**

"Si luego de la ejecución devuelve `true`, permite acceder a dicha ruta y si devuelve `false` la ruta no se cargaría.
Generalmente, en caso de que no se cumpla la condición del Guard, se suele hacer una `redirección` a la ruta anterior o a una ruta definida como la interfaz de autenticación 🔍."

```bash
ng g guard core/guards/auth --skip-tests
```

Con el espacio puedo elegir cuantos quiero generar![alt text](image.png)

```bash
app-routing.module.ts
```

```ts
{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((dashMod) => dashMod.DashboardModule),
  },
```

¿Cómo comprobar que el guard funciona?
No es amigable retornar un false y pantalla en blanco. En cambio se puede retornar al usuario a otra pantalla con un mensaje de error

Necesito un servicio de autenticación al nivel de mi app para saber si el usuario está autenticado o no.

Mejorar la lógica de cuando no es válido, se repite en todos.

```bash
ng g service core/auth --skip-tests
```

```bash
 ng g interface interfaces/LoginPayload
```

```bash
 ng g interface interfaces/user
```

![alt text](image.png)

### Sesión del usuario para no perderla al recargar la página. - LocalStorage

### Roles

```bash
 ng g guard guards/admin --skip-tests
```

```bash
 ng g module modules/dashboard/pages/users --routing
 ng g component modules/dashboard/pages/users --skip-tests --no-standalone

```

La aplicación está pensada para ser un backoffice, no está expuesta a los clientes. Es una aplicación administrativa e interna.
Los usuarios son los maestros, alumnos, directivos.

01:24:00 sin documentacion desde 00:15:00
