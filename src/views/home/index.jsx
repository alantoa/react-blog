import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import style from "./home.module.scss";
import Grid from "@material-ui/core/Grid";
import Card from "components/Card";
import Dream from "./Dream";
import Recommend from "./Recommend";
// api
import { getArticleList } from "api/articleList";

const dreamData = {
  title: "我的梦想",
  content:
    "不是每个人都应该像我这样去建造一座水晶大教堂，但是每个人都应该拥有自己的梦想，设计自己的梦想，追求自己的梦想，实现自己的梦想。梦想是生命的灵魂，是心灵的灯塔，是引导人走向成功的信仰。有了崇高的梦想，只要矢志不渝地追求，梦想就会成为现实，奋斗就会变成壮举，生命就会创造奇迹。——罗伯·舒乐",
};
const recommendData = {
  title: "推荐文章",
  list: [],
};
export default function Home() {
  useEffect(() => {
    let pagination = {
      pageindex: 1,
      pagesize: 10,
    };
    getArticleList(pagination).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <Container className={style.container}>
      <Card>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="center"
        >
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Dream {...dreamData} />
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Recommend />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
