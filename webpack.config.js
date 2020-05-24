const webpackMerge = require('webpack-merge')

const loadPresets = require('./build-utils/loadPresets')
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env)
const parts = require('./build-utils/webpack.common')

module.exports = ({ mode = 'production', presets = [] } = { mode: 'production', presets: [] }) =>
  webpackMerge(
    {
      resolve: parts.resolve,
      plugins: parts.plugins,
      module: parts.module,
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  )
