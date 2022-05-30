import { combineReducers } from "redux";
import { counterReducers } from "./counterReducers";
import { todoReducers } from "./todoReducers";

export const reducers = combineReducers({
  counter: counterReducers,
  allTodo: todoReducers,
});
