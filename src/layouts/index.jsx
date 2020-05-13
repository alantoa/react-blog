import React from 'react';
import ButtonAppBar from "../components/common/Header";
import Footer from "../components/common/Footer";
import MyContainer from "../components/common/Container";
// import RouterView from '../routes/index'


export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <ButtonAppBar/>
        <MyContainer/>
        <Footer/>
      </div>
    )
  }
}
