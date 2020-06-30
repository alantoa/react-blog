import React, { useEffect } from "react";
import Card from "components/Card";
import TimeLine from "./TimeLine";
// api

export default function Home() {
  useEffect(() => {}, []);
  return (
    <Card>
      <TimeLine />
    </Card>
  );
}
