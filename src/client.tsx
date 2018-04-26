import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/app";
import config from "./config";
import AppStore from "./helpers/appStore";
import ApiService from "./services/apiService/apiService";

const apiService = new ApiService(config.API_URL);
const appStore = new AppStore(apiService);
appStore.runSaga();

ReactDom.render(
  <Provider store={appStore.instance}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root"),
);
