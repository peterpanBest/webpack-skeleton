const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "img/[name].[hash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader?name=fonts/[name].[hash:7].[ext]"
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../static/public/index.html"),
      chunks: ["vendor", "app"]
    }),
  ],
  resolve: {
    extensions: [".js", ".vue", ".json"],
  }
};

module.exports = baseConfig;