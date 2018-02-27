import { combineReducers } from "redux";
import IStore from "../types/store";
import usersReducer from "./usersReducer";

export default combineReducers<IStore>({
  users: usersReducer,
} as any);
