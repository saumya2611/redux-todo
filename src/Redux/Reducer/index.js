import { combineReducers } from "redux";
import { changeValueReducer } from "./Updown";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  reducer1: changeValueReducer,
  cartReducer,
});
