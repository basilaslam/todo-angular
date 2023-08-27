import { createSelector } from '@ngrx/store';
import { User } from '../../../shared/models/user.interface'
import { State } from 'src/app/shared/models/state.interface';


export const selectUserState = (state: {user: State}) => state.user

export const selectUserData = createSelector(
  selectUserState,
  state => state.user
);

export const selectUserDataAndOptions = createSelector(
  selectUserData,
  user => ({ user })
);
