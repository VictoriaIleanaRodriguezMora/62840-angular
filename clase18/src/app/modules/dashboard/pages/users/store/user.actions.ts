import { createAction, props } from '@ngrx/store';
import { User } from '../../../../../interfaces/user';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
export const deleteUserById = createAction(
  '[User] Delete User By Id',
  props<{ id: string }>()
);
export const resetState = createAction('[User] Reset State');
