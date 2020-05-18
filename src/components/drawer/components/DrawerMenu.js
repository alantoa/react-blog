import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DrawerContent from './DraweList'


export default function MenuDrawer(props) {
  // console.log(props)
  const [state, setState] = React.useState({
    ...props
  });
  React.useEffect(() => {
    setState(props);
  }, [props])
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({open: open});
  };
  return (
    <SwipeableDrawer
      anchor={'left'}
      {...state}
      onClose={toggleDrawer('left', false)}
      onOpen={toggleDrawer('left', true)}
    >
      <DrawerContent/>
    </SwipeableDrawer>
  )
}
