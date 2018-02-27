import "isomorphic-fetch";
import Koa from "koa";
import Router from "koa-router";
import KoaStatic from "koa-static";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer";

const app = new Koa();
const router = new Router();
app.use(KoaStatic("public"));
router.get("*", (ctx, next) => {
  const store = createStore();
  
  ctx.body = renderer(ctx.request, store);
  next();
});

app.use(router.routes());

const port: number = 3000;
app.listen(port);
