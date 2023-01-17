import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import TranslateCodePage from "./routes/translate_code";
import CreateDocstringPage from "./routes/create_docstring";
import FixCodePage from "./routes/fix_code";
import ExplainCodePage from "./routes/explain_code";
import GetTimeComplexityPage from "./routes/get_time_complexity";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/translate-code",
        element: <TranslateCodePage />,
      },
      {
        path: "create-docstring",
        element: <CreateDocstringPage />,
      },
      {
        path: "fix-bug",
        element: <FixCodePage />,
      },
      {
        path: "explain-code",
        element: <ExplainCodePage />,
      },
      {
        path: "get-time-complexity",
        element: <GetTimeComplexityPage />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
