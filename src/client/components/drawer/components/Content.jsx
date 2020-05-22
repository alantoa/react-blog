import React from 'react';
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import routes from '../../../routes/routerConfig'
import {withRouter} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listItem: {
    color: 'rgba(0, 0, 0, 0.87)'
  }
});

function DrawerContent(props) {
  const classes = useStyles();
  //click after close drawer component
  function routerLink(item) {
    props.history.push(item.path);
    props.close();
  }
  return (
    <div className={classes.list}>
      <List>
        {routes.map((item, index) => (
          <ListItem button key={item.name} className={classes.listItem} onClick={routerLink.bind(this,item)}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary={item.name}/>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default withRouter(DrawerContent)
