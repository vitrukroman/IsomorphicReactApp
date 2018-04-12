import { Request } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { Store } from "redux";
import serialize from "serialize-javascript";
import App from "../components/app/app";
import IContext from "../types/context";
import IStore from "../types/store";

const manifest = require("../../public/manifest.json")

const bundleJs = process.env.NODE_ENV === "production"
  ? manifest["bundle.js"]
  : "bundle.js";

const bundleCss = process.env.NODE_ENV === "production"
  ? manifest["bundle.cs"]
  : "bundle.js";

export default (req: Request, store: Store<IStore>, context: IContext) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.path}
        context={context}
      >
        <App/>
      </StaticRouter>
    </Provider>,
  );

  const helmet = Helmet.renderStatic();

  return `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="${bundleCss}" >
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.__INITIAL_STATE__ = ${serialize(store.getState())}
      </script>
      <script src="${bundleJs}">
      </script>
    </body>
  </html>
  `;
};
