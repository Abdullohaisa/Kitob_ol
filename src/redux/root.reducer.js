import { combineReducers } from "redux";
import bookWorkSlice from "./bookWorkSlice";

export const rootReducer = combineReducers({
  register: bookWorkSlice,
});
