const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = merge(common, {
  entry: "./src/client.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
});
