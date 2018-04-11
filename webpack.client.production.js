const merge = require("webpack-merge");
const common = require("./webpack.common");
const client = require("./webpack.client");
const production = require("./webpack.production");

module.exports = merge(common, client, production);
