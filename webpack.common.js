const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
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
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
};
