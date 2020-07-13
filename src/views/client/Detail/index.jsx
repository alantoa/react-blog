import React, { useState, useEffect } from "react";
import style from "./detail.module.scss";
import Container from "@material-ui/core/Container";
import Banner from "views/client/Banner";
import { Grid, Hidden } from "@material-ui/core";
import store from "redux/index";
import clsx from "clsx";

// api
import { articleDetail } from "api/client/article";

export default function Detail(props) {
  const [detailData, setDetailData] = useState({});
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    articleDetail(props.match.params.id).then((res) => {
      if (res && res.code === 1) {
        setDetailData(res.data);
        window.addEventListener("scroll", (event) => {
          const scrollTop =
            (event.srcElement
              ? event.srcElement.documentElement.scrollTop
              : false) ||
            window.pageYOffset ||
            (event.srcElement ? event.srcElement.body.scrollTop : 0);
          if (scrollTop > store.getState().swiper) {
            setFixed(true);
          } else {
            setFixed(false);
          }
        });
      } else {
        props.history.push("/404");
      }
    });
  }, [props]);
  return (
    <>
      <Banner {...detailData} />
      {detailData && (
        <Container className={style.container}>
          <Grid container spacing={2}>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <div
                dangerouslySetInnerHTML={{ __html: detailData.html }}
                className={style.card}
              ></div>
            </Grid>
            <Hidden smDown>
              <Grid item lg={3} md={3}>
                <div className={clsx(style.catalog, fixed && style.fixed)}>
                  <h3>-Catalog</h3>
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      )}
    </>
  );
}
