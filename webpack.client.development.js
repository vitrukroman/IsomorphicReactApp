const merge = require("webpack-merge");
const common = require("./webpack.common");
const client = require("./webpack.client");
const development = require("./webpack.development");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = merge(common, client, development, {
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
});
