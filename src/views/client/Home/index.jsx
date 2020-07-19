import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "components/Card";
import Dream from "./Dream";
import Recommend from "./Recommend";
import Container from "@material-ui/core/Container";
import Swiper from "./Swiper";
// api
import { getRecommend } from "api/client/article";



export default function Home() {
  const [recommendList, setRecommendData] = useState([]);
  useEffect(() => {
    let isUnmount = false;
    let pagination = {
      pageindex: 1,
      pagesize: 4,
    };
    getRecommend(pagination).then((res) => {
      if (res && !isUnmount) {
        setRecommendData(res.data);
      }
    });
    return () => (isUnmount = true);
  }, []);
  return (
    <>
      <Swiper />
      <Container className="container">
        <Card>
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <Dream title='LIFE MOTTO'/>
            </Grid>
            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              style={{ width: "100%" }}
            >
              <Recommend list={recommendList} />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
