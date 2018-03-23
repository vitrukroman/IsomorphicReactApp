import compression from "compression";
import express, { Application } from "express";
import path from "path";
import favicon from "serve-favicon";
import { IConfig } from "../../config/createConfig";

const proxy = require("express-http-proxy");

export default (app: Application, config: IConfig) => {
  app.use(compression());
  app.use(favicon(path.resolve("src", "favicon.ico")));
  app.use("/api", proxy(`${config.api.host}:${config.api.port}`));

  app.use(express.static("public"));

};
