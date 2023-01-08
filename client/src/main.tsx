import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FeedbackContextProvider from "./contexts/FeedbackContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <FeedbackContextProvider>
        <App />
      </FeedbackContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
