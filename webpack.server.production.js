const merge = require("webpack-merge");
const common = require("./webpack.client.production");
const production = require("./webpack.production");
const server = require("./webpack.server");
module.exports = merge(common, server, production);
