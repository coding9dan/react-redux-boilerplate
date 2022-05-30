import { ActionTypes } from "../constants/action-types";

export const addTodo = () => {
  return {
    type: ActionTypes.ADD_TODO,
  };
};

export const deleteTodo = () => {
  return {
    type: ActionTypes.DELETE_TODO,
  };
};
