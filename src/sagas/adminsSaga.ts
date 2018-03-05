import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  adminsFetchSuccessAction,
  EAdminsActionType,
} from "../actions/adminActions";
import ApiService from "../services/apiService/apiService";

function* fetchAdminsSaga(apiService: ApiService) {
  try {
    const admins = yield call(apiService.fetchAdmins);
    if (!admins.error) {
      yield put(adminsFetchSuccessAction(admins));
    }
  } catch (error) {
    console.error(error);
  }
}

function* adminsSaga(apiService: ApiService) {
  yield all([
    takeEvery(EAdminsActionType.fetch, fetchAdminsSaga, apiService),
  ]);
}

export default adminsSaga;
