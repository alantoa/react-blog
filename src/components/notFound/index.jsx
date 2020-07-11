import React, { Component } from 'react'
import NotFoundImg from 'assets/image/404.png'

const style = {
  background: '#ddd',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%'
}
export default class Notfound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationType: 'swing'
    }
    this.enter = this.enter.bind(this)
  }

  enter() {
    this.setState({
      animationType: 'hinge'
    })

    setTimeout(() => {
      this.setState({
        animationType: 'lightSpeedIn'
      })
    }, 5000)
  }

  render() {
    return (
      <div className={style}>
        <img
          src={NotFoundImg}
          alt='404'
          className={`animated swing`}
          onMouseEnter={this.enter}
        />
      </div>
    )
  }
}
