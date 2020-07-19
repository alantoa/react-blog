import React, { useEffect } from "react";
import style from "./baseinfo.module.scss";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import DraftsIcon from "@material-ui/icons/Drafts";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import store from "redux/index";
// api

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {}, []);
  return (
    <>
      <div className={style.avatar}>
        <img src={store.getState().user.avatar} alt="avatar"/>
      </div>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        className={clsx(style.info, matches && style.md)}
      >
        <Grid item xs={12} sm={10} md={4} lg={4}>
          <div className={style.statisBox}>
            <div className={style.statis}>
              <span className={style.count}>
                <a href="/">59</a>
              </span>
              <span className={style.name}>文章</span>
            </div>
            <div className={style.statis}>
              <span className={style.count}>
                <a href="/">59</a>
              </span>
              <span className={style.name}>文章</span>
            </div>
            <div className={style.statis}>
              <span className={style.count}>
                <a href="/">59</a>
              </span>
              <span className={style.name}>文章</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={10} md={4} lg={4}>
          <div className={style.author}>
            <div className={style.title}>{store.getState().user.name}</div>
            <div className={style.career}>{store.getState().user.major}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={10} md={4} lg={4}>
          <div className={style.link}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              href="https://github.com/monsteranan"
            >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
              href="mailto:toacncom@gmail.com"
            >
              <IconButton>
                <DraftsIcon />
              </IconButton>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              href="https://twitter.com/Toa_anan"
            >
              <IconButton>
                <TwitterIcon />
              </IconButton>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              href="https://www.instagram.com/thealantoa/"
            >
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </a>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
