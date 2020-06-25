import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Slide from "../Swiper";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Slide />
      <CssBaseline />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
}
