import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from "../Header";
import Footer from "../Footer";
import Banner from "@/components/Banner";



export default class Layout extends React.Component {
  render() {

    return (
      <>
        <Header />
        <Banner />
        <CssBaseline/>
        <Container>
          {this.props.children}
        </Container>
        <Footer/>
      </>
    )
  }
}
