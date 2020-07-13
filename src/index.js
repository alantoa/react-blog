import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/style/animate.css'
import 'assets/style/main.scss'
import * as serviceWorker from './serviceWorker'
import IndexApp from './layouts'
import { Provider } from 'react-redux'
import store from './redux/index'

ReactDOM.render(
  <Provider store={store}>
    <IndexApp />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about controller workers: https://bit.ly/CRA-PWA
serviceWorker.register()
