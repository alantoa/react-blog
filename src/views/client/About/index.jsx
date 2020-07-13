import React, { useEffect, useState } from "react";
import Card from "components/Card";
import BaseInfo from "./BaseInfo";
import SkillBar from "./SkillBars";
import SkillWalls from "./SkilsWall";
import Container from "@material-ui/core/Container";
import FirstBanner from "views/client/FirstBanner";
// api
import { getSkillList } from "api/client/user";
export default function Home() {
  const [skillBars, setSkillBars] = useState([]);

  useEffect(() => {
    getSkillList().then((res) => {
      if (res && res.code === 1 && res.data.length > 0) {
        setSkillBars(res.data);
      }
    });
  }, []);
  return (
    <>
      <FirstBanner />
      <Container className="container">
        <Card>
          <BaseInfo />
          <SkillBar skillBars={skillBars} />
          <SkillWalls walls={skillBars} />
        </Card>
      </Container>
    </>
  );
}
