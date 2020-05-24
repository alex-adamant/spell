module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', corejs: 3 }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
}
