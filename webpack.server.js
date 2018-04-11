const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/server/server.tsx",
  externals: [webpackNodeExternals()],
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
  ],
  target: "node",
};
