import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Slide from "../Swiper";
import Footer from "../Footer";


export default function Layout(props) {
    return (
      <>
        <Slide/>
        <CssBaseline/>
        <Container>
          {props.children}
        </Container>
        <Footer/>
      </>
    )
}
