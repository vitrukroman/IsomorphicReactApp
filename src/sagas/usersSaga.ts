import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  EUsersActionType,
  userCurrentFetchErrorAction,
  userCurrentFetchSuccessAction,
  usersFetchSuccessAction,
} from "../actions/userActions";
import ApiService from "../services/apiService/apiService";

function* fetchUsersSaga(apiService: ApiService) {
  const users = yield call(apiService.fetchUsers);
  yield put(usersFetchSuccessAction(users));
}

function* userCurrentFetchSaga(apiService: ApiService) {
  try {
    const userCurrent = yield call(apiService.fetchCurrentUser);
    yield put(userCurrentFetchSuccessAction(userCurrent));
  } catch (error) {
    yield put(userCurrentFetchErrorAction(error));
  }
}

function* usersSaga(apiService: ApiService) {
  yield all([
    takeEvery(EUsersActionType.fetch, fetchUsersSaga, apiService),
    takeEvery(EUsersActionType.currentFetch, userCurrentFetchSaga, apiService),
  ]);
}

export default usersSaga;
