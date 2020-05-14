import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../views/home'
import Detail from '../views/detail'

const routes = [
  {
    path: "/",
    component: Home,
    exact:true
  },
  {
    path: "/detail",
    component: Detail 
  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes}/>
      )}
    />
  );
}

export default class RootView extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    );
  }

}
