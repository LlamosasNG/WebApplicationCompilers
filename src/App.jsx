import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SyntacticAscending from './components/SyntacticAscending';
import SyntacticDecending from './components/SyntacticDecending';
import Syntactic from './components/Syntactic';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Syntactic" element={<Syntactic />} />
          <Route path="/SyntacticAscending" element={<SyntacticAscending />} />
          <Route path="/SyntacticDecending" element={<SyntacticDecending />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
