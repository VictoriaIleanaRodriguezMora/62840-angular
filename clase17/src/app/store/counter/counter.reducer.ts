// Estado del contador
import { createReducer, on } from "@ngrx/store";
import { addAction, substractAction } from "./counter.actions";

// va a ser una clave con la que mas adelante vamos a referenciar al counterState 
export const counterFeatureKey = 'counterFK' // el nombre tiene que ser representativo al un conjunto de acciones y el estado que estamos almacenando

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
    on(addAction, (ogState) => {
        // retorno un nuevo estado
        return {
            ...ogState,
            value: ogState.value + 1
        }
    }), // on recibe como primer argumento una accion, el 2° es un callback
    on(substractAction, (ogState) => {
        // retorno un nuevo estado
        return {
            ...ogState,
            value: ogState.value - 1
        }
    }) 
)