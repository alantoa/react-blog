import React, { useRef, useState } from 'react'
import style from './Login.module.scss'
import { LOGIN_IN, LOGIN_OUT } from '../../redux/action/login'
import { connect } from 'react-redux'
import clsx from 'clsx'

function Login(props) {
  const btnRef = useRef()
  // console.log(props)
  const [state, setState] = useState({
    rippleShow: false,
    animating: false,
    success: false,
    inactive: false,
    showLogin: true,
    top: '0px',
    left: '0px'
  })
  const [form, setLogin] = useState({
    username: '',
    password: ''
  })
  function loginSubmit(e) {
    if (state.animating) return
    e.persist()
    props.LoginIn()
    setState({
      animating: true,
      top: e.pageY - btnRef.current.getBoundingClientRect().y,
      left: e.pageX - btnRef.current.getBoundingClientRect().x,
      rippleShow: true
    })
    setTimeout(function () {
      setState({
        animating: true,
        success: true,
        rippleShow: false
      })
      setTimeout(function () {}, 400 - 70)

      setTimeout(function () {
        setState({
          inactive: true,
          animating: false,
          success: false,
          processing: false
        })
      }, 400)
    }, 1100)
  }
  const printValues = e => {
    e.preventDefault()
  }
  const updateField = e => {
    setLogin({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className={style.cont}>
      <div className={style.demo}>
        <div className={style.login}>
          <div className={style.login__check} />
          <form onSubmit={printValues} className={style.login__form}>
            <div className={style.login__row}>
              <svg className={`${style.svg}`} viewBox='0 0 20 20'>
                <path
                  className={clsx(style.path,style.name_path)}
                  d='M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8'
                />
              </svg>
              <input
                type='text'
                className={style.input}
                placeholder='Username'
                name='username'
                value={form.username}
                onChange={updateField}
              />
            </div>
            <div className={style.login__row}>
              <svg className={`${style.svg}`} viewBox='0 0 20 20'>
                <path
                  className={clsx(style.path,style.pass_path)}
                  d='M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0'
                />
              </svg>
              <input
                type='password'
                className={`${style.input}`}
                placeholder='Password'
                name='password'
                value={form.password}
                onChange={updateField}
              />
            </div>
            <button
              type='button'
              ref={btnRef}
              onClick={loginSubmit.bind(this)}
              className={clsx(
                style.login__submit,
                state.animating && style.processing,
                state.success && style.success,
                state.inactive && style.inactive
              )}
            >
              Sign in
              {state.rippleShow && (
                <div
                  className={style.ripple}
                  style={{ top: state.top, left: state.left }}
                ></div>
              )}
            </button>
            
          </form>
        </div>
      </div>
    </div>
  )
}
function mapState(state, ownProps) {
  console.log(state)
  return {
    // value: state[ownProps.caption]
  }
}
function mapDispatch(dispatch, ownProps) {
  return {
    LoginIn: () => {
      console.log(ownProps)
      dispatch(LOGIN_IN(ownProps))
    },
    LoginOut: () => {
      dispatch(LOGIN_OUT(ownProps))
    }
  }
}

export default connect(mapState, mapDispatch)(Login)