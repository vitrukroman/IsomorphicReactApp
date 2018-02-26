import { Request } from "koa";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/routes";

export default (req: Request) => {
  const content = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.path}
      context={{}}
    >
      <Routes />
    </StaticRouter>,
  );

  return `
  <html>
    <head></head>
    <body>
    ${content}
    </body>
  `;
};
