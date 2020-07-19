import React from "react";
import RouterView from "routes/clientRouterConfig";
import Footer from "./Footer";
import Header from "./Header";
import Bottom from "./Footer/Bottom";
import Hidden from "@material-ui/core/Hidden";
import { getUserInfo } from "api/client/user";
import { setUserInfo } from "redux/action/user";
import store from "redux/index";

getUserInfo("Toa").then((res) => {
  if (res && res.code === 1) {
    store.dispatch(setUserInfo(res.data));
  }
});

function Client() {
  return (
    <>
      <Header />
      <RouterView />
      <Footer />
      <Hidden mdUp>
        <Bottom />
      </Hidden>
    </>
  );
}
export default Client;
