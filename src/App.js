import './App.css';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'
import NotFoundPage from './pages/NotFoundPage';
import Projects from "./pages/Projects";

// Determine which router to use
const Router = ({ children }) => {
    const isProduction = process.env.NODE_ENV === 'production';
    return isProduction ? <HashRouter>{children}</HashRouter> : <BrowserRouter>{children}</BrowserRouter>;
};

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
