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

const InputEditor = ({
  codeSnippet,
  setCodeSnippet,
  language,
  setLanguage,
}) => (
  <div>
    <AceEditor
      mode={language}
      value={codeSnippet}
      onChange={(newValue) => setCodeSnippet(newValue)}
      style={style}
    />
  </div>
);

const OutputEditor = ({ fixedCode, language }) => (
  <div>
    <AceEditor mode={language} value={fixedCode} readOnly style={style} />
  </div>
);

const FixCodePage = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [language, setLanguage] = useState("");
  const [fixedCode, setFixedCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/fix-code/", {
        code_snippet: codeSnippet,
        language: language,
      })
      .then((response) => {
        setFixedCode(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Fix Code</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="language">Language:</label>
        <input
          type="text"
          id="language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        />
        <InputEditor
          codeSnippet={codeSnippet}
          setCodeSnippet={setCodeSnippet}
          language={language}
          setLanguage={setLanguage}
        />
        <OutputEditor fixedCode={fixedCode} language={language} />
        <button id="send-button" type="submit">
          Fix Code
        </button>
      </form>
    </div>
  );
};

export default FixCodePage;
