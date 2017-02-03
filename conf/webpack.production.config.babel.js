const path = require('path')
const Webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Config = require('webpack-config').default
// const packageJson = require('../package.json')

module.exports = new Config().extend('conf/webpack.base.config.babel.js').merge({
  entry: [
    './src/index',
  ],
  output: {
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]', } },
            { loader: 'postcss-loader', options: { plugins: () => [autoprefixer], }, },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.[contenthash].css',  allChunks: true, }),
    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module, count) => module.resource && module.resource.indexOf(path.resolve('node_modules')) === 0,
    }),
    // new BundleAnalyzerPlugin(),
  ],
  devtool: 'source-map',
})
