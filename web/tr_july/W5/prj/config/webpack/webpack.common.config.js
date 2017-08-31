const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-modal', 'react-router', 'react-router-dom', 'redux', 'react-redux', 'redux-saga', 'reselect'],
        index: [
            path.join(__dirname, '../../webapp/src/index.jsx'),
        ],
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.join(__dirname, '../../webapp/public/'),
        chunkFilename: 'js/[name].bundle.js',
        publicPath: '/',
    },
    devtool: 'cheap-source-map',
    resolve: {
        extensions: ['*', '.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['stage-2', 'es2015', 'react'],
                            plugins: ['transform-class-properties'],
                        },
                    },
                ],
                include: path.join(__dirname, '../../webapp/src'),
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true,
                    },
                },
                ],
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'webapp/src/templates/index.html',
            filename: path.join(__dirname, '../../webapp/public/index.html'),
            chunks: ['vendor', 'index'],
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
    ],
};
