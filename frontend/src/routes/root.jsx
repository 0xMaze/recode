import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1 className="title">&lt;RE:CODE&gt;</h1>
        <nav>
          <ul>
            <li>
              <a href={`/create-docstring`}>Create Python Docstring</a>
            </li>
            <li>
              <a href={`/fix-bug`}>Fix a code bug</a>
            </li>
            <li>
              <a href={`/translate-code`}>Translate Code</a>
            </li>
            <li>
              <a href={`/explain-code`}>Explain Code</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
