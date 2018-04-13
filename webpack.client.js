const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: {
    bundle: "./src/client.tsx",
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
    new CleanWebpackPlugin(["public"]),
    new ManifestPlugin(),
  ],
};
