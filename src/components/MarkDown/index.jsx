import React from 'react'
import TextField from "@material-ui/core/TextField";
// import marked from 'marked'
// import highlightJs from 'highlight.js'

// import style from './markdown.module.scss'

export default function MarkDown (props) {
    // console.log(props)
  return (
    <>
        <TextField
          multiline
          label="文章内容"
          placeholder="输入文章内容"
          fullWidth
          rows={22}
          name='markdown'
          onChange={props.onChange}
          value={props.markdown}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </>
  )
}
