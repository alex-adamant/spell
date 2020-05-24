module.exports = () => ({
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: { failOnWarning: false, failOnError: true },
      },
    ],
  },
})
