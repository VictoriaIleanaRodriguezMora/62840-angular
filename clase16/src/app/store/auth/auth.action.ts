import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../interfaces/user';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    // Establecer usuario authenticado
    'set auth user': props<{ user: User }>(),
    // Desestablecer usuario authenticado
    'unset auth user': emptyProps(), // Esta accion no recibe datos
  },
});