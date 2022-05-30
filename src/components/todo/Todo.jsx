import React from "react";
import TodoCSS from "./Todo.module.css";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const Todo = () => {
  return (
    <div className={TodoCSS.todo_wrap}>
      <h2>Todos</h2>
      <TodoList />
      <TodoInput />
    </div>
  );
};

export default Todo;
