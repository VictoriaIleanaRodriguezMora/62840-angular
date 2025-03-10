import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure, deleteUserById, resetState } from './user.actions'; 
import { User } from '../../../../../interfaces/user';

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

export const userFeatureKey = 'user';

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadUsersSuccess, (state, { data }) => ({
    ...state,
    users: data,
    loading: false,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(deleteUserById, (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id),
  })),
  on(resetState, () => initialState)
);
