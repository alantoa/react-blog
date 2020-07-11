import React from "react";
import style from "./wall.module.scss";
import Icon from "components/SvgIcon";
import Button from "@material-ui/core/Button";

export default function SkillWalls(props) {
  return (
    <div className={style.skills}>
      <div className={style.title}>
        <Icon use="wall" />
        <span>技能墙</span>
      </div>
      <div className={style.content}>
        {props.walls.map((item) => {
          return (
            <Button variant="outlined" style={{color:item.background,borderColor:item.background,}} className={style.btn} key={item._id}>
              {item.type}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
