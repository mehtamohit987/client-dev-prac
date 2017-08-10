var path = require('path');
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['webpack-dev-server/client?http:localhost:8080', path.resolve(__dirname, 'webapp/src/index.js')],
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve(__dirname, 'webapp/public/js/'),
    chunkFilename: "[id].[chunkhash].bundle.js"
  },
  devServer: {
    inline: true,
    port: 8080,
    contentBase: path.resolve(__dirname, 'webapp/public'),
    historyApiFallback: true,
    publicPath: "webapp/public/",
    hot: true
    },
  devtool: debug ? "inline-source-map" : "cheap-source-map",
  module: {
  rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      // {
      //   test: /\.less$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: ["css-loader", "less-loader"]`  ``
      //   })
      // },
      {
        test: /\.css$/,
        use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }
        ]
      }
    ]
  },
  plugins: debug ? [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'webapp/public/pre_compilation/index.html',
      filename: path.resolve(__dirname, 'webapp/public/index.html')
    }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: "vendor",
      //   filename: "vendor.js",
      //   minChunks: Infinity
      // }),
      // new ExtractTextPlugin("styles.css"),
    ] : [
    new HtmlWebpackPlugin({
      template: 'webapp/public/pre_compilation/index.html',
      filename: path.resolve(__dirname, 'webapp/public/index.html')
    }),
    // new webpack.optimize.UglifyJsPlugin({ sourcemap: true,}),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: "vendor",
    //     filename: "vendor.js",
    //     minChunks: Infinity,
    // }),
    // new ExtractTextPlugin("styles.css"),
  ],
};