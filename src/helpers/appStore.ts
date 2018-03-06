import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";
import ApiService from "../services/apiService/apiService";
import IStore from "../types/store";

const sagaMiddleWare = createSagaMiddleware();

class AppStore {
  private static defaultState = {
    admins: [],
    auth: {
      checked: false,
      user: null,
    },
    users: [],
  };
  private store: Store<IStore>;

  constructor(
    private apiService: ApiService,
    initialState: IStore = AppStore.defaultState,
  ) {
    this.store = createStore<IStore>(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleWare),
    );
  }

  public runSaga() {
    return sagaMiddleWare.run(rootSaga, this.apiService);
  }

  public close() {
    this.store.dispatch(END);
  }

  public get instance() {
    return this.store;
  }
}

export default AppStore;
