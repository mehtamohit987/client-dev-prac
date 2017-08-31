const commonConf = require('./webpack.common.config.js');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractTextPlugin = new ExtractTextPlugin({
    filename: 'css/[name]-[contenthash].bundle.css',
});

const mergedConf = Merge(commonConf, {
    output: {
        filename: 'js/[name]-[chunkhash].bundle.js',
        chunkFilename: 'js/[name]-[chunkhash].bundle.js',
    },
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.UglifyJsPlugin({ sourcemap: true }),
        extractTextPlugin,
    ],
});

const rule = mergedConf.module.rules.find((r) => r.test.source === '\\.less$');
if (rule) {
    rule.use = extractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
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
    });
}
module.exports = mergedConf;
