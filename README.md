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