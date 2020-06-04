import React, { Component } from 'react'
import { increment, decrement } from '../../redux/action'
import { connect } from 'react-redux'
const buttonStyle = {
  margin: '20px'
}

function Counter({ caption, Increment, Decrement, value }) {
  
  return (
    <div>
      <button style={buttonStyle} onClick={Increment}>
        +
      </button>
      <button style={buttonStyle} onClick={Decrement}>
        -
      </button>
      <span>
        {caption} count :{value}
      </span>
    </div>
  )
}
function mapState(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}
function mapDispatch(dispatch, ownProps) {
  return {
    Increment: () => {
      console.log(ownProps)
      dispatch(increment(ownProps.caption))
    },
    Decrement: () => {
      dispatch(decrement(ownProps.caption))
    }
  }
}

export default connect(mapState, mapDispatch)(Counter)
