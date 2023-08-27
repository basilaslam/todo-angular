import { User } from "./user.interface";

export interface State {
  user: User | null
}

export const initialState = {
  user: null
} as State
