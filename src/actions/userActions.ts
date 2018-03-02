import IUser from "../types/user";

enum EUsersActionType {
  fetch = "usersFetch",
  fetchSuccess = "usersFetchSuccess",
  currentFetch = "userCurrentFetch",
  currentFetchSuccess = "userCurrentFetchSuccess",
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

interface IUserCurrentFetchAction {
  type: EUsersActionType.currentFetch;
}

interface IUserCurrentFetchSuccessAction {
  payload: {
    user: IUser;
  };
  type: EUsersActionType.currentFetchSuccess;
}

const usersFetchAction = (): IUsersFetchAction => {
  return {
    type: EUsersActionType.fetch,
  };
};

const usersFetchSuccessAction = (users: IUser[]): IUsersFetchSuccessAction => {
  return {
    payload: { users },
    type: EUsersActionType.fetchSuccess,
  };
};

const userCurrentFetchAction = (): IUserCurrentFetchAction => {
  return {
    type: EUsersActionType.currentFetch,
  };
};

const userCurrentFetchSuccessAction = (user: IUser): IUserCurrentFetchSuccessAction => {
  return {
    payload: {
      user,
    },
    type: EUsersActionType.currentFetchSuccess,
  };
};

export {
  EUsersActionType,
  usersFetchAction,
  usersFetchSuccessAction,
  IUsersFetchSuccessAction,
  IUserCurrentFetchAction,
  IUserCurrentFetchSuccessAction,
  userCurrentFetchAction,
  userCurrentFetchSuccessAction,
};
