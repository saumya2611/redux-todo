import { CREATE_TODO, DELETE_TODO, UPDATE_TODO, RESTORE_TODO } from "../Action";

const initialState = {
  todoData: [],
  restoreArr: [],
  idCnt: 1,
};

export const todoReducer = (state = initialState, action) => {
  console.log("Action============>", action);
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      const todoObj = {
        value: payload,
        id: state.idCnt,
      };
      return {
        ...state,
        todoData: [...state.todoData, todoObj],
        idCnt: state.idCnt + 1,
      };
    case DELETE_TODO:
      const newArr = state.todoData.filter((item) => item.id != payload);
      console.log("newArr==========>", newArr);

      const restoreData = state.todoData.find((item) => item.id === payload);
      console.log("restoreData==========>", restoreData);

      return {
        ...state,
        todoData: newArr,
        restoreArr: [...state.restoreArr, restoreData],
      };

    case RESTORE_TODO:
      const newRestoreArr = state.restoreArr.filter(
        (item) => item.id != payload.id
      );
      return {
        ...state,
        restoreArr: newRestoreArr,
        todoData: [...state.todoData, payload],
      };

    case UPDATE_TODO:
      const newData = state.todoData.map((item) => {
        if (item.id === action.id) {
          return {
            id: action.id,
            value: payload,
          };
        }
        return item;
      });
      console.log("newData=========>", newData);

      return {
        ...state,
        todoData: newData,
      };

    default:
      return state;
  }
};
