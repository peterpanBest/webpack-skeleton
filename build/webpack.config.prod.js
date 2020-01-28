
const merge = require("webpack-merge");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require("./webpack.config.base.js");

const prodConfig = {
  mode: "production",
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ]
};

module.exports = merge(baseConfig, prodConfig);