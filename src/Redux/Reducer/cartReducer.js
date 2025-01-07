const intitialState = {
  data: [],
  bool: false,
  cartDetails: {},
};

export const cartReducer = (state = intitialState, action) => {
  const { type } = action;
  switch (type) {
    case "TESTING":
      return { ...state, data: [1, 2, 3] };
    default:
      return state;
  }
};
