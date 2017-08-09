/**
 * file: index.js
 */

/**
 * Import dependencies
 */
var Server = require('hapi').Server;
var Webpack = require('webpack');
var WebpackPlugin = require('hapi-webpack-plugin');

/**
 * Create server
 */
const server = new Server();
server.connection({port: 3000});

/**
 * Define constants
 */
const compiler = new Webpack({
  // webpack configuration
  entry: {
    // vendor: ['lodash',],
    app: require('path').resolve(__dirname, 'webapp/src/index.js')
  },
  output: {
    filename: '[name]-[hash].bundle.js',
    path: require('path').resolve(__dirname, 'webapp/public/js/'),
    chunkFilename: "[id].[chunkhash].bundle.js"
  },
});

const assets = {
  // webpack-dev-middleware options
  // See https://github.com/webpack/webpack-dev-middleware
}

const hot = {
  // webpack-hot-middleware options
  // See https://github.com/glenjamin/webpack-hot-middleware
}

/**
 * Register plugin and start server
 */
server.register({
  register: WebpackPlugin,
  options: {compiler, assets, hot}
},
error => {
  if (error) {
    return console.error(error);
  }
  server.start(() => console.log('Server running at:', server.info.uri));
});