const path = require('path')

module.exports = (pathToFolder, dirname) => {
  if (!dirname || dirname === '/') {
    dirname = process.cwd()
  }
  return path.resolve(dirname, pathToFolder)
}
