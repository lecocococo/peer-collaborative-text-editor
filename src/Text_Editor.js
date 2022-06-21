// import React from "react";
import * as Y from "yjs";
import { QuillBinding } from "y-quill";
import { Quill } from "react-quill";
import ReactQuill from "react-quill";
import QuillCursors from "quill-cursors";
import React, { useEffect, useRef, useState } from "react";
import { WebrtcProvider } from "y-webrtc";
import { generateUsername } from "username-generator";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  let quill = null;
  let reactQuill = useRef(null);

  let u = null;
  let usersRef = useRef(null);

  const [user, setUser] = useState([]);

  useEffect(() => {
    quill = reactQuill.current.getEditor();

    const ydoc = new Y.Doc();

    const provider = new WebrtcProvider("test-room", ydoc, {
      signaling: ["wss://y-signaling-server.herokuapp.com/"],
      filterBcConns: false,
    });

    const ytext = ydoc.getText("text");

    const aware = provider.awareness;

    const binding = new QuillBinding(ytext, quill, aware);

    u = generateUsername("-");
    usersRef.current.value = u;

    aware.setLocalStateField("user", { name: usersRef.current.value });

    aware.on("change", () => {
      let users_arr = [];
      aware.getStates().forEach((state) => {
        if (state.user) {
          users_arr.push(`<div> @ ${state.user.name}</div>`);
        }
        usersRef.current.innerHTML = users_arr.join("");
      });
    });

    setUsers(usersRef.current.value);
  }, []);

  const setUsers = (u) => {
    setUser([...user, { name: u }]);
  };

  const editorSetting = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "blockquote", "italic", "underline"],
      ["image", "link", "code-block"],
    ],
  };

  return (
    <div>
      <ReactQuill
        ref={reactQuill}
        autoFocus="true"
        modules={editorSetting}
        placeholder="Start collab!"
        theme="snow"
      ></ReactQuill>
      <div ref={usersRef}>
        {user.map((u) => (
          <pre key={u.name}>{u.name}</pre>
        ))}
      </div>
    </div>
  );
};

export default TextEditor;
