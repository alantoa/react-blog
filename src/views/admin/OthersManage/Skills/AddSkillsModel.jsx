import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import MaterialColorPicker from "react-material-color-picker";



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
  return (
    <>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.option==='add'?'新增':'更新'}</DialogTitle>
        <DialogContent className={classes.dialog}>
          <div className={classes.item}>
            <TextField
              autoFocus
              required
              name="type"
              value={props.skillData.type}
              label="Type"
              onChange={props.handleChange}
              fullWidth
            />
          </div>
          <div className={classes.item}>
            <TextField
              required
              label="Level"
              type="number"
              onChange={props.handleChange}
              fullWidth
              name="level"
              value={props.skillData.level}
            />
          </div>
          <div className={classes.item}>
            <TextField
              required
              label="Sort"
              type="number"
              onChange={props.handleChange}
              fullWidth
              name="sort"
              value={props.skillData.sort}
            />
          </div>
          <div className={classes.item}>
            <TextField
              required
              label="Status"
              onChange={props.handleChange}
              type="number"
              name="status"
              fullWidth
              value={props.skillData.status}
            />
          </div>
          <div className={classes.item}>
            <TextField
              autoFocus
              name="color"
              value={props.skillData.background}
              label="Color"
              onChange={props.handleChange}
              fullWidth
            />
            <span
              className={classes.viewColor}
              style={{ backgroundColor: props.skillData.background }}
            ></span>
            <MaterialColorPicker
              onSubmit={props.handleChange}
              onSelect={props.handleChange}
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
          <Button onClick={props.submitData} color="primary">
            {props.option==='add'?'affirm':props.option}
            
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
