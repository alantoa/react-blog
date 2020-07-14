import React from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import "./hignlightJs.css";
import "./markdown.css";

const mdParser = new MarkdownIt(/* Markdown-it options */);
export default (props) => {
  function handleEditorChange({ html, text }) {
    console.log("handleEditorChange", html, text);
  }

  return (
    <>
      <MdEditor
        value=""
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </>
  );
};
