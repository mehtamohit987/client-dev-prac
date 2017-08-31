// Write settings that will be used for dev environment.
// export NODE_ENV=development

module.exports = {
    server: {

    },
    client: {
        default: {
            connection: {
                host: '127.0.0.1',
                port: '3000',
                labels: ['dev_server'],
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
