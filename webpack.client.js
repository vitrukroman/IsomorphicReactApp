const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = merge(common, {
  entry: {
    bundle: "./src/client.tsx",
    calculateSomeData: "./src/calculateSomeData.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: {
          loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
        }
      }
    ]
  }
});
