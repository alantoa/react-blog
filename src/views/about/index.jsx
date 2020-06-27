import React, { useEffect } from "react";
import Card from "components/Card";
import BaseInfo from "./BaseInfo";
import SkillBar from './SkillBars'
// api

export default function Home() {
  useEffect(() => {}, []);
  return (
    <Card>
      <BaseInfo />
      <SkillBar/>
    </Card>
  );
}
