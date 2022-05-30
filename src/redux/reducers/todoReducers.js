import { ActionTypes } from "../constants/action-types";

const defaultTodoState = {
  todos: [],
};

export const todoReducers = (state = defaultTodoState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};
