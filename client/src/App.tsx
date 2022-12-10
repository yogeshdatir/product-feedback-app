import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import FeedbackForm from "./pages/feedbackForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addfeedback" element={<FeedbackForm />} />
        <Route path="/editfeedback" element={<FeedbackForm edit={true} />} />
      </Routes>
    </>
  );
}

export default App;
