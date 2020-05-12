import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from '../views/home';
import Detail from '../views/detail/index';


const BasicRoute = () => (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail" component={Detail}/>
    </Router>
);


export default BasicRoute;
