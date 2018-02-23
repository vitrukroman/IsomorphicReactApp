import Koa from "koa";
import Router from "koa-router";
import KoaStatic from "koa-static";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Home from "../src/client/components/home";

const app = new Koa();
const router = new Router();
router.get("/", (ctx, next) => {
  const content = ReactDOMServer.renderToString(<Home />);
  const html = `
    <html>
      <head>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  ctx.body = html;
  next();
});

app.use(router.routes());
app.use(KoaStatic("public"));
const port: number = 3000;
app.listen(port);
