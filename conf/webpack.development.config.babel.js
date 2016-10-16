const path = require('path')
const Webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const Config = require('webpack-config').default

module.exports = new Config().extend('conf/webpack.base.config.babel.js').merge({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
  ],
  module: {
    loaders: [
      { test: /\.css$/, loaders: [
        'style',
        'css?modules&importLoaders=1&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss'
      ], },
    ],
  },
  postcss: [ autoprefixer, ],
  plugins: [
    new Webpack.NoErrorsPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.SourceMapDevToolPlugin({
  		filename: '[file].map'
  	}),
  ],
  devtool: 'source-map',
})
