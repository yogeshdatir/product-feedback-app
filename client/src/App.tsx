import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import FeedbackForm from "./pages/feedbackForm";
import Feedback from "./pages/feedback";
import Roadmap from "./pages/roadmap";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<FeedbackForm />} />
        <Route path="/edit/:id" element={<FeedbackForm isEdit />} />
        <Route path="/view/:id" element={<Feedback />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="*" element={<p>Wrong URL</p>}></Route>
      </Routes>
    </>
  );
}

export default App;
