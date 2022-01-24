import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './core/store'

import './index.css'

import App from './core/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
