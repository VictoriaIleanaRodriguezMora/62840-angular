import { createAction, props } from '@ngrx/store';
import { User } from '../../../../../interfaces/user';

export const UserActions = {
  loadUsers: createAction('[User] Load Users'),
  loadUsersSuccess: createAction('[User] Load Users Success', props<{ data: User[] }>()),
  loadUsersFailure: createAction('[User] Load Users Failure', props<{ error: unknown }>()),

  deleteUserById: createAction('[User] Delete User By Id', props<{ id: string }>()), // <- Asegurate que tenga props
  resetState: createAction('[User] Reset State')
};
