import { createReducer, on } from "@ngrx/store";
import * as UserActions from "./action";
import { initialState } from "src/app/shared/models/state.interface";
import { User } from "src/app/shared/models/user.interface";



export const userReducer = createReducer(
  initialState,
  on(UserActions.removeUser, (state) => ({...state, user: {}as User})),
  on(UserActions.setUserSuccess, (state, { user }) => ({...state, user} )),
)
