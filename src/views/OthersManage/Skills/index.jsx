import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddSkillsModel from "./AddSkillsModel";
// api
import { getskillList } from "api/skill";
const useStyles = makeStyles({
  root: {},
  btn: {
    "&:not(:last-of-type)": {
      marginRight: 20,
    },
  },
});

export default function DiscreteSlider() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getskillList().then((res) => {
      if(res && res.code === 1){
        setRows(res.data);
        console.log(res.data)
      }
      
    });
  }, []);
  return (
    <>
      <Button
        variant="contained"
        className={classes.btn}
        color="primary"
        disableElevation
        onClick={handleClickOpen}
      >
        新增
      </Button>
      <Button
        variant="contained"
        className={classes.btn}
        color="secondary"
        disableElevation
      >
        更新
      </Button>
      <Grid container spacing={3}>
        {rows.map((item) => {
          return (
            <Grid item lg={6} md={6} sm={12} xs={12} key={item._id}>
              <Typography id="discrete-slider" gutterBottom>
                {item.type}
              </Typography>
              <Slider
                defaultValue={item.level}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={5}
                marks
                min={10}
                max={100}
              />
            </Grid>
          );
        })}
      </Grid>
      <AddSkillsModel open={open} handleClose={handleClose} />
    </>
  );
}
