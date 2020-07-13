import React from "react";
import style from "./card.module.scss";

export default function Card(props) {
  return (
    <div className={`${style.card} ${props.className}`}>
      <div className={style.cardContent}>{props.children}</div>
    </div>
  );
}
