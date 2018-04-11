const merge = require("webpack-merge");
const common = require("./webpack.client.production");
const development = require("./webpack.development");
const server = require("./webpack.server");
module.exports = merge(common, server, development);
