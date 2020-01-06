import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'
import 'react-datepicker/dist/react-datepicker.css'
import './index.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

import rootReducer from 'store'

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
