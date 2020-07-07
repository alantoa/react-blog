import React from "react";
import style from "./wall.module.scss";
import Icon from "components/SvgIcon";

export default function SkillWalls(props) {
  return (
    <div className={style.skills}>
      <div className={style.title}>
        <Icon use="wall" />
        <span>技能墙</span>
      </div>
      
    </div>
  );
}
