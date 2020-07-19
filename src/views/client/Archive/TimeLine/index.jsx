import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import store from "redux/index";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root:{
    [theme.breakpoints.down("sm")]: {
      padding:'10px 0px'
    },
  },
  timeTitle: {
    whiteSpace: "nowrap",
  },
  item:{
    "&::before":{
      [theme.breakpoints.down("sm")]: {
        content:'none'
      },
    }
  },
  separator: {
    [theme.breakpoints.down("sm")]: {
      display:'none'
    },
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
const useStylesCard = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  moreBtn: {
    marginLeft: "auto",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CustomizedTimeline(props) {
  const classes = useStyles();
  const classesCard = useStylesCard();
  return (
    <>
      <Timeline className={classes.root} align="alternate">
        {props.list &&
          props.list.map((item, index) => {
            return (
              <TimelineItem key={index} className={classes.item}>
                <TimelineSeparator className={classes.separator}>
                  <Typography
                    variant="body2"
                    className={classes.timeTitle}
                    color="textSecondary"
                  >
                    {moment(item.releaseTime).format("YYYY-MM-DD")}
                  </Typography>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card>
                    <Link to={`detail/${item._id}`}>
                      <CardHeader
                        avatar={
                          <Avatar
                            aria-label="recipe"
                            src={store.getState().user.avatar}
                            className={classesCard.avatar}
                          >
                            T
                          </Avatar>
                        }
                        title={item.title}
                        subheader={moment(item.releaseTime).format(
                          "DD/MM/YYYY"
                        )}
                      />
                      <CardMedia
                        className={classesCard.media}
                        image={
                          item.cover
                            ? item.cover
                            : require("assets/image/toa.png")
                        }
                        title={item.title}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.desc}
                        </Typography>
                      </CardContent>
                    </Link>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <IconButton
                        aria-label="settings"
                        className={classesCard.moreBtn}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            );
          })}
      </Timeline>
      <Pagination
        count={Math.ceil(props.total / props.pagesize)}
        className={classes.pagination}
        onChange={props.setPage}
      />
    </>
  );
}
