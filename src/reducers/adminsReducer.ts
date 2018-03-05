import { EAdminsActionType, IAdminsFetchSuccessAction} from "../actions/adminActions";
import IUser from "../types/user";

const adminsReducer = (
  state: IUser[] = [],
  action: IAdminsFetchSuccessAction,
): IUser[] => {
  switch (action.type) {
    case EAdminsActionType.fetchSuccess:
      return action.payload.admins;
    default:
      return state;
  }
};
export default adminsReducer;
