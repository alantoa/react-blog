import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import routes from './routerConfig'


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
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
    );
  }

}
