import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import LoadingComponent from "components/LoadingComponent";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ListIcon from '@material-ui/icons/List';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SettingsIcon from '@material-ui/icons/Settings';

const AdminIndex = lazy(() => import("views/admin/AdminIndex"));

const AdminManage = lazy(() => import("views/admin/AdminManage"));

const ArticleList = lazy(() => import("views/admin/ArticleList"));

const ArticleManage = lazy(() => import("views/admin/ArticleManage"));

const OthersManage = lazy(() => import("views/admin/OthersManage"));

export const adminRouterConfig = [
  {
    path: "/admin",
    component: AdminIndex,
    name: "Index",
    exact: true,
    icon: HomeIcon,
  },
  {
    path: "/admin/manage",
    name: "Admin Manage",
    component: AdminManage,
    icon: SupervisorAccountIcon,
  },
  {
    path: "/admin/article/list",
    name: "Article List",
    component: ArticleList,
    icon: ListIcon,
  },
  {
    path: "/admin/article/manage",
    name: "Article Manage",
    component: ArticleManage,
    icon: PostAddIcon,
  },
  {
    path: "/admin/other/manage",
    name: "Others Manage",
    component: OthersManage,
    icon: SettingsIcon,
  },
];

/**
 * (路由根目录组件，显示当前符合条件的组件)
 *
 * @extends {Component}
 */
export default function RouterView() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Switch>
        {adminRouterConfig.map((route) => {
          return (
            <Route
              exact={route.exact}
              path={route.path}
              name={route.name}
              key={route.name}
              render={(props) => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
