import React from "react";
import RouterView from "routes/clientRouterConfig";
import Footer from "./Footer";
import Header from "./Header";
import Bottom from "./Footer/Bottom";
import Hidden from "@material-ui/core/Hidden";

export default function Client() {
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
