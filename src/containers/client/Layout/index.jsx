import React from "react";
import Container from "@material-ui/core/Container";
import Banner from "../Banner";
import Slide from "../Swiper";
import Footer from "../Footer";
import Header from "../Header";
import { withRouter } from "react-router";



function Layout(props) {
  
  return (
    <>
      <Header />
      {props.location.pathname === "/" ? <Slide /> : <Banner />}
      <Container className="container">{props.children}</Container>
      <Footer />
    </>
  );
}
export default withRouter(Layout);
