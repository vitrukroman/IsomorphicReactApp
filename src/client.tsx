import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppStore from "./helpers/appStore";
import Routes from "./routes";
import IStore from "./types/store";

declare global {
  // tslint:disable-next-line
  interface Window {
    __INITIAL_STATE__: IStore;
  }
}
const appStore = new AppStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;
appStore.runSaga();

ReactDom.hydrate(
  <Provider store={appStore.instance}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root"),
);
