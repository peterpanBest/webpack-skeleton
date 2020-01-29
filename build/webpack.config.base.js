const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils  = require("./utils");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const baseConfig = {
  devtool: 'cheap-source-map',
  entry: {
    app: [
      path.join(__dirname, "../src/index.js")
    ]
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "static/js/[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 8192,
              name: utils.assetsPath("img/[name].[hash:7].[ext]")
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      },
      {
          test: /\.scss$/,
          use: [
              "style-loader", // 将 JS 字符串生成为 style 节点
              "css-loader", // 将 CSS 转化成 CommonJS 模块
              "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
          ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      filename: "index.html",
      template: path.join(__dirname, "../static/public/index.html"),
      chunks: ["vendor", "app"]
    }),
  ],
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  }
};

module.exports = baseConfig;