import React from "react";
import style from "./icon.module.scss";

export default function Icon(props) {
  return (
    <>
      <svg className={style.svg} aria-hidden="true">
        <use xlinkHref={`#${props.use}`}></use>
      </svg>
    </>
  );
}
