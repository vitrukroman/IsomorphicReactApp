import { EUsersActionType, IUsersFetchSuccessAction} from "../actions/userActions";
import IUser from "../types/user";

const usersReducer = (
  state: IUser[] = [],
  action: IUsersFetchSuccessAction,
): IUser[] => {
  switch (action.type) {
    case EUsersActionType.fetchSuccess:
      return action.payload.users;
    default:
      return state;
  }
};
export default usersReducer;
