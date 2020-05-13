import React, { Component } from 'react'
import { combineReducers } from '/redux';

class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    // const value = this.props.value
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}> +1</button>
      </div>
    )
  }
}
export default Counter;
