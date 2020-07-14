import React from "react";


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
