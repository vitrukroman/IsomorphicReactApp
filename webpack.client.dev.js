const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.dev");

module.exports = merge(common, {
  entry: {
    bundle: "./src/client.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
});
