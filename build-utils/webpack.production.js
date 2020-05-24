const resolve = require('./resolve')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const parts = require('./webpack.common')

module.exports = (mode) => ({
  mode,
  output: {
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
    path: resolve('dist'),
    publicPath: '/',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new CleanWebpackPlugin()],
})
