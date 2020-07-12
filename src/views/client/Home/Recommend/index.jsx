import React from "react";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import style from "./recommend.module.scss";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'

export default function Recommend(props) {
  return (
    <div className={style.dream}>
      <div className={style.title}>
        <EmojiObjectsOutlinedIcon className={style.icon} />
        <span>推荐文章</span>
      </div>
      <div className={style.content}>
        <Grid container spacing={2}>
          {props.list.map((item) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={6} key={item._id}>
                <div className={style.postCard} style={{backgroundImage:`url('${item.cover}')`}}>
                  <div className={style.postBody}>
                    <div className={style.catlog}>{item.type}</div>
                    <h4 className={style.title}>{item.title}</h4>
                    <p className={style.desc}>{item.desc}</p>
                    <Link to={'/detail/'+ item._id}><Button variant="outlined" className={style.more}>阅读更多</Button></Link>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
