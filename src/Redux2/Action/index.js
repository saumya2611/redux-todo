export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const RESTORE_TODO = "RESTORE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  console.log("Action file delete todo payload==========> ", payload);

  return {
    type: DELETE_TODO,
    payload,
  };
};

export const updateTodo = (id, payload) => {
  console.log("updated value payload ===========>", id, payload);

  return {
    type: UPDATE_TODO,
    payload,
    id,
  };
};

export const restoreTodo = (payload) => {
  console.log("payload=============>", payload);

  return {
    type: RESTORE_TODO,
    payload,
  };
};
