import React, { Component } from 'react'
import NotFoundImg from './404.png'
import style from '../../assets/style/animate.css'

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
          className={`${style.animated} ${style[this.state.animationType]}`}
          onMouseEnter={this.enter}
        />
      </div>
    )
  }
}
