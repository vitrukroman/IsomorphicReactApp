import { all, call } from "redux-saga/effects";
import ApiService from "../services/apiService/apiService";
import usersSaga from "./usersSaga";

function* rootSaga(apiService: ApiService) {
  yield all([
    call(usersSaga, apiService),
  ]);
}

export default rootSaga;
