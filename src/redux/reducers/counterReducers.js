import { ActionTypes } from "../constants/action-types";

const defaultCounterState = {
  count: 0,
};

export const counterReducers = (
  state = defaultCounterState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };
    case ActionTypes.ADD_BY_NUMBER:
      return {
        ...state,
        count: state.count + payload,
      };
    default:
      return state;
  }
};
