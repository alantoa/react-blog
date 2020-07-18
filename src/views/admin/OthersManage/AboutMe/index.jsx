import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { DateTimePicker } from "@material-ui/pickers";
import { toast } from "react-toastify";

import { useForm, Controller } from "react-hook-form";
import store from "redux/index";
// api
import { getAbout, editAbout } from "api/about";

// style
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    margin: "20px 0",
  },
  form: {
    minWidth: 200,
    maxWidth: 800,
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(2, 0),
    width: "100%",
    position: "relative",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  publish: {
    marginTop: 10,
    textAlign: "right",
  },
  visible: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  formLabel: {
    color: "rgba(0, 0, 0, 0.54)",
    marginBottom: 10,
    fontSize: ".785rem",
  },
}));
let falg = true;
export default function AboutMe(props) {
  const classes = useStyles();
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      userId: "",
      name: "",
      avatar: "",
      url: "",
      age: "",
      sign: "",
      base: "",
      level: "",
      hobby: "",
      dream: "",
      isVisible: true,
      birthday: new Date(),
      source: "",
      major: "",
      intro: "",
      status: "",
    },
  });

  useEffect(() => {
    if (falg) {
      setValue("userId", store.getState().user._id);
      getAbout(store.getState().user._id).then((res) => {
        let formData = control.getValues();
        if (res && res.code === 1) {
          Object.keys(formData).map((key) => {
            if (res.data.hasOwnProperty(key)) {
              setValue(key, res.data[key]);
            }
            return 0;
          });
        }
      });
      falg = false
    }
  });
  const onSubmit = (data) => {
    console.log(data);
    editAbout(data).then((res) => {
      if (res && res.code === 1) {
        toast("修改成功!");
      }
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit.bind(this))}>
      <h3 className={classes.title}>更新个人信息</h3>

      <section className={classes.formControl}>
        <Controller
          as={TextField}
          name="name"
          required
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
          label="姓名"
          placeholder="输入姓名..."
          fullWidth
          control={control}
        />
      </section>
      <section className={classes.formControl}>
        <Controller
          as={TextField}
          name="age"
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
          label="年龄"
          placeholder="输入年龄..."
          fullWidth
          control={control}
        />
      </section>
      <section className={classes.formControl}>
        <Controller
          as={TextField}
          name="avatar"
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
          label="头像"
          placeholder="输入头像地址..."
          fullWidth
          control={control}
        />
      </section>

      <section className={classes.formControl}>
        <Controller
          as={TextField}
          label="签名"
          placeholder="输入签名..."
          fullWidth
          name="sign"
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
        />
      </section>
      <section className={classes.formControl}>
        <Controller
          as={TextField}
          label="位置"
          placeholder="输入位置..."
          fullWidth
          name="base"
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
        />
      </section>
      <section className={classes.formControl}>
        <Controller
          as={TextField}
          label="爱好"
          placeholder="输入爱好..."
          fullWidth
          name="hobby"
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
        />
      </section>
      <section className={classes.formControl}>
        <Controller
          as={TextField}
          label="梦想"
          placeholder="输入梦想..."
          fullWidth
          name="dream"
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
        />
      </section>
      <section className={classes.formControl}>
        <Controller
          as={TextField}
          label="专业"
          placeholder="输入专业..."
          fullWidth
          name="major"
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
        />
      </section>
      <section className={classes.formControl}>
        <Controller
          as={TextField}
          label="个人介绍"
          placeholder="输入介绍..."
          fullWidth
          name="intro"
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
        />
      </section>
      <section className={classes.formControl}>
        <Controller
          as={TextField}
          label="状态"
          placeholder="输入状态..."
          fullWidth
          name="status"
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
        />
      </section>
      <section className={classes.formControl}>
        <Controller
          render={(props) => (
            <DateTimePicker
              onChange={(e) => {
                props.onChange((props.value = e.format()));
              }}
              value={props.value}
              variant="inline"
              label="生日"
            />
          )}
          required
          name="birthday"
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
        />
      </section>
      <section className={classes.publish}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          type="submit"
        >
          立即更新
        </Button>
      </section>
    </form>
  );
}
