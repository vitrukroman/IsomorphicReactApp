const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = merge(common, {
  target: "node",
  entry: "./src/server.tsx",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist")
  },
  externals: [webpackNodeExternals()]
});