import { combineReducers } from "redux";
import IStore from "../types/store";
import adminsReducer from "./adminsReducer";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";

export default combineReducers<IStore>({
  admins: adminsReducer,
  auth: authReducer,
  users: usersReducer,
} as any);
