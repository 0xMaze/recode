import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <Link
          to="."
          style={{
            textDecoration: "none",
            paddingLeft: 0,
            paddingRight: 0,
            color: "black",
          }}
        >
          <h1 className="title">&lt;RE:CODE&gt;</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <a href={`/create-docstring`}>Create Python Docstring</a>
            </li>
            <li>
              <a href={`/get-time-complexity`}>Code Time Complexity</a>
            </li>
            <li>
              <a href={`/fix-bug`}>Fix a Code Bug</a>
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
