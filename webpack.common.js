const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin"); //installed via npm
const ManifestPlugin = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    bundle: "./src/client.tsx",
  },
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?modules&importLoaders=2&localIdentName=[local]__[hash:base64:5]",
          "postcss-loader",
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "all",
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new webpack.EnvironmentPlugin("NODE_ENV"),
    new CleanWebpackPlugin(["public"]),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  resolve: {
    alias: {
      public: path.resolve(__dirname, "public"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
};
