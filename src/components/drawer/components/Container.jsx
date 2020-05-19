import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


export default function MenuDrawer(props) {
  const [state, setState] = React.useState({
    ...props
  });
  // change drawer open status
  React.useEffect(() => {
    setState(props);
  }, [props]);

  // (close || open)'s callback
  function toggleDrawer(open, event) {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({open: open});
  }


  return (
    <SwipeableDrawer
      anchor={'left'}
      {...state}
      onClose={toggleDrawer.bind(this, false)}
      onOpen={toggleDrawer.bind(this, true)}
    >
      {props.children}
    </SwipeableDrawer>
  )
}
