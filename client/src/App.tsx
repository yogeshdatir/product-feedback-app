import { Route, Routes } from "react-router-dom";
import { ThemeProvider, Global } from "@emotion/react";
import Home from "./pages/home";
import FeedbackForm from "./pages/feedbackForm";
import Feedback from "./pages/feedback";
import Roadmap from "./pages/roadmap";
import CategoryContextProvider from "./contexts/CategoryContext";
import FeedbackContextProvider from "./contexts/FeedbackContext";
import StatusContextProvider from "./contexts/StatusContext";
import { GlobalStyles } from "./globalStyles";
import { themes } from "./utils/themes";

// TODO: Add husky and prettier: reference - https://www.youtube.com/watch?v=ZXW6Jn6or1w
// TODO: Add upvotes feature
// TODO: Add comments feature
// TODO: Add error boundary and write an article about it
// TODO: Add lazy loading and suspense with skeleton loading, write article on it
// TODO: Add notification system
function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <Global styles={GlobalStyles} />
      <StatusContextProvider>
        <CategoryContextProvider>
          <FeedbackContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<FeedbackForm />} />
              <Route path="/edit/:id" element={<FeedbackForm isEdit />} />
              <Route path="/view/:id" element={<Feedback />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="*" element={<p>Wrong URL</p>} />
            </Routes>
          </FeedbackContextProvider>
        </CategoryContextProvider>
      </StatusContextProvider>
    </ThemeProvider>
  );
}

export default App;
