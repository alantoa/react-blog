import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Typography from "@material-ui/core/Typography";
import CardList from "../CardList";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  timeTitle: {
    whiteSpace: "nowrap",
  },
  pagination: {
    textAlign: "center",
    "& > *": {
      marginTop: theme.spacing(2),
    },
    "& > .MuiPagination-ul": {
      justifyContent: "center",
    },
  },
}));

const timeData = [1, 2, 3, 4];
export default function CustomizedTimeline() {
  const classes = useStyles();
  return (
    <>
      <Timeline align="alternate">
        {timeData.map((item, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <Typography
                  variant="body2"
                  className={classes.timeTitle}
                  color="textSecondary"
                >
                  9-30
                </Typography>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <CardList />
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
      <Pagination count={11} defaultPage={6} className={classes.pagination} />
    </>
  );
}
