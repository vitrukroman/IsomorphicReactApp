const merge = require("webpack-merge");
const clientProduction = require("./webpack.client.production");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(clientProduction, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
