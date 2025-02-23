// Estado del contador

import { createReducer, on } from "@ngrx/store";
import { add, substract } from "./counter.actions";

// Interfaz del estado
export interface CounterState {
    value: number;
}
// Estado inicial
const initialState: CounterState = {
    value: 0
}

// Funcion reductora 
export const counterReducer = createReducer(
    // Estado inicial
    initialState,
    // Atrapar las acciones
    // Cuando la accion sea agregar, va a ejecutar ese callback
    on(add, (ogState) => {
        // retorno un nuevo estado
        return {
            ...ogState,
            value: ogState.value + 1
        }
    }), // on recibe como primer argumento una accion, el 2° es un callback
    on(substract, (ogState) => {
        // retorno un nuevo estado
        return {
            ...ogState,
            value: ogState.value - 1
        }
    }) 
)