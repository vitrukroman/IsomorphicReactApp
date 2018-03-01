import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";
import ApiService from "../services/apiService/apiService";
import IStore from "../types/store";

const sagaMiddleWare = createSagaMiddleware();
const apiService = new ApiService();

class AppStore {
  private static defaultState = {
    users: [],
  };
  private store: Store<IStore>;

  constructor(initialState: IStore = AppStore.defaultState) {
    this.store = createStore<IStore>(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleWare),
    );
  }

  public runSaga() {
    return sagaMiddleWare.run(rootSaga, apiService);
  }

  public close() {
    this.store.dispatch(END);
  }

  public get instance() {
    return this.store;
  }
}

export default AppStore;
