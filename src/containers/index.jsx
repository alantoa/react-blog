import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFound from "../components/NotFound";
import Client from "./client/client";
import MySnackbar from "../components/Snackbar/index";
import Loadable from "react-loadable";
import { getToken } from "@/utils/auth";
import LoadingComponent from "@/components/LoadingComponent";

const Admin = Loadable({
  loader: () => import("./admin/admin"),
  loading: LoadingComponent,
});

const Login = Loadable({
  loader: () => import("@/components/login/Login"),
  loading: LoadingComponent,
});
// 登录验证
function requireAuth(Layout, props) {
  if (getToken()) {
    return <Layout {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}
export default class AppIndex extends Component {

  render() {
    return (
      <>
        <Router>
          <>
            <Switch>
              <Route path="/404" component={NotFound} />
              <Route
                path="/admin"
                component={(props) => requireAuth(Admin, props)}
              />
              <Route path={"/login"} component={Login} />
              <Route component={Client} />
            </Switch>
          </>
        </Router>
        <MySnackbar />
      </>
    );
  }

  componentDidMount() {
    // this.props.user_auth();
    console.log(this)
  }
}

// function mapStateToProps(state) {
//     return {
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {

//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AppIndex)
