import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import routes from "@/routes/clientRouterConfig";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listItem: {
    color: "rgba(0, 0, 0, 0.87)",
  },
});
function MenuDrawer(props) {
  
  const classes = useStyles();
  //click after close drawer component

  const routerLink = (item) => {
    props.history.push(item.path);
    props.closeDrawer();
  };
  // change drawer open status

  return (
    <SwipeableDrawer
      anchor="left"
      open={props.open}
      onClose={props.closeDrawer}
      onOpen={props.showDrawer}
    >
      <div className={classes.list}>
        <List>
          {routes.map((item, index) => (
            <ListItem
              button
              key={item.name}
              className={classes.listItem}
              onClick={routerLink.bind(this, item)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </div>
    </SwipeableDrawer>
  );
}
export default withRouter(MenuDrawer);
