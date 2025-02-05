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
 
*Para el futuro *
 
```bash
ng g m core
```
 
Shared: Se agrupan componentes, directivas, pipes, funciones que se usan en toda la app. Ya lo tenemos
 
Featured Module: No es que un módulo en especifico se llame así, sino que se refiere a la técnica de crear un módulo por caracteristica. ¿Qué es una caracteristica? Sería agrupar: componentes, directivas, pantallas y demas según el tipo de indentidad
 
El módulo de estudiantes, es un features, porque toda su logica y funcionalidad está en ese modulo.
No es bueno modularizar en un 100%, si no agrupar funcionalidades según la lógica.

<<<<<<< HEAD
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
=======
 00:23:00
>>>>>>> dc48941c0c3d39e04518e231a5313c2bbaa62733
