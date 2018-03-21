const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.prod");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = merge(common, {
  entry: "./src/server/server.tsx",
  externals: [webpackNodeExternals()],
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
});
