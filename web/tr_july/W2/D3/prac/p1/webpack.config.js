var path = require('path');
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    // vendor: ['lodash',],
    app: './src/index.js'
  },
  // entry: [
	// 	// 'webpack-hot-middleware/client?reload=true',
	// 	path.resolve(__dirname, "src/index.js")
	// ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: debug ? "inline-source-map" : "cheap-source-map",
  devServer: {
    contentBase: '.',
    hot: true
  },
  module: {
  rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      // {
      //   test: /\.less$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: ["css-loader", "less-loader"]
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
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: "vendor",
      //   filename: "vendor.js",
      //   minChunks: Infinity
      // }),
      new webpack.HotModuleReplacementPlugin(),
      // new ExtractTextPlugin("styles.css"),
    ] : [
    new webpack.optimize.UglifyJsPlugin({ sourcemap: true,}),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: "vendor",
    //     filename: "vendor.js",
    //     minChunks: Infinity,
    // }),
    // new ExtractTextPlugin("styles.css"),
  ],
};