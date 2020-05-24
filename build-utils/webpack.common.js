const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
}
