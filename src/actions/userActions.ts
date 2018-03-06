import IUser from "../types/user";

enum EUsersActionType {
  fetch = "usersFetch",
  fetchSuccess = "usersFetchSuccess",
  currentFetch = "userCurrentFetch",
  currentFetchError = "userCurrentFetchError",
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

interface IUserCurrentFetchErrorAction {
  payload: {
    error: Error;
  };
  type: EUsersActionType.currentFetchError;
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

const userCurrentFetchErrorAction = (error: Error): IUserCurrentFetchErrorAction => {
  return {
    payload: {
      error,
    },
    type: EUsersActionType.currentFetchError,
  };
};

export {
  EUsersActionType,
  usersFetchAction,
  usersFetchSuccessAction,
  IUsersFetchSuccessAction,
  IUserCurrentFetchAction,
  IUserCurrentFetchSuccessAction,
  IUserCurrentFetchErrorAction,
  userCurrentFetchAction,
  userCurrentFetchErrorAction,
  userCurrentFetchSuccessAction,
};
