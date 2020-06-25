import React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";


 export default function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 30,
    });
    return React.cloneElement(children, {
      elevation: trigger ? 2 : 0,
      className: trigger ? 'fixbar' : '',
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired
  };