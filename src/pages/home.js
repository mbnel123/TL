// src/pages/home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Aangepaste imports om overeen te komen met je bestandsnamen
import { courseStructure, levelConnections } from '../data/courseconfig.js';  // Aangepast naar kleine letters
import { getUserProgress, getLevelProgress } from '../utils/progress.js';
import { initCosmicElements } from '../utils/cosmicelement.js';  // Aangepast naar kleine letters zonder 's'

const Home = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(getUserProgress());
  
  // Initialize cosmic elements
  useEffect(() => {
    const timer = setTimeout(() => {
      initCosmicElements();
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  const handleNavigation = (levelId) => {
    if (progress.unlockedLevels.includes(levelId)) {
      navigate(`/level/${levelId}`);
    }
  };

  const getLevelConnectionPath = (from, to) => {
    const fromLevel = courseStructure[from];
    const toLevel = courseStructure[to];
    
    // AANGEPAST: Calculate the center points based on 80px level node size
    const fromCenterX = fromLevel.position.left + 40; // Half of 80px
    const fromCenterY = fromLevel.position.top + 40;  // Half of 80px
    
    const toCenterX = toLevel.position.left + 40; // Half of 80px
    const toCenterY = toLevel.position.top + 40;  // Half of 80px
    
    const pathString = `M${fromCenterX},${fromCenterY} Q${(fromCenterX + toCenterX) / 2},${(fromCenterY + toCenterY) / 2 - 50} ${toCenterX},${toCenterY}`;
    return pathString;
  };

  return (
    <div className="home-container">
      <header>
        <h1>TRADELINGO</h1>
        <p>Master trading in a cosmic journey through space</p>
      </header>
      
      <div className="world-map">
        {/* Path connections between levels */}
        <svg className="level-paths" width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="none">
          {levelConnections.map((connection, index) => {
            const isPathUnlocked = progress.unlockedLevels.includes(connection.to);
            return (
              <path 
                key={index} 
                d={getLevelConnectionPath(connection.from, connection.to)} 
                className="level-path" 
                style={{ 
                  opacity: isPathUnlocked ? 1 : 0.4,
                  strokeDasharray: isPathUnlocked ? "8" : "8",
                  animation: isPathUnlocked ? "dash 30s linear infinite" : "none"
                }}
              />
            );
          })}
        </svg>
        
        {/* Level nodes */}
        {Object.keys(courseStructure).map((levelId) => {
          const level = courseStructure[levelId];
          const isUnlocked = progress.unlockedLevels.includes(levelId);
          const levelProgress = getLevelProgress(level, progress.completedLessons);
          
          return (
            <div 
              key={levelId} 
              className={`level-node ${isUnlocked ? 'unlocked' : 'locked'}`}
              onClick={() => isUnlocked && handleNavigation(levelId)}
              style={{ top: `${level.position.top}px`, left: `${level.position.left}px` }}
            >
              <div className="planet-container">
                <div className="planet">
                  <div className="planet-progress">
                    <span className="progress-text">{levelProgress.percentage}%</span>
                  </div>
                  <div className="orbiting-rocket">
                    <div className="rocket-body">
                      <div className="rocket-shape">
                        <div className="rocket-window"></div>
                      </div>
                      <div className="rocket-flame"></div>
                    </div>
                  </div>
                </div>
                <div className="planet-glow"></div>
              </div>
              {!isUnlocked && <div className="lock-overlay"><i className="fas fa-lock"></i></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
