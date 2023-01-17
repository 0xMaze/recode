import React, { useState } from "react";
import axios from "axios";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";

const style = {
  fontFamily: "monospace",
  fontSize: "1rem",
  lineHeight: "1.5",
  borderRadius: "4px",
  border: "1px solid #000",
  width: "47%",
  float: "left",
  margin: "1rem 0 1rem 1rem",
};

const InputEditor = ({ codeSnippet, setCodeSnippet }) => (
  <div>
    <AceEditor
      mode="python"
      value={codeSnippet}
      onChange={(newValue) => setCodeSnippet(newValue)}
      style={style}
    />
  </div>
);

const OutputEditor = ({ timeComplexity }) => (
  <div>
    <AceEditor mode="python" value={timeComplexity} readOnly style={style} />
  </div>
);

const GetTimeComplexityPage = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [timeComplexity, setTimeComplexity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/time-complexity/", {
        code_snippet: codeSnippet,
      })
      .then((response) => {
        setTimeComplexity(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Get Time Complexity</h1>
      <form onSubmit={handleSubmit}>
        <InputEditor
          codeSnippet={codeSnippet}
          setCodeSnippet={setCodeSnippet}
        />
        <OutputEditor timeComplexity={timeComplexity} />
        <button id="send-button" type="submit">
          Get Time Complexity
        </button>
      </form>
    </div>
  );
};

export default GetTimeComplexityPage;
