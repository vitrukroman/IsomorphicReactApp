const merge = require("webpack-merge");
const common = require("./webpack.common");
const client = require("./webpack.client");
const development = require("./webpack.development");

module.exports = merge(common, client, development);
