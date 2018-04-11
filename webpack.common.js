const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

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
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

};
