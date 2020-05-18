import React from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export default function OnScrollHide(props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({target: window ? window() : undefined});
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

OnScrollHide.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
