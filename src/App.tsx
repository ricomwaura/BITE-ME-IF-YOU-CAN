import RecipePage from 'pages/RecipePage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/**
 * App component defines the main application structure with routing.
 * 
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
