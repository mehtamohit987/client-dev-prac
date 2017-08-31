// Write settings that will be used for dev environment.
// export NODE_ENV=production

module.exports = {
    server: {

    },
    client: {
        default: {
            connection: {
                host: '0.0.0.0',
                port: '8000',
                labels: ['server'],
                router: {
                    stripTrailingSlash: true,
                },
            },
            database: {
                'host': '127.0.0.1',
                'port': 27017,
                'db': 'artists',
            },
        },
    },
};
