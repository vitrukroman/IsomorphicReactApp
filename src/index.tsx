import Koa from "koa";
import Router from "koa-router";
import KoaStatic from "koa-static";
import renderer from "./helpers/renderer";

const app = new Koa();
const router = new Router();
router.get("*", (ctx, next) => {
  ctx.body = renderer(ctx.request);
  next();
});

app.use(router.routes());
app.use(KoaStatic("public"));
const port: number = 3000;
app.listen(port);
