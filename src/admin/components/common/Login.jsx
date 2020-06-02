import React, { useRef, useState } from "react";
import "./login.scss";
import store from '../../stores/createStore'

store.getState()
export default function Login(props) {
  const btnRef = useRef();
  const [state, setState] = useState({
    rippleShow: false,
    animating: false,
    success: false,
    inactive: false,
    showLogin: true,
    top: "0px",
    left: "0px",
  });
  const [form, setLogin] = useState({
    username: "",
    password: ""
  });
  function loginSubmit(e) {
    
    if (state.animating) return;
    e.persist();
    store.dispatch({ type: 'INCREMENT' })
    setState({
      animating: true,
      top: e.pageY - btnRef.current.getBoundingClientRect().y,
      left: e.pageX - btnRef.current.getBoundingClientRect().x,
      rippleShow: true,
    });
    setTimeout(function () {
      setState({
        animating: true,
        success: true,
        rippleShow: false,
      });
      setTimeout(function () { }, 400 - 70);

      setTimeout(function () {
        setState({
          inactive: true,
          animating: false,
          success: false,
          processing: false,
        });
      }, 400);
    }, 1100);
  }
  const printValues = e => {
    e.preventDefault();
  };
  const updateField = e => {
    setLogin({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="cont">
      <div className="demo">
        <div className="login">
          <div className="login__check" />
          <form onSubmit={printValues} className="login__form">
            <div className="login__row">
              <svg className="login__icon name svg-icon" viewBox="0 0 20 20">
                <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
              </svg>
              <input
                type="text"
                className="login__input name"
                placeholder="Username"
                name="username"
                value={form.username}
                onChange={updateField}
              />
            </div>
            <div className="login__row">
              <svg className="login__icon pass svg-icon" viewBox="0 0 20 20">
                <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
              </svg>
              <input
                type="password"
                className="login__input pass"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={updateField}
              />
            </div>
            <button
              type="button"
              ref={btnRef}
              onClick={loginSubmit.bind(this)}
              className={`login__submit ${
                state.animating ? "processing" : ""
                } ${state.success ? "success" : ""} ${
                state.inactive ? "inactive" : ""
                }`}
            >
              Sign in
              {state.rippleShow ? (
                <div
                  className="ripple"
                  style={{ top: state.top, left: state.left }}
                ></div>
              ) : (
                  ""
                )}
            </button>
            <p className="login__signup">
              Don't have an account? &nbsp;<a href="javascript()">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
