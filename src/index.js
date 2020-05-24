import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './components/App'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('container')
)

if (module.hot) {
  module.hot.accept('./components/App', function () {
    ReactDOM.render(
      <>
        <GlobalStyle />
        <App />
      </>,
      document.getElementById('container')
    )
  })
}
