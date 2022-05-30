import React, { useState, useRef, useEffect } from "react";
import TodoCSS from "./Todo.module.css";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../redux/constants/action-types";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  });

  const onClickHandler = () =>
    dispatch(
      {
        type: ActionTypes.ADD_TODO,
        payload: {
          id: uuidv4(),
          label: newTodo,
        },
      },
      setNewTodo("")
    );

  return (
    <>
      <input
        type="text"
        className={TodoCSS.input}
        ref={inputRef}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className={TodoCSS.btn}
        onClick={onClickHandler}
        disabled={!newTodo || /^\s*$/.test(newTodo)}
      >
        Add
      </button>
    </>
  );
};

export default TodoInput;
