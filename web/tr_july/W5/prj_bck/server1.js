/**
 * file: index.js
 */

/**
 * Import dependencies
 */
var Server = require('hapi').Server;
var WebpackPlugin = require('hapi-webpack-plugin');

/**
 * Create server
 */
const server = new Server();
server.connection({port: 3000});

server.register({
  register: WebpackPlugin,
  options: './webpack.config.js'
},
error => {
  if (error) {
    return console.error(error);
  }
  server.start(() => console.log('Server running at:', server.info.uri));
});