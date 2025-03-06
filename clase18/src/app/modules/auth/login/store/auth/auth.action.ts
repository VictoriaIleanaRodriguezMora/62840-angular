import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../../../../interfaces/user';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'set auth user': props<{ user: User }>(),
    'unset auth user': emptyProps(), 
  },
});