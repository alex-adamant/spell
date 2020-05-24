const webpackMerge = require('webpack-merge')

module.exports = env => {
  const presets = env.presets
  const mergedPresets = [].concat(...[presets])
  const mergedConfigs = mergedPresets.map(name => require(`./presets/webpack.${name}`)(env))
  return webpackMerge({}, ...mergedConfigs)
}
