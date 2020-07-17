import React, { useState, useEffect } from "react";
import style from "./detail.module.scss";
import Container from "@material-ui/core/Container";
import Banner from "views/client/Banner";
import { Grid, Hidden } from "@material-ui/core";
import store from "redux/index";
import clsx from "clsx";
import "highlight.js/styles/atom-one-light.css";
import "assets/style/markdown.scss";
// api
import { articleDetail } from "api/client/article";

export default function Detail(props) {
  const [detailData, setDetailData] = useState({});
  const [fixed, setFixed] = useState(false);

  const handleScroll = (e) => {
    const scrollTop =
      (e.srcElement ? e.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (e.srcElement ? e.srcElement.body.scrollTop : 0);

    if (scrollTop > store.getState().swiper - 40) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    articleDetail(props.match.params.id).then((res) => {
      if (res && res.code === 1) {
        setDetailData(res.data);
      } else {
        props.history.push("/404");
      }
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props]);
  return (
    <>
      <Banner {...detailData} />
      {detailData && (
        <Container className={style.container} maxWidth="md">
          <Grid container>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <div
                dangerouslySetInnerHTML={{ __html: detailData.html }}
                className={`${style.card} markdown-body`}
              ></div>
            </Grid>
            <Hidden smDown>
              <Grid item lg={3} md={3}>
                <div className={clsx(style.catalog, fixed && style.fixed)}>
                  <h3>-CATALOG</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: detailData.toc }}
                  ></div>
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      )}
    </>
  );
}
