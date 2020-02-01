import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import store from './redux/store'

import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
