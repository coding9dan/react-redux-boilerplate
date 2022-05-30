import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  addByNumber,
} from "../../redux/actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  return (
    <>
      <div>
        <h2>Counter: {count}</h2>
      </div>
      <div>
        <button onClick={() => dispatch(increaseCounter())}>+</button>
        <button onClick={() => dispatch(decreaseCounter())}>-</button>
      </div>
      <div>
        <input
          value={number}
          size="1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => dispatch(addByNumber(number))}>
          Add by {number}
        </button>
      </div>
    </>
  );
};

export default Counter;
