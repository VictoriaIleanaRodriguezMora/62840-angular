import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userFeatureKey } from './user.reducer'; // Importar UserState y userFeatureKey

// Seleccionar el feature state
export const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

// Seleccionar la lista de usuarios
export const selectUsers = createSelector(
  selectUserState,
  (state) => {
    console.log("state.users", state.users);
    return state.users;
  }
);

// Seleccionar el estado de carga
export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

// Seleccionar el error
export const selectError = createSelector(
  selectUserState,
  (state) => state.error
);