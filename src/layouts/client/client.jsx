import React, { useEffect } from "react";
import RouterView from "routes/clientRouterConfig";
import Footer from "./Footer";
import Header from "./Header";
import Bottom from "./Footer/Bottom";
import Hidden from "@material-ui/core/Hidden";
import { connect } from "react-redux";


function Client(props) {
  useEffect(() => {
    console.log(1);
  });
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
export default connect()(Client);
