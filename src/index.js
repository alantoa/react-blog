import React from 'react'
import ReactDOM from 'react-dom'
import './assets/style/main.scss'
import * as serviceWorker from './serviceWorker'
import IndexApp from './containers'
import { Provider } from 'react-redux'
import store from './redux/store/store'
// import {Provider} from 'react-redux'
// import configureStore from './configureStore'
// const store = configureStore();
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <IndexApp />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about controller workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
