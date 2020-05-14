import React from 'react';
import Top from "../components/common/Header";
import Footer from "../components/common/Footer";
import MyContainer from "../components/common/Container";
import Banner from "../components/common/Banner";

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Top/>
        <Banner/>
        <MyContainer/>
        <Footer/>
      </div>
    )
  }
}
