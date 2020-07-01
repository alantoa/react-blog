import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Typography from "@material-ui/core/Typography";
import CardList from "../CardList";

export default function CustomizedTimeline() {
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <Typography variant="body2" color="textSecondary">
            9-30
          </Typography>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CardList />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <Typography variant="body2" color="textSecondary">
            9-30
          </Typography>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CardList />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <Typography variant="body2" color="textSecondary">
            9-30
          </Typography>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CardList />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <Typography variant="body2" color="textSecondary">
            9-30
          </Typography>
        </TimelineSeparator>
        <TimelineContent>
          <CardList />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
