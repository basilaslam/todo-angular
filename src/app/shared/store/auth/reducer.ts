import { createReducer, on } from "@ngrx/store";
import { User } from '../../models/user.interface';
import * as UserActions from "./action";
import { initialState } from "../../models/state.interface";


export const userReducer = createReducer(
  initialState,
  on(UserActions.removeUser, (state) => ({...state, user: {}as User})),
  on(UserActions.setUserSuccess, (state, { user }) => ({...state, user} )),
)
