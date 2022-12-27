import React, { useState } from "react";
import axios from "axios";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

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

const OutputEditor = ({ docstring }) => (
  <div>
    <AceEditor mode="python" value={docstring} readOnly style={style} />
  </div>
);

const CreateDocStringPage = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [docstring, setDocstring] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/create-docstring/", {
        code_snippet: codeSnippet,
      })
      .then((response) => {
        setDocstring(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Create Docstring</h1>
      <form onSubmit={handleSubmit}>
        <InputEditor
          codeSnippet={codeSnippet}
          setCodeSnippet={setCodeSnippet}
        />
        <OutputEditor docstring={docstring} />
        <button id="send-button" type="submit">
          Create Docstring
        </button>
      </form>
    </div>
  );
};

export default CreateDocStringPage;
