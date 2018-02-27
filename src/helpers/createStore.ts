import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";
import ApiService from "../services/apiService/apiService";
import IStore from "../types/store";

const sagaMiddleWare = createSagaMiddleware();
const apiService = new ApiService();

export default (): Store<IStore> => {
  const store = createStore<IStore>(rootReducer, {
    users: [],
  }, applyMiddleware(sagaMiddleWare));

  sagaMiddleWare.run(rootSaga, apiService);

  return store;
};
