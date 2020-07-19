import React from "react";
import { Route, withRouter } from "react-router-dom";
import Home from "views/client/Home";
import About from "views/client/About";
import Archive from "views/client/Archive";
import Detail from "views/client/Detail";
import AppsIcon from "@material-ui/icons/Apps";
import { ReactComponent as T } from "assets/image/T.svg";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
// import NotFound from "components/NotFound";
import ScrollTop from "./ScrollTop";
import AnimatedSwitch from "components/AnimatedSwitch";

export const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    icon: AppsIcon,
    exact: true,
  },
  {
    path: "/about",
    name: "About",
    icon: T,
    component: About,
  },
  {
    path: "/archive",
    name: "Archive",
    icon: FormatListBulletedIcon,
    component: Archive,
  },
  {
    path: "/detail/:id",
    name: "detail",
    icon: FormatListBulletedIcon,
    component: Detail,
  },
  // {
  //   path: "*",
  //   name: "404",
  //   component: NotFound,
  // },
];

/**
 * (路由根目录组件，显示当前符合条件的组件)
 *
 * @params {Component}
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      name={route.name}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

function RootView() {
  return (
    <ScrollTop>
      <AnimatedSwitch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </AnimatedSwitch>
    </ScrollTop>
  );
}
export default withRouter(RootView);
