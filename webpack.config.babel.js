const Config = require('webpack-config').default

module.exports = new Config().extend('conf/webpack.[NODE_ENV].config.babel.js')
