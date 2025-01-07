export const INCREMENT = "INCREMENT_ACTION";
export const DECREMENT = "DECREMENT";

export const increment = () => {
  console.log("Action:---> increment");
  return {
    type: INCREMENT,
  };
};

export const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};
