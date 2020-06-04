import React from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import routes from './clientRouterConfig'

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      name={route.name}
      render={props => (
        <route.component {...props} routes={route.routes}/>
      )}
    />
  );
}

class RootView extends React.Component {
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
export default withRouter(RootView)
