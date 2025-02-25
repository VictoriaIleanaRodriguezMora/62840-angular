import { ActionReducerMap } from "@ngrx/store";
import { counterFeatureKey, counterReducer, CounterState } from "./counter/counter.reducer";
import { authFeatureKey, authReducer, AuthState } from "./auth/auth.reducer";

export interface RootState {
    [counterFeatureKey]: CounterState // Estoy definiendo la interfaz
    [authFeatureKey]: AuthState,
}

export const rootReducer: ActionReducerMap<RootState> = {
    [counterFeatureKey]: counterReducer,// Estoy definiendo el valor
    [authFeatureKey]: authReducer,

}
