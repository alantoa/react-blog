import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
// import { normal } from "utils/MaterailUiColors";
const useStyles = makeStyles((theme) => ({
  dialog: {
    width: 400,
  },
  item: {
    marginBottom: 20,
  },
}));

export default function AddSkillsModel(props) {
  const classes = useStyles();
  const [skillData, setSkillData] = useState({
    type: "",
    level: 0,
    color: "",
    sort: 0,
    status: 0,
  });
  const handleChange = (e) => {
    e.persist();
    console.log(e);
    setSkillData({
      ...skillData,
      [e.target.name]: e.target.value ? e.target.value : e.target.checked,
    });
  };
  // const changeColor = (e) => {
    // console.log(e);
    // setSkillData({
    //   ...skillData,
    //   [skillData.color]: e.css !== undefined ? e.css.backgroundColor : e,
    // });
  // };
  const submitData = () => {
    console.log(skillData);
  };
  return (
    <>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">新增</DialogTitle>
        <DialogContent className={classes.dialog}>
          <div className={classes.item}>
            <TextField
              autoFocus
              required
              name="type"
              value={skillData.type}
              label="Type"
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className={classes.item}>
            <TextField
              required
              label="Level"
              type="number"
              onChange={handleChange}
              fullWidth
              name="level"
              value={skillData.level}
            />
          </div>
          <div className={classes.item}>
            <TextField
              required
              label="Sort"
              type="number"
              onChange={handleChange}
              fullWidth
              name="sort"
              value={skillData.sort}
            />
          </div>
          <div className={classes.item}>
            <TextField
              required
              label="Status"
              onChange={handleChange}
              type="number"
              name="status"
              fullWidth
              value={skillData.status}
            />
          </div>
          <div className={classes.item}>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitData} color="primary">
            Affirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
