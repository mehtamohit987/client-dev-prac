const config = require('config');

const getConnections = (conf) => {
    let connections = [];
    for (const clientName in conf.client) {
        if (conf.client.hasOwnProperty(clientName)) {
            if (conf.client[clientName].connection) {
                connections = connections.concat(conf.client[clientName].connection);
            }
        }
    }
    return connections;
};

module.exports = {
    server: {
        debug: {
            request: ['info', 'error'],
            log: ['error'],
        },
    },
    connections: getConnections(config),
    registrations: [{
        plugin: {
            register: 'inert',
        },
    }, {
        plugin: {
            register: 'hapi-mongo-models',
            options: {
                mongodb: {
                    uri: 'mongodb://' + config.client.default.database.host + ':' + config.client.default.database.port +
                            '/' + config.client.default.database.db,
                    options: {},
                },
                autoIndex: false,
            },
        },
    }, {
        plugin: {
            register: 'hapi-artists-api',
            options: {
                dependencies: ['hapi-mongo-models'],
            },
        },
    }, {
        plugin: {
            register: 'good',
            options: {
                includes: {
                    request: [
                        'headers',
                        'payload',
                    ],
                },
                ops: {
                    interval: 1000000,
                },
                reporters: {
                    console: [
                        {
                            module: 'good-squeeze',
                            name: 'Squeeze',
                            args: [{ log: '*', response: '*', error: '*' }],
                        },
                        {
                            module: 'good-console',
                        },
                        'stdout',
                    ],
                },
            },
        },
    },

    ],
};
