import { css, Global, ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CategoryContextProvider from "./contexts/CategoryContext";
import FeedbackContextProvider from "./contexts/FeedbackContext";
import StatusContextProvider from "./contexts/StatusContext";
import { GlobalStyles } from "./globalStyles";
import { themes } from "./utils/themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themes.light}>
        <StatusContextProvider>
          <CategoryContextProvider>
            <FeedbackContextProvider>
              <Global styles={GlobalStyles} />
              <App />
            </FeedbackContextProvider>
          </CategoryContextProvider>
        </StatusContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
