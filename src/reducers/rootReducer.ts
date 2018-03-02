import { combineReducers } from "redux";
import IStore from "../types/store";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";

export default combineReducers<IStore>({
  auth: authReducer,
  users: usersReducer,
} as any);
