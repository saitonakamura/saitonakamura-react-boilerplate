const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Config = require('webpack-config').default

module.exports = new Config().merge({
  output: {
    path: path.resolve('./build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('./src'), 'node_modules'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: { loader: 'babel-loader' }, include: path.resolve('./src'), },
      { test: /\.(png|jpg)$/, use: { loader: 'file-loader', options: { name: 'images/[name].[hash].[ext]', }, }, },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: { loader: 'file-loader', options: { name: 'fonts/[name].[hash].[ext]', mimetype: 'application/font-woff', }, }, },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: { loader: 'file-loader', options: { name: 'fonts/[name].[hash].[ext]', mimetype: 'application/font-woff', }, }, },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: { loader: 'file-loader', options: { name: 'fonts/[name].[hash].[ext]', mimetype: 'application/octet-stream', }, }, },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: { loader: 'file-loader', options: { name: 'fonts/[name].[hash].[ext]', }, }, },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: { loader: 'file-loader', options: { name: 'images/[name].[hash].[ext]', mimetype: 'image/svg+xml', }, }, },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html.ejs', }),
    new Webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ],
})
