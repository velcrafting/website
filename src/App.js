import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import CodeSketch from './pages/CodeSketch';
import Projects from './pages/Projects';
import Odyssey from './pages/Odyssey';

function App() {
  return (
    <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sketch" element={<CodeSketch />} />
            {/* <Route path="/projects" element={<Projects />} />
            <Route path="/odyssey" element={<Odyssey />} /> */}
          </Routes>
        </MainLayout>
    </Router>
  );
}

export default App;