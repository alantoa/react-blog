import React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 100,
    zIndex:1200,
    right: theme.spacing(2),
  },
}));
export default function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });
  let timer  = null;
  const handleClick = () => {
    cancelAnimationFrame(timer);
    //获取当前毫秒数
    let startTime = +new Date();
    //获取当前页面的滚动高度
    let b = document.body.scrollTop || document.documentElement.scrollTop;
    let d = 500;
    let c = b;
    timer = requestAnimationFrame(function func() {
      let t = d - Math.max(0, startTime - +new Date() + d);
      document.documentElement.scrollTop = document.body.scrollTop =
        (t * -c) / d + b;
      timer = requestAnimationFrame(func);
      if (t === d) {
        cancelAnimationFrame(timer);
      }
    });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};
