import React, { useEffect, useState } from "react";
import Card from "components/Card";
import TimeLine from "./TimeLine";
import Container from "@material-ui/core/Container";
import FirstBanner from "views/client/FirstBanner";
// api
import { getArticle } from "api/client/article";
export default function Archive() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPagination] = useState(1);
  const [pagesize] = useState(5);
  useEffect(() => {
    getArticle({
      pageindex: page
    }).then((res) => {
      if (res && res.code === 1) {
        setList(res.data.list);
        setTotal(res.data.total)
      }
    });
  }, [page]);
  const setPage=(e,pageindex)=>{
    setPagination(pageindex)
  }
  return (
    <>
      <FirstBanner />
      <Container className="container">
        <Card>
          <TimeLine list={list} page={page} pagesize={pagesize} total={total} setPage={setPage} />
        </Card>
      </Container>
    </>
  );
}
