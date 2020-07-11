import React from "react";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import style from "./dream.module.scss";

export default function Dream(props) {
  return (
    <div className={style.dream}>
      <div className={style.title}>
        <EmojiObjectsOutlinedIcon className={style.icon} />
        <span>{props.title}</span>
      </div>
      <div className={style.content}>{props.content}</div>
    </div>
  );
}
