import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { menu } from "config/system.config";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listItem: {
    color: "rgba(0, 0, 0, 0.87)",
  },
  menuItem: {
    display: "flex",
    fontSize: 20,
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
          {menu.map((item, index) => (
            <ListItem
              button
              key={item.name}
              className={classes.listItem}
              onClick={routerLink.bind(this, item)}
            >
              <span className={classes.menuItem}>{item.name}</span>
            </ListItem>
          ))}
        </List>
      </div>
    </SwipeableDrawer>
  );
}
export default withRouter(MenuDrawer);
