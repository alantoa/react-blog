import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {menu} from "config/system.config";
import style from "./footer.module.scss";
import { withRouter } from "react-router-dom";

function Bottom(props) {
  const [value, setValue] = React.useState(props.location.pathname);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        props.history.push(newValue);
      }}
      showLabels
      className={style.bottom}
    >
      {menu.map((item, index) => {
        return (
          <BottomNavigationAction
            className={style.btn}
            key={index}
            value={item.path}
            label={item.name}
            icon={<item.icon />}
          />
        );
      })}
    </BottomNavigation>
  );
}
export default withRouter(Bottom);
