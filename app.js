const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.text({ type: '*/*' })) // for parsing application/json

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist')))

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'dist/index.html'))
})

app.use(compression())

const port = 8080
app.listen(port)

console.log('App is listening on port ' + port)
