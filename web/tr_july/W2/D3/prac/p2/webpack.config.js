var path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './entry.js'
    },
    output: {
        path: __dirname,
        filename: './dist/bundle.js'

    },
    devServer: {
        inline: true,
        port: 8083,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015'],
                    }
                }
            },
            {
                test: /\.css/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            }]
    }


};
