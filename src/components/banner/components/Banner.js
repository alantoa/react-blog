import React from "react";
import Paper from "@material-ui/core/Paper";
import bannerBg from '../../../image/banner/banner.jpg'
import {makeStyles} from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight:556
  }
}))
export default function MyBanner() {
  const classes = style();
  return (
    <>
      <Paper elevation={0}>
        <img className={classes.root} src={bannerBg} alt="banner"/>
      </Paper>
    </>
  )
}
