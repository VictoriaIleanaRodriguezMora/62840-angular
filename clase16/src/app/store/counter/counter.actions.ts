import { createAction } from "@ngrx/store";
// export const add = createAction('[Contexto] Accion')
export const addAction = createAction('[Counter Component] Increment');
export const substractAction = createAction('[Counter Component] Decrement');