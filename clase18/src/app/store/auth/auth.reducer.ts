import { createReducer, on } from '@ngrx/store';
import { User } from '../../interfaces/user';
import { AuthActions } from './auth.action';

export const authFeatureKey = 'auth';

export interface AuthState {
    authUser: User | null;
}

const initialState: AuthState = {
    authUser: null,
};

export const authReducer = createReducer(
    // Estado inicial
    initialState,
    // Atrapar las acciones
    on(AuthActions.setAuthUser, (state, action) => {
        return {
            ...state,
            authUser: action.user,
        };
    }),
    on(AuthActions.unsetAuthUser, (state) => {
        return {
            ...state,
            authUser: null,
        };
    })
);