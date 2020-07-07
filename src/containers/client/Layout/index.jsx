import React from "react";
import Container from "@material-ui/core/Container";
import Banner from "../Banner";
import Slide from "../Swiper";
import Footer from "../Footer";
import Header from "../Header";
import Bottom from "../Footer/Bottom";
import { withRouter } from "react-router";
import Hidden from "@material-ui/core/Hidden";

function Layout(props) {
  return (
    <>
      <Header />
      {props.location.pathname === "/" ? <Slide /> : <Banner />}
      <Container className="container">{props.children}</Container>
      <Footer />
      <Hidden mdUp>
        <Bottom />
      </Hidden>
    </>
  );
}
export default withRouter(Layout);
