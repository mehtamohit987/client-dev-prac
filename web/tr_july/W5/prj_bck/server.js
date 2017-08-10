const Hapi = require('hapi');
const webpackConf = require('./webpack.config.js');
const server = new Hapi.Server();
const Inert = require('inert');
var Path = require('path');

server.connection({ 
    host: 'localhost', 
    port: 8000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'webapp/public')
        }
    }
});

server.register(Inert, () => {});

// var Webpack = require('hapi-webpack');
// server.register({
//   register: Webpack,
//   options: webpackConf,
// }, {
//   routes: {
//     prefix: '/build',
//   },
// }, ()=>{
//     server.start((err) => {

//         if (err) {
//             throw err;
//         }
//         console.log('Server running at:', server.info.uri);
//     });

// })

server.route({  
  method: 'GET',
  path: '/images/{file*}',
  handler: {
    directory: { 
      path: 'images',
      listing: true
    }
  }
})

server.route({  
  method: 'GET',
  path: '/js/{file*}',
  handler: {
    directory: { 
      path: 'js',
      listing: true
    }
  }
})

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {

        return reply('hello world');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

