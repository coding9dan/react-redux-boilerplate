import { ActionTypes } from "../constants/action-types";

export const increaseCounter = () => {
  return {
    type: ActionTypes.INCREMENT_COUNTER,
  };
};

export const decreaseCounter = () => {
  return {
    type: ActionTypes.DECREMENT_COUNTER,
  };
};

export const addByNumber = (number) => {
  return {
    type: ActionTypes.ADD_BY_NUMBER,
    payload: Number(number),
  };
};
