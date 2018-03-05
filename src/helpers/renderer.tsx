import { Request } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { Store } from "redux";
import serialize from "serialize-javascript";
import App from "../components/app";
import IContext from "../types/context";
import IStore from "../types/store";

export default (req: Request, store: Store<IStore>, context: IContext) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.path}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>,
  );

  return `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.__INITIAL_STATE__ = ${serialize(store.getState())}
      </script>
      <script src="bundle.js">
      </script>
    </body>
  </html>
  `;
};
