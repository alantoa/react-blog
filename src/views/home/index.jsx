import React from 'react';
import {
  Link
} from "react-router-dom";


export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Link to='/detail'><h1>HOME</h1></Link>
      </div>
    )
  }
}
