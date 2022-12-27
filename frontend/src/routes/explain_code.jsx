import React, { useState } from "react";
import axios from "axios";
import AceEditor from "react-ace";

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

const OutputEditor = ({ explanation }) => (
  <div>
    <AceEditor mode="python" value={explanation} readOnly style={style} />
  </div>
);

const ExplainCodePage = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/explain-code/", {
        code_snippet: codeSnippet,
      })
      .then((response) => {
        setExplanation(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputEditor
          codeSnippet={codeSnippet}
          setCodeSnippet={setCodeSnippet}
        />
        <OutputEditor explanation={explanation} />
        <button id="send-button" type="submit">
          Explain Code
        </button>
      </form>
    </div>
  );
};

export default ExplainCodePage;
