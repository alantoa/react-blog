import React, { useEffect,useState } from "react";
import style from "./skill.module.scss";
import SkillBar from "react-skillbars";
import Icon from "components/SvgIcon";
// api
import {getSkillList} from 'api/client/user'
const SKILLS = [
  {
    type: "H5/C3/JS",
    level: 100,
    color: {
      bar: "#33c9dc"
    },
  },
  {
    type: "React全家桶",
    level: 85,
    color: {
      bar: "#f44336"
    },
  },
  {
    type: "Element/AntD/MaterialUI",
    level: 85,
    color: {
      bar: "#2196f3"
    },
  },
  {
    type: "Vue全家桶",
    level: 75,
    color: {
      bar: "#03a9f4"
    },
  },
  {
    type: "Node.js",
    level: 50,
    color: {
      bar: "#00bcd4"
    },
  },
  {
    type: "Koa",
    level: 50,
    color: {
      bar: "#009688"
    },
  },
  {
    type: "MongoDB",
    level: 20,
    color: {
      bar: "#4caf50"
    },
  },
  {
    type: "Docker",
    level: 25,
    color: {
      bar: "#8bc34a"
    },
  },
  {
    type: "Nginx",
    level: 40,
    color: {
      bar: "#ff5722"
    },
  },
  {
    type: "数据结构",
    level: 40,
    color: {
      bar: "#cddc39"
    },
  },
];

export default function Home() {
  const [skillBars, setSkillBars] = useState(SKILLS);
  useEffect(() => {
    getSkillList().then(res=>{
      console.log(res);
      if(res && res.code === 1 && res.data.length>0){
        setSkillBars(res.data)
      }
    })
  }, []);
  return (
    <div className={style.skills}>
      <div className={style.title}>
        <Icon use="skill" />
        <span>我的技能</span>
      </div>
      <SkillBar skills={skillBars} animationDuration={1000} animationDelay={300}/>
    </div>
  );
}
