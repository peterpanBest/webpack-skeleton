const path = require("path");
const config = require("./config");
const isDev = process.env_NODE_ENV === 'production' ? false : true;

exports.assetsPath = (_path) => {
  let _assetsPath = '';
  _assetsPath = !isDev ? config.build.assetsPath : config.dev.assetsPath;
  return path.posix.join(_assetsPath, _path);
}