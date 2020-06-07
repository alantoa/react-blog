import React, { useRef, useState } from "react";
import style from "./Login.module.scss";
import { loginIn } from "../../redux/action/user";
import { connect } from "react-redux";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
const CssTextField = withStyles({
  root: {
    width: '22rem',
    '& label.MuiFormLabel-root':{
      color: '#d2d2d2',
      fontSize:'1.4rem',
      lineHeight: 0,
    },
    '& label.Mui-focused': {
      color: '#ff3366',
    },
    '& .MuiInputBase-input':{
      color:"#fff"
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'transparent',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before':{
      borderBottomColor: 'rgba(255, 255, 255, 0.2)',
      bottom: '-2px'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ff3366',
      bottom: '-2px'
    }
  },
})(TextField);

function Login(props) {
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
    password: "",
  });

  function loginSubmit(e) {
    if (state.animating) return;
    e.persist();
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
      setTimeout(function () {
          props.dispatch(loginIn(form));
          setState({
            inactive: true,
            animating: false,
            success: false,
            processing: false,
          });
          props.history.push({ pathname: "/admin" });
      }, 400);
    }, 800);
  }
  const printValues = (e) => {
    e.preventDefault();
  };
  const updateField = (e) => {
    setLogin({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={style.cont}>
      <div className={style.demo}>
        <div className={style.login}>
          <div className={style.check} />
          <form onSubmit={printValues} className={style.form}>
            <div className={style.row}>
              <svg className={`${style.svg}`} viewBox="0 0 20 20">
                <path
                  className={clsx(style.path, style.name_path)}
                  d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"
                />
              </svg>
              
              <CssTextField 
                name="username"
                color="secondary"
                value={form.username}
                onChange={updateField}
                id="custom-css-standard-input"
                label="Username"
              />
            </div>
            <div className={style.row}>
              <svg className={`${style.svg}`} viewBox="0 0 20 20">
                <path
                  className={clsx(style.path, style.pass_path)}
                  d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"
                />
              </svg>
              <CssTextField 
                name="password"
                color="secondary"
                value={form.password}
                onChange={updateField}
                id="custom-css-standard-input"
                label="Password"
              />
            </div>
            <button
              type="button"
              ref={btnRef}
              onClick={loginSubmit.bind(this)}
              className={clsx(
                style.submit,
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
  );
}

export default connect()(Login);