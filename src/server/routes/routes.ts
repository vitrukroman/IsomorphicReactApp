import { Application, Request, Response } from "express";
import { IConfig } from "../../config/createConfig";
import AppStore from "../../helpers/appStore";
import renderer from "../../helpers/renderer";
import ApiService from "../../services/apiService/apiService";
import IContext from "../../types/context";

export default (app: Application, config: IConfig) => {
  app.get("*", async (req: Request, res: Response) => {
    const apiService = new ApiService(
      `${config.host}:${config.port}/api`,
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
};
