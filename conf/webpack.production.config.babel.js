const path = require('path')
const Webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Config = require('webpack-config').default

module.exports = new Config().extend('conf/webpack.base.config.babel.js').merge({
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract(
        'style',
        'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss'
      ), },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
})
