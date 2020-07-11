import React from "react";
import style from "./skill.module.scss";
import SkillBar from "react-skillbars";
import Icon from "components/SvgIcon";


export default function SkillBars(props) {
  return (
    <div className={style.skills}>
      <div className={style.title}>
        <Icon use="skill" />
        <span>我的技能</span>
      </div>
      <SkillBar
        skills={props.skillBars}
        animationDuration={1000}
        animationDelay={300}
      />
    </div>
  );
}
