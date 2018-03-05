import IUser from "../types/user";

enum EAdminsActionType {
  fetch = "adminsFetch",
  fetchSuccess = "adminsFetchSuccess",
}

interface IAdminsFetchAction {
  type: EAdminsActionType.fetch;
}

interface IAdminsFetchSuccessAction {
  payload: {
    admins: IUser[];
  };
  type: EAdminsActionType.fetchSuccess;
}

const adminsFetchAction = (): IAdminsFetchAction => {
  return {
    type: EAdminsActionType.fetch,
  };
};

const adminsFetchSuccessAction = (admins: IUser[]): IAdminsFetchSuccessAction => {
  return {
    payload: { admins },
    type: EAdminsActionType.fetchSuccess,
  };
};

export {
  EAdminsActionType,
  adminsFetchAction,
  adminsFetchSuccessAction,
  IAdminsFetchSuccessAction,
};
