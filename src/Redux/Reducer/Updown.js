import { DECREMENT, INCREMENT } from "../Action";

const intitialState = {
  count: 0,
};

export const changeValueReducer = (state = intitialState, action) => {
  console.log("Reducer:---> increment", action);
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
