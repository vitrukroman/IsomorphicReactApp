const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.svg$|\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: {
          loader: "file-loader?name=[name].[ext]",  // <-- retain original file name
        },

      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader?modules&importLoaders=2&localIdentName=[local]__[hash:base64:5]",
            "postcss-loader",
          ],
        }),
      },
    ],

  },
  plugins: [
    new CleanWebpackPlugin(["dist", "public"]),
    new ExtractTextPlugin("styles.css"),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
