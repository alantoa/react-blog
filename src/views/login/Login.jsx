import React, { useState } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { TextField, withStyles, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { login } from "api/login";
import style from "./Login.module.scss";
import { toast } from "react-toastify";


function Login(props) {
  const [state, setState] = useState({
    rippleShow: false,
    animating: false,
    success: false,
    inactive: false,
    showLogin: true,
    top: "0px",
    left: "0px",
  });
  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    if (state.animating) return;
    setState({
      animating: true,
      rippleShow: true,
    });
    setTimeout(function () {
      setState({
        rippleShow: false,
      });
      login(data)
        .then((res) => {
          if (res.code === 1) {
            setState({
              animating: false,
            });
            setTimeout(() => {
              setState({
                inactive: true,
                animating: true,
                success: true,
              });
            }, 300);

            setTimeout(() => {
              props.history.push("/admin");
            }, 700);
          }
        })
        .catch((err) => {
          setState({
            inactive: false,
          });
          console.log(err);
        });
    }, 800);
  };
  return (
    <div className={style.cont}>
      <div className={style.demo}>
        <div className={style.login}>
          <div className={style.check} />
          <form
            onSubmit={handleSubmit(onSubmit.bind(this))}
            className={style.form}
          >
            <div className={style.row}>
              <svg className={`${style.svg}`} viewBox="0 0 20 20">
                <path
                  className={clsx(style.path, style.name_path)}
                  d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"
                />
              </svg>

              <Controller
                as={CssTextField}
                rules={{ required: true}}
                name="username"
                label="Username"
                color="secondary"
                control={control}
              />
              <span className={style.tip}>
                {errors.username &&
                  toast("用户名不能为空!")}
              </span>
            </div>
            <div className={style.row}>
              <svg className={`${style.svg}`} viewBox="0 0 20 20">
                <path
                  className={clsx(style.path, style.pass_path)}
                  d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"
                />
              </svg>
              <Controller
                as={CssTextField}
                rules={{ required: true}}
                name="password"
                color="secondary"
                type="password"
                label="Password"
                control={control}
              />
              <span className={style.tip}>
                {errors.password &&
                  toast("密码不能为空!")}
              </span>
            </div>
            <Button
              type="submit"
              variant="contained"
              className={clsx(
                style.submit,
                state.animating && style.processing,
                state.success && style.success,
                state.inactive && style.inactive
              )}
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

const CssTextField = withStyles({
  root: {
    width: "22rem",
    "& label.MuiFormLabel-root": {
      color: "#d2d2d2",
      fontSize: "1.4rem",
      lineHeight: 0,
    },
    "& label.Mui-focused": {
      color: "#ff3366",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "transparent",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "rgba(255, 255, 255, 0.2)",
      bottom: "-2px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ff3366",
      bottom: "-2px",
    },
  },
})(TextField);
export default connect()(Login);
