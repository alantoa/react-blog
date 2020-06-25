import React from "react";

export default function Icon(props) {
  const style = {
    width: "1em",
    height: "1em",
    fill: "currentColor",
  };
  return (
    <>
      <svg className={props.className} style={style} aria-hidden="true">
        <use xlinkHref={`#${props.use}`}></use>
      </svg>
    </>
  );
}
