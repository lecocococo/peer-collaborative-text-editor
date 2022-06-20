// import React from "react";
import * as Y from "yjs";
import { QuillBinding } from "y-quill";
import { Quill } from "react-quill";
import ReactQuill from "react-quill";
import QuillCursors from "quill-cursors";
import React, { useEffect, useRef } from "react";
import { WebrtcProvider } from "y-webrtc";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  let quill = null;
  let reactQuill = useRef(null);

  useEffect(() => {
    attachEditor();

    const ydoc = new Y.Doc();

    const provider = new WebrtcProvider("test-room", ydoc, {
      signaling: ["wss://y-signaling-server.herokuapp.com/"],
      filterBcConns: false,
    });
    const ytext = ydoc.getText("text");

    const binding = new QuillBinding(ytext, quill, provider.awareness);
  }, []);

  const attachEditor = () => {
    // if (typeof reactQuillRef.current.getEditor !== "function") return;
    quill = reactQuill.current.getEditor();
  };

  const editorSetting = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "blockquote", "italic", "underline"],
      ["image", "link", "code-block"],
    ],
  };

  return (
    <ReactQuill
      ref={reactQuill}
      autoFocus="true"
      modules={editorSetting}
      theme={"snow"}
    ></ReactQuill>
  );
};

export default TextEditor;
