import React, { memo, useMemo } from "react";
import TextField from "@material-ui/core/TextField";
import marked from "marked";
import highlightJs from "highlight.js";
import Grid from "@material-ui/core/Grid";

import  './hignlightJs.css'
import "./markdown.css";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    return highlightJs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});
const MarkDown = memo((props) => {
  let renderHtml = useMemo(() => {
    if(props.markdown){
      return marked(props.markdown)
    }
  }, [props.markdown]);

  return (
    <>
      <Grid container spacing={1}>
          <TextField
            multiline
            label="文章内容"
            placeholder="输入文章内容"
            fullWidth
            rows={22}
            name="markdown"
            onChange={props.onChange}
            value={props.markdown}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div
            className='markdown-body'
            dangerouslySetInnerHTML={{ __html: renderHtml }}
          ></div>
      </Grid>
    </>
  );
});

export default MarkDown;
