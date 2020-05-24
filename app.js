const express = require('express')

const app = express()

app.get('/', (res, req) => {
  req.send('Hello, world!')
})

const port = 8080
app.listen(port)
console.log('Listening on port', port)
