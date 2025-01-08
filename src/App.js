import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'
import NotFoundPage from './pages/NotFoundPage';
import Projects from "./pages/Projects";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
            <Route path="/projects" exact element={<Projects />} />
        </Routes>
      </Router>
  );
}

export default App;
