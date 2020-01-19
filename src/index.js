import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'css/navigation.css'
import './index.css'

import store from 'store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
