import React from 'react';

import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import routes from '../../../routes/routerConfig'
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listItem: {
    color: 'rgba(0, 0, 0, 0.87)'
  }
});
export default function DrawerContent() {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <List>
        {routes.map((item, index) => (
          <Link key={item.name} to={item.path}>
            <ListItem button className={classes.listItem}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )
}
