import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterFeatureKey, CounterState } from "./counter.reducer";

// Recorta del estado, sólo la parte que le paso entre (), que es el nombre 'counterFK'
export const selectCounterState = createFeatureSelector<CounterState>(counterFeatureKey) // tiparlo es opcional pero ultra recomendado

export const selectCounterValue = createSelector(selectCounterState, (state => state.value)) // para seleccionar directamente el valor de value: 0
