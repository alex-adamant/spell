module.exports = {
  presets: [['@babel/preset-env', { modules: false, corejs: 3 }], '@babel/preset-react'],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
}
