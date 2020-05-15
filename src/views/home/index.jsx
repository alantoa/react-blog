import React from 'react';
import HomeList from "./components/HomeList";


const style = {
  root:{
    padding:"0 15px",
    margin:"20px 0"
  }
}
export default class Home extends React.Component {

  render() {
    return (
      <div style={style.root}>
          {[1, 2, 3].map((item, index) => (
            <HomeList key={item}/>
          ))}
      </div>
    )
  }
}
