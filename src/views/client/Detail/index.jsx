import React, { useState, useEffect } from "react";
import style from "./detail.module.scss";
import Card from "components/Card";
import Container from "@material-ui/core/Container";
import Banner from "views/client/Banner";
import Button from "@material-ui/core/Button";
// api
import { articleDetail } from "api/client/article";

export default function Detail(props) {
  const [detailData, setDetailData] = useState({});
  useEffect(() => {
    articleDetail(props.match.params.id).then((res) => {
      if (res && res.code === 1) {
        setDetailData(res.data);
        res.data.tag.map((item) => {
          return console.log(item);
        });
      } else {
        props.history.push("/404");
      }
    });
  }, [props]);
  return (
    <>
      <Banner cover={detailData.cover} title={detailData.title} />
      {detailData && (
        <Container className="container">
          <Card className={style.card}>
            <div className={style.tags}>
              {detailData.tag &&
                detailData.tag.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      className={style.tag}
                      variant="outlined"
                    >
                      {item}
                    </Button>
                  );
                })}
            </div>
            <div dangerouslySetInnerHTML={{ __html: detailData.html }}></div>
          </Card>
          <div className={style.catalog}>
            <h3>目录</h3>
          </div>
        </Container>
      )}
    </>
  );
}
