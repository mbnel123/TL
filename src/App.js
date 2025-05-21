import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
// Import components
import SpaceBackground from './components/SpaceBackground';
// Import pages - gebruik hoofdlettergevoelige bestandsnamen
import Home from './pages/home.js';  // Aangepast naar kleine letters
import LevelPage from './pages/levelpage.js';  // Aangepast naar kleine letters
// Import utilities
import { initializeProgress } from './utils/progress.js';  // Importeer de specifieke functie

// Main App component
function App() {
  // Initialize progress if not already in localStorage
  useEffect(() => {
    initializeProgress();
  }, []);

  return (
    <Router>
      <div className="app">
        {/* We hebben nu de SpaceBackground component toegevoegd */}
        <SpaceBackground />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/level/:levelId" element={<LevelPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
