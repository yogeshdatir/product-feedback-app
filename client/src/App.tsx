import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import FeedbackForm from "./pages/feedbackForm";
import Feedback from "./pages/feedback";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addfeedback" element={<FeedbackForm />} />
        <Route path="/editfeedback/:id" element={<FeedbackForm isEdit />} />
        <Route path="/:id" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
