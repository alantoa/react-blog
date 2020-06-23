import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
import ArticleManage from '../ArticleManage'
const useStyles = makeStyles({
  page: {
    width: '50vw',
    minWidth:800,
    padding:'10px 20px'
  },
});
export default function EditArticleDrawer(props) {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor="right"
      open={props.open}
      onClose={props.closeDrawer}
      onOpen={props.showDrawer}
    >
        <div className={classes.page}>
            <ArticleManage currentData={props.currentItem} closeDrawer={props.closeDrawer}/>
        </div>
    </SwipeableDrawer>
  );
}
