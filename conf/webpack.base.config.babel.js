const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Config = require('webpack-config').default

module.exports = new Config().merge({
  entry: [
    './src/index',
  ],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve('./src')],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], include: path.resolve('./src'), },
      { test: /\.(png|jpg)$/, loader: 'file?name=images/[name].[hash].[ext]' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream'},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]'},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=images/[name].[hash].[ext]&mimetype=image/svg+xml' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html.ejs', }),
    new Webpack.DefinePlugin({
  			'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
  ],
})
