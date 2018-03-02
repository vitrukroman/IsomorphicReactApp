import { EUsersActionType, IUserCurrentFetchSuccessAction } from "../actions/userActions";
import IUser from "../types/user";

const authReducer = (state: IUser | null = null, action: IUserCurrentFetchSuccessAction) => {
  switch (action.type) {
    case EUsersActionType.currentFetchSuccess:
      return action.payload.user;
    default:
      return state;
  }
};

export default authReducer;
