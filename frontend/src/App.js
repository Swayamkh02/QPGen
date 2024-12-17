import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// pages
import Home from './pages/Home';
import QPGenerate from './pages/QPGenerate';
import About from './pages/About';

//components
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qp-generate" element={<QPGenerate />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

//difficulty