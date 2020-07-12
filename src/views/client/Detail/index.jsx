import React, { useState, useEffect } from "react";
import style from "./detail.module.scss";
import Card from "components/Card";
// api
import { articleDetail } from "api/client/article";

export default function Detail(props) {
  const [detailData, setDetailData] = useState([]);
  useEffect(() => {
    articleDetail(props.match.params.id).then((res) => {
      if (res && res.code === 1) {
        setDetailData(res.data);
      } else {
        props.history.push("/404");
      }
    });
  }, [props]);
  return (
    <>
      <div className={style.content}>
        <Card>
          <div dangerouslySetInnerHTML={{ __html: detailData.html }}></div>{" "}
        </Card>
      </div>
      <div className={style.catalog}></div>
    </>
  );
}
