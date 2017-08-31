const Path = require('path');

module.exports = {
    server: {

    },
    client: {
        default: {
            connection: {
                host: '',
                port: '',
                labels: ['stub_server'],
                router: {
                    stripTrailingSlash: true,
                },
                routes: {
                    files: {
                        relativeTo: Path.join(__dirname, '../../webapp/public'),
                    },
                },
            },
            database: {
                'host': '',
                'port': '',
                'db': '',
            },
        },
    },
};
