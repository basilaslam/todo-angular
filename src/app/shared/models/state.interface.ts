import { Todo } from "./todo.Interface";
import { User } from "./user.interface";

export interface State {
  user: User;
  todo: Todo
}

export const initialState = {} as State
