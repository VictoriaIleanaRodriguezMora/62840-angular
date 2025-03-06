import { createFeature, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { User } from '../../../../../interfaces/user';
import { environment } from '../../../../../../environments/environment';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
}

export const initialState: State = {
  users: [],
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(UserActions.loadUsersSuccess, (state, action) => {
    console.log('🟢 Reducer loadUsersSuccess:', action.data); // <-- VER SI LOS USUARIOS LLEGAN
    return {
      ...state,
      users: action.data,
      isLoading: false,
      error: null,
    };
  }),
  on(UserActions.loadUsersFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
    on(UserActions.deleteUserById, (state, action) => {
      return {
        // Un nuevo estado en el cual debemos eliminar el usuario con id que recibimos en la accion
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    }),
    on(UserActions.resetState, () => initialState)
);
 

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});