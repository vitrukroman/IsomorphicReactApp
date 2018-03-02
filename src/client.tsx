import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import AppStore from "./helpers/appStore";
import ApiService from "./services/apiService/apiService";
import IStore from "./types/store";

declare global {
  // tslint:disable-next-line
  interface Window {
    __INITIAL_STATE__: IStore;
  }
}
const apiService = new ApiService("/api");
const appStore = new AppStore(apiService, window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;
appStore.runSaga();

ReactDom.hydrate(
  <Provider store={appStore.instance}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root"),
);
