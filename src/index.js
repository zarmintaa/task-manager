import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TaskContextProvider } from "./store/task-context";

ReactDOM.render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>,
  document.getElementById("root")
);
