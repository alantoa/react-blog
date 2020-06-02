import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './assets/style/main.scss'
import * as serviceWorker from './serviceWorker';
import Layout from "./layouts/index";
import Login from './components/common/Login'

const isLogin = true;
ReactDOM.render(
  // <React.StrictMode>
  <Router>
    { isLogin ? <Login/> : <Layout/> }
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about controller workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
