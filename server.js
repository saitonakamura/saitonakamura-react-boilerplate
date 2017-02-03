const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.babel')

const port = 3000

new WebpackDevServer(Webpack(config), {
  hot: true,
  inline: true,
  historyApiFallback: true,
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err)
  }

  console.log(`Listening at http://localhost:${port}/`)
  console.log(`NODE_ENV=[${process.env.NODE_ENV}]`)
});
