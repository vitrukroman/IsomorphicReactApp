const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/server/server.tsx",
  externals: [webpackNodeExternals({
    whitelist: [/\.json$/],
  })],
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),

  ],
  target: "node",
};
