import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import FAQ from './components/FAQ';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <div className="nav">
          <Link to="/infinite-site">Home</Link>
          <Link to="/infinite-site/account">Account</Link>
          <Link to="/infinite-site/faq">FAQ</Link>
        </div>

        <Routes>
          <Route path="/infinite-site/account" element={<div> Account</div>} />
          <Route path="/infinite-site/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
