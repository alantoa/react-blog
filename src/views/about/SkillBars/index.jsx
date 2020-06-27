import React, { useEffect } from "react";
import style from "./skill.module.scss";
import SkillBar from "react-skillbars";
import Icon from "components/SvgIcon";
const SKILLS = [
  {
    type: "H5/C3/JS",
    level: 100,
    color: {
      bar: "#33c9dc",
      title: {
        background: "transparent",
        text: "#fff",
      },
    },
  },
  {
    type: "React全家桶",
    level: 85,
    color: {
      bar: "#f44336",
      title: {
        background: "transparent",
        text: "#fff",
      },
    },
  },
  {
    type: "Element/AntD/MaterialUI",
    level: 85,
    color: {
      bar: "#2196f3",
      title: {
        background: "transparent",
        text: "#fff",
      },
    },
  },
  {
    type: "Vue全家桶",
    level: 75,
    color: {
      bar: "#03a9f4",
      title: {
        background: "transparent",
        text: "#fff",
      },
    },
  },
  {
    type: "Node.js",
    level: 50,
    color: {
      bar: "#00bcd4",
      title: {
        background: "transparent",
        text: "#fff",
      },
    },
  },
  {
    type: "Koa",
    level: 50,
    color: {
      bar: "#009688",
      title: {
        background: "transparent",
        text: "#fff",
      },
    },
  },
  {
    type: "MongoDB",
    level: 20,
    color: {
      bar: "#4caf50",
      title: {
        background: "transparent",
        text: "#fff",
      },
    },
  },
  {
    type: "Docker",
    level: 25,
    color: {
      bar: "#8bc34a",
      title: {
        background: "transparent",
        text: "#fff",
      },
    },
  },
  {
    type: "Nginx",
    level: 40,
    color: {
      bar: "#ff5722",
      title: {
        background: "transparent",
        text: "#fff",
      },
    },
  },
  {
    type: "数据结构",
    level: 40,
    color: {
      bar: "#cddc39",
      title: {
        background: "transparent",
        text: "#fff",
      },
    },
  },
];

export default function Home() {
  useEffect(() => {}, []);
  return (
    <div className={style.skills}>
      <div className={style.title}>
        <Icon use="skill" />
        <span>我的技能</span>
      </div>
      <SkillBar skills={SKILLS} animationDuration={1000} animationDelay={300}/>
    </div>
  );
}
