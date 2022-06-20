import TextEditor from "./Text_Editor";
import "./App.css";

const App = () => {
  // const classes = useStyles();
  return (
    <div className="head">
      <div className="first">
        <pre>COLLABORATIVE TEXT EDITOR by Team 12</pre>
      </div>
      <TextEditor></TextEditor>
    </div>
  );
};

export default App;
