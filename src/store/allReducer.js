import { combineReducers } from "redux";
import { HomeReducer } from "../Redux/Reducer/HomeReducer";

export const allReducer = combineReducers({
  HomeReducer,
});
