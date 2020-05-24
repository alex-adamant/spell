const resolve = require('./resolve')
const webpack = require('webpack')
const parts = require('./webpack.common')

module.exports = (mode) => ({
  mode,
  watchOptions: {
    poll: 1000,
    ignored: ['node_modules'],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  entry: ['webpack-hot-middleware/client', './src/index.js'],
  plugins: [new webpack.ProgressPlugin(), new webpack.HotModuleReplacementPlugin()],
  devtool: 'inline-cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/',
  },
})
