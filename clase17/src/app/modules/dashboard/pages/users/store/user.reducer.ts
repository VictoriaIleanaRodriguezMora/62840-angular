import { createFeature, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { User } from '../../../../../interfaces/user';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
}

export const initialState: State = {
  users: [],
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => {
    return {
      ...state,
      users: [
        {
          id: 'asdas',
          name: 'asdas',
          accessToken: 'asdasdas',
          email: 'email@mail.com',
          password: '123456',
          role: 'ADMIN' as const, // al profe tmb led aba error
        },
        {
          id: 'asda2s',
          name: 'asda23s',
          accessToken: 'asdasdas',
          email: 'email2@mail.com',
          password: '123456',
          role: 'ADMIN' as const, 
        },
      ],
    };
  })
);


export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});