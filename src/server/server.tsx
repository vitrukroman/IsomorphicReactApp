import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import http from "http";
import https from "https";
import "isomorphic-fetch";
import createConfig from "./config/createConfig";
import middlewares from "./middlewares/middlewares";
import routes from "./routes/routes";

dotenv.config();
const config = createConfig(process.env as any);
const app = express();

middlewares(app, config);
routes(app, config);

http.createServer(app).listen(config.httpInternalPort);
https.createServer({
  cert: fs.readFileSync("./private/server.crt"),
  key: fs.readFileSync("./private/server.key"),
}, app).listen(config.httpsPort);
