const merge = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = merge(common, {
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    public: process.env.PUBLIC,
  },
  devtool: "eval",
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
