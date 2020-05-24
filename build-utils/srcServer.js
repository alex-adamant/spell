const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const url = require('url')

const app = express()
const port = 8080

app.use(morgan('dev'))
app.use(bodyParser.json()) // for parsing application/json

const [nodeCommand, commandPath, ...presets] = process.argv //eslint-disable-line

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack.config.js')({ mode: 'development', presets })
const compiler = webpack(config)

const devMiddleware = webpackDevMiddleware(compiler, { stats: { colors: true } })

app.use(devMiddleware)
app.use(webpackHotMiddleware(compiler))

app.get('/favicon.ico', (req, res) => res.send('ok'))
app.get('*', (req, res) => {
  const htmlBuffer = devMiddleware.fileSystem.readFileSync(`${config.output.path}/index.html`)
  res.send(htmlBuffer.toString())
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(err) //eslint-disable-line
  }
  res.status(err.statusCode || 500).send(err.message || err)
})

app.listen(port)

module.exports = app
