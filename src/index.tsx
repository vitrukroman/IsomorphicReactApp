import Koa from "koa";
import Router from "koa-router";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Home from "../src/client/components/home";

const app = new Koa();
const router = new Router();
router.get("/", (ctx, next) => {
  const content = ReactDOMServer.renderToString(<Home />);
  ctx.body = content;
  next();
});

app.use(router.routes());
const port: number = 3000;
app.listen(port);
