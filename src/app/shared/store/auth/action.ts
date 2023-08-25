import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.interface";

export const getUser = createAction('[User] Get User')
export const setUser = createAction('[User] Set User');
export const setUserSuccess = createAction('[User] Set User success', props<{user: User}>());
export const removeUser = createAction('[User] Remove User')
