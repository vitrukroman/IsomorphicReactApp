import compression from "compression";
import express, { Request, Response } from "express";
// tslint:disable-next-line
const proxy = require("express-http-proxy");
import "isomorphic-fetch";
import path from "path";
import favicon from "serve-favicon";
import AppStore from "./helpers/appStore";
import renderer from "./helpers/renderer";
import ApiService from "./services/apiService/apiService";
import IContext from "./types/context";

const app = express();

app.use(compression());
app.use(favicon(path.resolve("src", "favicon.ico")));
app.use("/api", proxy("http://react-ssr-api.herokuapp.com", {
  proxyReqOptDecorator(opts: any) { // TODO: if @types exist for this modules - pull it and remove any
    opts.headers["x-forwarded-host"] = "localhost:3000";
    return opts;
  },
}));

app.use(express.static("public"));
app.get("*", async (req: Request, res: Response) => {
  const apiService = new ApiService(
    "http://react-ssr-api.herokuapp.com",
    req.headers.cookie,
  );
  const appStore = new AppStore(apiService);

  const donePromise = appStore.runSaga().done;
  let context: IContext = {
    notFound: false,
  };
  renderer(req, appStore.instance, context);

  appStore.close();

  await donePromise;

  context = {
    notFound: false,
  };
  const html = renderer(req, appStore.instance, context);

  if (context.url) {
    return res.redirect(301, context.url);
  }

  if (context.notFound) {
    res.status(404);
  }

  res.send(html);
});

const port: number = 3000;
app.listen(port);
