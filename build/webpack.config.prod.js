
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");

const prodConfig = {
  mode: "production",
  devtool: 'cheap-module-source-map',
};

module.exports = merge(baseConfig, prodConfig);

