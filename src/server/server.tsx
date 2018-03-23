import dotenv from "dotenv";
import express from "express";
import "isomorphic-fetch";
import createConfig from "../config/createConfig";
import middlewares from "./middlewares/middlewares";
import routes from "./routes/routes";

dotenv.config();
const config = createConfig(process.env as any);
const app = express();

middlewares(app, config);
routes(app, config);

app.listen(config.port);
