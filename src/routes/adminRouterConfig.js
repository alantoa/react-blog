import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import LoadingComponent from "@/components/LoadingComponent";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

const AdminIndex = lazy(() => import("@/views/AdminIndex"));

const AdminManage = lazy(() => import("@/views/AdminManage"));

const ArticleList = lazy(() => import("@/views/ArticleList"));

const ArticleManage = lazy(() => import("@/views/ArticleManage"));

export const adminRouterConfig = [
  {
    path: "/admin",
    component: AdminIndex,
    name: "Index",
    exact: true,
    icon: DashboardIcon,
  },
  {
    path: "/admin/manage",
    name: "Admin Manage",
    component: AdminManage,
    icon: PeopleIcon,
  },
  {
    path: "/admin/article/list",
    name: "Article List",
    component: ArticleList,
    icon: BarChartIcon,
  },
  {
    path: "/admin/article/manage",
    name: "Article Manage",
    component: ArticleManage,
    icon: LayersIcon,
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
