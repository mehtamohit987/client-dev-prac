const Hapi = require('hapi');
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

