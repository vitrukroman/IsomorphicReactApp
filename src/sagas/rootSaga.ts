import { all, call } from "redux-saga/effects";
import ApiService from "../services/apiService/apiService";
import adminsSaga from "./adminsSaga";
import usersSaga from "./usersSaga";

function* rootSaga(apiService: ApiService) {
  yield all([
    call(usersSaga, apiService),
    call(adminsSaga, apiService),
  ]);
}

export default rootSaga;
