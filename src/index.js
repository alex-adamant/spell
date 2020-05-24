import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('container'))

if (module.hot) {
  module.hot.accept('./components/App', function () {
    ReactDOM.render(<App />, document.getElementById('container'))
  })
}
