import React, { useEffect } from "react";
import Card from "components/Card";
import TimeLine from "./TimeLine";
import Container from "@material-ui/core/Container";
import FirstBanner from "views/client/FirstBanner";
// api

export default function Archive() {
  useEffect(() => {}, []);
  return (
    <>
      <FirstBanner />
      <Container className="container">
        <Card>
          <TimeLine />
        </Card>
      </Container>
    </>
  );
}
