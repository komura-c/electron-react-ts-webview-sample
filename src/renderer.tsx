import React from "react";
import ReactDOM from "react-dom";
import { WebView } from "./components/WebView";

import "./styles.css";

function App(): JSX.Element {
  return <WebView></WebView>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
