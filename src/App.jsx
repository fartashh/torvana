import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TopicPageDivisional from './pages/TopicPageDivisional';
import TopicPage311 from './pages/TopicPage311';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:topicId" element={<TopicPageDivisional />} />
      <Route path="/311/kb/:topicId" element={<TopicPage311 />} />
    </Routes>
  );
}

export default App;
