import React from "react";
import TodoCSS from "./Todo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "../../redux/constants/action-types";

const TodoList = () => {
  const todos = useSelector((state) => state.allTodo.todos);
  const dispatch = useDispatch();

  const onClickHandler = (id) =>
    dispatch({
      type: ActionTypes.DELETE_TODO,
      payload: id,
    });

  if (!todos || !todos.length) {
    return <p>No Todos!!!</p>;
  }

  return (
    <div className={TodoCSS.todo_list}>
      <ul className={TodoCSS.ul}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={TodoCSS.li}
            onClick={() => onClickHandler(todo.id)}
          >
            {todo.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
