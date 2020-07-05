import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddSkillsModel from "./AddSkillsModel";

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
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Grid container  spacing={3}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography id="discrete-slider" gutterBottom>
            Web
          </Typography>
          <Slider
            defaultValue={30}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={100}
          />
        </Grid>
      </Grid>
      <AddSkillsModel open={open} handleClose={handleClose} />
    </>
  );
}
