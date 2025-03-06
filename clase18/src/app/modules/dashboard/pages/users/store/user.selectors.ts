import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

export const selectUsers = createSelector(
  selectUserState,
  (state) => {
    console.log("state.users", state.users);
    return state.users;
  }
);

export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUserState,
  (state) => state.error
);