import { createSelector } from '@ngrx/store';
import { User } from '../../models/user.interface';


export const selectUseState = (state: {user: User}) => state.user
export const selectUserData = (state: {user: User}) => state.user
export const UserSelector = createSelector(
  selectUseState,
  state => state
)
