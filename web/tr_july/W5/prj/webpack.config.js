module.exports = function(env) {
    const stub = (env === 'development' || env === 'dev') ? 'dev' : 'prod';
    return require(`./config/webpack/webpack.${stub}.config`);
};
