import development from "./development";
import production from "./production";
import test from "./test";

const configs = {
  development,
  production,
  test,
};

export default configs[(() => {
  switch (process.env.NODE_ENV) {
    case "production":
    case "development":
    case "test":
      return process.env.NODE_ENV;
    default:
      return "production";
  }
})()];
