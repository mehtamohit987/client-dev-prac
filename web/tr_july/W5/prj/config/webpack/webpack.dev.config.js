const commonConf = require('./webpack.common.config.js');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const path = require('path');

const IS_DEV_SERVER = process.argv[1].indexOf('webpack-dev-server') >= 0;
const API_SERVER_DOMAIN = 'localhost';
const API_SERVER_PORT = '3000';
const DEV_SERVER_PORT = '3001';

const mergedConf = Merge(commonConf, {
    output: {
        pathinfo: true,
    },
    devServer: {
        inline: true,
        open: true,
        port: DEV_SERVER_PORT,
        contentBase: path.join(__dirname, '../../webapp/public'),
        historyApiFallback: true,
        hot: true,
        proxy: {
            '/api': 'http://' + API_SERVER_DOMAIN + ':' + API_SERVER_PORT,
            secure: false,
        },
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.jsx?$/,
            loader: 'eslint-loader',
            options: {
                fix: true,
            },
            include: path.resolve(__dirname, '../../webapp/src'),
            exclude: /(node_modules)/,
        }],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ],
});

const rule = mergedConf.module.rules.find((r) => r.test.source === '\\.jsx?$');
if (IS_DEV_SERVER && rule) {
    rule.use.unshift('react-hot-loader/webpack');
}

if (IS_DEV_SERVER) {
    mergedConf.plugins.unshift(new webpack.HotModuleReplacementPlugin());
    mergedConf.entry.index.unshift(
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:' + DEV_SERVER_PORT,
        'webpack/hot/only-dev-server'
    );
}

module.exports = mergedConf;
