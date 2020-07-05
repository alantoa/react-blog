import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import MaterialColorPicker from "react-material-color-picker";
import setNotification from 'utils/setNotification'
// api
import {addskill} from 'api/skill'

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: 500,
  },
  item: {
    marginBottom: 20,
    position: "relative",
  },
  viewColor: {
    float: "right",
    display: "inline-block",
    width: 20,
    height: 20,
    position: "absolute",
    right: 0,
    top: 20,
    border: "1px solid #eee",
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
    setSkillData({
      ...skillData,
      [e.target.name]:
        e.target.name === "color"
          ? e.target.value
            ? e.target.value
            : "#000"
          : e.target.value,
    });
  };

  const submitData = () => {
    console.log(skillData);
    addskill(skillData).then(res=>{
      console.log(res)
      if(res &&  res.code === 1){
        setNotification('添加成功!')
      }
    })
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
            <TextField
              autoFocus
              name="color"
              value={skillData.color}
              label="Color"
              onChange={handleChange}
              fullWidth
            />
            <span
              className={classes.viewColor}
              style={{ backgroundColor: skillData.color }}
            ></span>
            <MaterialColorPicker
              onSubmit={handleChange}
              onSelect={handleChange}
              submitLabel="Apply"
              resetLabel="Undo"
              name="color"
            />
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
