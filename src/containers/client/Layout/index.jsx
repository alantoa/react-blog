import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../Banner";



export default function Layout(props) {
    return (
      <>
        <Header />
        <Banner />
        <CssBaseline/>
        <Container>
          {props.children}
        </Container>
        <Footer/>
      </>
    )
}
