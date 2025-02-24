import { ActionReducerMap } from "@ngrx/store";
import { counterFeatureKey, counterReducer, CounterState } from "./counter.reducer";

export interface RootState {
    [counterFeatureKey]: CounterState // Estoy definiendo la interfaz
}

export const rootReducer: ActionReducerMap<RootState> = {
    [counterFeatureKey]: counterReducer// Estoy definiendo el valor
}
