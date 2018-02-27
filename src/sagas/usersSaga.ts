import { call, put, takeEvery } from "redux-saga/effects";
import { EUsersActionType, usersFetchSuccessActions } from "../actions/userActions";
import ApiService from "../services/apiService/apiService";

function* fetchUsersSaga(apiService: ApiService) {
  const users = yield call(apiService.fetchUsers);
  yield put(usersFetchSuccessActions(users));
}

function* usersSaga(apiService: ApiService) {
  yield takeEvery(EUsersActionType.fetch, fetchUsersSaga, apiService);
}

export default usersSaga;
