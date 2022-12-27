import React, { useState } from "react";
import axios from "axios";
import Root from "./root";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-scala";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-perl";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-objectivec";
import "ace-builds/src-noconflict/mode-haskell";
import "ace-builds/src-noconflict/mode-r";
import "ace-builds/src-noconflict/mode-lua";
import "ace-builds/src-noconflict/mode-dart";

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

const TranslateCodePage = () => {
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/translate-code/", {
        from_language: fromLanguage,
        to_language: toLanguage,
        code_snippet: codeSnippet,
      })
      .then((response) => {
        setOutput(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <form onSubmit={handleSubmit}>
        <div id="input-field">
          <label htmlFor="from-language">From Language:</label>
          <input
            type="text"
            id="from-language"
            value={fromLanguage}
            onChange={(event) => setFromLanguage(event.target.value)}
          />
        </div>
        <div id="input-field">
          <label htmlFor="to-language">To Language:</label>
          <input
            type="text"
            id="to-language"
            value={toLanguage}
            onChange={(event) => setToLanguage(event.target.value)}
          />
        </div>

        <br />

        <AceEditor
          style={style}
          mode={fromLanguage}
          value={codeSnippet}
          onChange={(newValue) => setCodeSnippet(newValue)}
        />

        <AceEditor style={style} mode={toLanguage} value={output} readOnly />
        <div id="send-button">
          <button type="submit">Translate</button>
        </div>
      </form>
    </div>
  );
};

export default TranslateCodePage;
