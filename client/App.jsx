import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SignUpLogInPage from './components/SignUpLogInPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpLogInPage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
