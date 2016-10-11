const path = require('path')
const Webpack = require('webpack')
const Config = require('webpack-config').default

module.exports = new Config().extend('conf/webpack.base.config.babel.js').merge({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
  ],
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
