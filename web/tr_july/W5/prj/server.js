const Glue = require('glue');
const serverManifest = require('./config/hapi/manifest');

const options = {
    relativeTo: __dirname + '/server/src',
};

const createServer = (callback) => {
    Glue.compose(serverManifest, options, (err, server) => {
        if (!err) {
            server.route({
                method: 'GET',
                path: '/css/{file*}',
                handler: {
                    directory: {
                        path: './css/',
                    },
                },
            });
            server.route({
                method: 'GET',
                path: '/images/{file*}',
                handler: {
                    directory: {
                        path: './images/',
                    },
                },
            });
            server.route({
                method: 'GET',
                path: '/js/{file*}',
                handler: {
                    directory: {
                        path: './js/',
                    },
                },
            });
            server.route({
                method: 'GET',
                path: '/{param*}',
                handler: {
                    file: 'index.html',
                },
            });
        }
        callback(err, server);
    });
};

const callback = (err, server) => {
    if (err) {
        throw err;
    }
    if (!module.parent) {
        server.start(function(e) {
            if (e) {
                throw e;
            }

            // console.log('Server up.');
        });
    }
};

createServer(callback);
