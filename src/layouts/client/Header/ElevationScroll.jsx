import React,{useState} from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import clsx from "clsx";
import store from "redux/index";
import style from "./header.module.scss";

export default function ElevationScroll(props) {
  const [height,setHeight] = useState()
  store.subscribe(() => {
    setHeight(store.getState().swiper)
  });
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  });
  const overSwiper = useScrollTrigger({
    disableHysteresis: true,
    threshold: height,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    className: clsx(style.normal,trigger && style.fixbar, overSwiper && style.dark),
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
