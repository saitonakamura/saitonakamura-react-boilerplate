const Config = require('webpack-config').default

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

module.exports = new Config().extend(`conf/webpack.${process.env.NODE_ENV}.config.babel.js`)
