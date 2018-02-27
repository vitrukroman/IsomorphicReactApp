import IUser from "../types/user";

enum EUsersActionType {
  fetch = "fetchUsers",
  fetchSuccess = "fetchSuccess",
}

interface IUsersFetchAction {
  type: EUsersActionType.fetch;
}

interface IUsersFetchSuccessAction {
  payload: {
    users: IUser[];
  };
  type: EUsersActionType.fetchSuccess;
}

const usersFetchAction = (): IUsersFetchAction => {
  return {
    type: EUsersActionType.fetch,
  };
};

const usersFetchSuccessActions = (users: IUser[]): IUsersFetchSuccessAction => {
  return {
    payload: { users },
    type: EUsersActionType.fetchSuccess,
  };
};

export {
  EUsersActionType,
  usersFetchAction,
  usersFetchSuccessActions,
  IUsersFetchSuccessAction,
};
