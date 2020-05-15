import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const style = makeStyles(() => ({
  root: {
    background:"#3f51b5",
    color:'#fff',
    height:40,
    fontSize:15,
    textAlign:'center',
    lineHeight:'40px'
  }
}))
export default function Footer() {
  const classes = style();
  return (
    <div className={classes.root}>
      Copyright © 2020 Alan Toa
    </div>
  );
}
