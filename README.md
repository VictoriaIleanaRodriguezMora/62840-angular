```bash
nvm use  22.13.0
cd clase16
npm i
ng serve
```

Patron Redux con:

### NgRx "framework"
- State
  
Contenedor que controla el estado de mi aplicacion.
Con el patron redux, vamos a almacenar en un estado global, cómo se encuentran los datos que se estan mostrando en pantalla, o cual es el estado de determinadas variables en determinado momento. Espacion en memoria usado para cargar info.

- Effects
  
Permiten controlar acciones asincronas, cada vez que yo quiera modificar el estado de mi aplicacion con una accion asincronca, vamos a usar un effect

- Router-Store

funcionalidad que permite controlar el router  de angular desde las acciones de redux. esta mencionada porque es parte de la libreria pero no se va a usar en el curso 

- Store Dev-Tool

```bash
ng add @ngrx/store
```

En la carpeta `store/index.ts`
Vamos a definir un par de cosas:

```ts
import { ActionReducerMap } from "@ngrx/store";
export interface RootState {}
export const rootReducer: ActionReducerMap<RootState> = []
```
```ts
  imports: [
    StoreModule.forRoot(rootReducer, {}), // se agrega
  ],
```


Ahora hay que definir un conjunto de definiciones que tienen que ver con Acciones, Reducers y Selectores 

**No incluir el contador en el proyecto final**

`store/counter.selector.ts`

Acciones: Son eventos que ocurren durante la ejecucion de la aplicación que permiten al usuario interactuar con la app. Una accion puede ser Sumar 

Aasique creamos la accion sumar
`store/counter.actions.ts`
```ts
import { createAction } from "@ngrx/store";
// export const add = createAction('[Contexto] Accion')
export const add = createAction('[Counter] Add')
export const substract = createAction('[Counter] Substract')
```

Las acciones no basta con crearlas,tengo que hacer una implementación que me permite hacer una suma o resta. Las acciones se controlan por medio de una funcion reductora o reducer :

`store/counter.reducer.ts`
Acá defino que datos voy a alojar en el estado de mi aplicacion.




00:22:00