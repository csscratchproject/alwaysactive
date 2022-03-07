import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SignUpLogInPage from './components/SignUpLogInPage';
import SayHi from './components/SayHi';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpLogInPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        {/* <Route path="/SayHi" element={<SayHi />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
