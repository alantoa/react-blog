import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import MarkDown from "@/components/MarkDown";
import { DateTimePicker } from "@material-ui/pickers";
import Switch from "@material-ui/core/Switch";
import setNotification from '@/utils/setNotification'
// api
import { addArticleList, updateArticleList } from "@/api/article";

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
}));

const names = [
  "HTML",
  "CSS",
  "javascript",
  "Vue.js",
  "React.js",
  "Webpack",
  "Babel",
  "Nginx",
  "Docker",
  "Travis CI",
];

export default function ArticleManage(props) {
  const classes = useStyles();
  const [articleData, setArticleData] = useState(
    props.currentData?{...props.currentData}:{
    type: [],
    html: "",
    title: "",
    markdown: "",
    github: "",
    desc: "",
    level: "",
    isVisible: true,
    releaseTime: new Date(),
    source: "",
  });

  const handleChange = (e) => {
    e.persist();

    setArticleData({
      ...articleData,
      [e.target.name]: e.target.value ? e.target.value : e.target.checked,
    });
  };

  const publishArtocle = () => {
    if(props.currentData){
      updateArticleList(articleData).then(res=>{
        if(res && res.code === 1){
          setNotification('修改成功!')
          props.closeDrawer()
        }
      })
    }else{
      addArticleList(articleData).then(res=>{
        if(res && res.code === 1){
          setNotification('添加成功!')
        }
        
      });
    }
    
  };
  return (
    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
      <h3 className={classes.title}>添加文章</h3>
      <FormControl required className={classes.formControl}>
        <InputLabel shrink>文章类型</InputLabel>
        <Select
          displayEmpty
          multiple
          name="type"
          value={articleData.type}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>选择文章类型</em>;
            }

            return selected.join(", ");
          }}
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>选择文章类型</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={classes.formControl}>
        <TextField
          required
          label="标题"
          placeholder="请输入标题"
          fullWidth
          name="title"
          value={articleData.title}
          margin="normal"
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.formControl}>
        <TextField
          multiline
          label="描述"
          placeholder="请输入描述"
          fullWidth
          name="desc"
          rows={2}
          value={articleData.desc}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.formControl}>
        <MarkDown onChange={handleChange} markdown={articleData.markdown} />
      </div>
      <div className={classes.formControl}>
        <TextField
          required
          label="级别"
          placeholder="请输入级别"
          fullWidth
          name="level"
          value={articleData.level}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.formControl}>
        <TextField
          required
          label="来源"
          placeholder="请输入来源"
          fullWidth
          name="source"
          value={articleData.source}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.formControl}>
        <TextField
          required
          label="Github"
          placeholder="请输入Github"
          fullWidth
          name="github"
          value={articleData.github}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.formControl}>
        <DateTimePicker
          required
          variant="inline"
          label="发布时间"
          value={articleData.releaseTime}
          format="yyyy/MM/dd HH:mm"
          onChange={(e) =>
            setArticleData({
              ...articleData,
              releaseTime: e,
            })
          }
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={(classes.formControl, classes.visible)}>
        是否可见*
        <Switch
          color="primary"
          checked={articleData.isVisible}
          name="isVisible"
          onChange={handleChange}
        />
      </div>
      <div className={classes.publish}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          onClick={publishArtocle}
        >
          立即发布
        </Button>
      </div>
    </form>
  );
}
