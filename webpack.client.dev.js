const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.dev");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
  entry: {
    bundle: "./src/client.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new CleanWebpackPlugin(["public"]),
  ]
});
