const merge = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = merge(common, {
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    public: "rvitruk-mac.levi9.com:3000",
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
