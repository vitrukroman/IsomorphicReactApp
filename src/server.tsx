import "isomorphic-fetch";
import Koa from "koa";
import compress from "koa-compress";
import Router from "koa-router";
import KoaStatic from "koa-static";
import AppStore from "./helpers/appStore";
import renderer from "./helpers/renderer";

const app = new Koa();
const router = new Router();

app.use(compress());
app.use(KoaStatic("public"));
app.use(router.routes());

router.get("*", async (ctx, next) => {
  const appStore = new AppStore();

  const donePromise = appStore.runSaga().done;
  renderer(ctx.request, appStore.instance);
  appStore.close();
  await donePromise;

  ctx.body = renderer(ctx.request, appStore.instance);
  next();
});

const port: number = 3000;
app.listen(port);
