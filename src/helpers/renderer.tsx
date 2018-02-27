import { Request } from "koa";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { Store } from "redux";
import Routes from "../routes";
import IStore from "../types/store";

export default (req: Request, store: Store<IStore>) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.path}
        context={{}}
      >
        <Routes />
      </StaticRouter>
    </Provider>,
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js">
        </script>
      </body>
    </html>
  `;
};
