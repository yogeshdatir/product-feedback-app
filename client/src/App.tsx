import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import FeedbackForm from './pages/feedbackForm';
import Feedback from './pages/feedback';
import Roadmap from './pages/roadmap';

// TODO: Add upvotes feature
// TODO: Add comments feature
// TODO: Add error boundary and write an article about it
// TODO: Add lazy loading and suspense with skeleton loading, write article on it
// TODO: Add notification system
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<FeedbackForm />} />
      <Route path="/edit/:id" element={<FeedbackForm isEdit />} />
      <Route path="/view/:id" element={<Feedback />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="*" element={<p>Wrong URL</p>} />
    </Routes>
  );
}

export default App;
