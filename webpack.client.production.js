const merge = require("webpack-merge");
const common = require("./webpack.common");
const client = require("./webpack.client");
const production = require("./webpack.production");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, client, production, {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
});
