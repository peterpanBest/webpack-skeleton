
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");

const prodConfig = {
  devtool: 'cheap-module-source-map',
};

module.exports = merge(baseConfig, prodConfig);

