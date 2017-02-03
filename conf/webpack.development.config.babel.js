const path = require('path')
const Webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const autoprefixer = require('autoprefixer')
const Config = require('webpack-config').default

module.exports = new Config().extend('conf/webpack.base.config.babel.js').merge({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', },
          { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]', } },
          { loader: 'postcss-loader', options: { plugins: () => [autoprefixer], }, },
        ],
      },
    ],
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.SourceMapDevToolPlugin({
  		filename: '[file].map'
  	}),
    // new BundleAnalyzerPlugin(),
  ],
  devtool: 'source-map',
})
