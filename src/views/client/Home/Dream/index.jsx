import React from "react";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import style from "./dream.module.scss";
import store from 'redux/index'
export default function Dream(props) {
  return (
    <div className={style.dream}>
      <div className={style.title}>
        <EmojiObjectsOutlinedIcon className={style.icon} />
        <span>{props.title}</span>
      </div>
      <div className={style.content}>{store.getState().user.dream}</div>
    </div>
  );
}
