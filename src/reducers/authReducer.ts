import {
  EUsersActionType,
  IUserCurrentFetchErrorAction,
  IUserCurrentFetchSuccessAction,
} from "../actions/userActions";
import Auth from "../types/auth";

const authReducer = (
  state: Auth = new Auth(),
  action: IUserCurrentFetchSuccessAction | IUserCurrentFetchErrorAction) => {
  switch (action.type) {
    case EUsersActionType.currentFetchSuccess:
      return new Auth(true, action.payload.user);
    case EUsersActionType.currentFetchError:
      return new Auth(true);
    default:
      return state;
  }
};

export default authReducer;
