import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddSkillsModel from "./AddSkillsModel";
import { toast } from "react-toastify";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { color } from "utils/MaterailUiColors";
// api
import {
  getskillList,
  addskill,
  updateskillList,
  updateskillAll,
  delskillList,
} from "api/skill";
const useStyles = makeStyles({
  root: {},
  btn: {
    "&:not(:last-of-type)": {
      marginRight: 20,
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
  },
  slider: {
    width: "calc(100% - 100px)",
  },
});

export default function DiscreteSlider() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [dialog, setDialog] = useState({
    open: false,
    option: "update",
  });
  const [skillData, setSkillData] = useState({
    type: "",
    level: 0,
    color: {
      bar: "",
    },
    sort: 0,
    status: 0,
  });
  const handleClickOpen = () => {
    setSkillData({
      type: "",
      level: 0,
      background: "",
      color: {
        bar: "",
      },
      sort: 0,
      status: 0,
    });
    setDialog({
      option: "add",
      open: true,
    });
  };

  const handleChange = (e) => {
    e.persist();
    if (e.target.name === "color") {
      setSkillData({
        ...skillData,
        background: e.target.value ? e.target.value : e.target.initColor,
      });
    } else {
      setSkillData({
        ...skillData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const submitData = () => {
    let fun, word;
    switch (dialog.option) {
      case "add":
        fun = addskill;
        word = "新增";
        break;
      case "update":
        fun = updateskillList.bind(this,skillData._id);
        word = "更新";
        break;
      default:
        return;
    }
    skillData.color.bar = skillData.background
      ? skillData.background
      : color[Math.round(Math.random() * 18)];
    fun(skillData).then((res) => {
      console.log(res);
      if (res && res.code === 1) {
        toast(`${word}成功!`);
        setDialog({
          ...dialog,
          open: false,
        });
        getskillList().then((res) => {
          if (res && res.code === 1) {
            setRows(res.data);
          }
        });
      }
    });
  };
  
  const handleClose = () => {
    setDialog({
      ...dialog,
      open: false,
    });
  };
  const delSkill = (id) => {
    delskillList({ id }).then((res) => {
      if (res && res.code === 1) {
        toast("删除成功!");
        getskillList().then((res) => {
          if (res && res.code === 1) {
            setRows(res.data);
          }
        });
      }
    });
  };
  const updataSkill = (item) => {
    setDialog({
      option: "update",
      open: true,
    });
    setSkillData({
      ...item,
    });
  };
  useEffect(() => {
    getskillList().then((res) => {
      if (res && res.code === 1) {
        setRows(res.data);
      }
    });
  }, []);
  const updateAll = ()=>{
    updateskillAll(rows).then(res=>{
      console.log(res)
    })
  }
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
        onClick={updateAll}
        disableElevation
      >
        更新
      </Button>
      <Grid container spacing={3}>
        {rows.map((item) => {
          return (
            <Grid item lg={6} md={6} sm={12} xs={12} key={item._id}>
              <Typography id="discrete-slider" gutterBottom>
                {item.type ? item.type : " "}
              </Typography>
              <div className={classes.item}>
                <Slider
                  className={classes.slider}
                  defaultValue={item.level}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  style={{ color: item.color.bar }}
                  step={5}
                  marks
                  min={10}
                  max={100}
                />
                <IconButton
                  aria-label="delete"
                  onClick={delSkill.bind(this, item._id)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={updataSkill.bind(this, item)}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <AddSkillsModel
        {...dialog}
        skillData={skillData}
        handleClose={handleClose}
        handleChange={handleChange}
        submitData={submitData}
      />
    </>
  );
}
