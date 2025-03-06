import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUsers = createSelector(
  selectUserState,
  (state) => {
    console.log('🟡 Selector users:', state.users); // <-- Agregamos log
    return state.users
  }
);