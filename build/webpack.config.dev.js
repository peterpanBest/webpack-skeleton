const path = require("path");
const merge = require("webpack-merge");
const config = require("./config");
const baseConfig = require("./webpack.config.base");

const devConfig = {
  mode: 'development',
  devServer: {
    port: 7000,
    contentBase: path.join(__dirname, "../dist"),
    // hot: true, //这个得开启，不然无法实现不影响state的热更新
    clientLogLevel: "none", //控制台的打包信息清空
    historyApiFallback: true,
    // host: "localhost",
  }
};

module.exports = merge(baseConfig, devConfig);


