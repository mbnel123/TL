// src/utils/cosmicElements.js

// Main function to initialize cosmic elements
export const initCosmicElements = () => {
  console.log("Kosmische elementen initialiseren...");
  
  // Execute all functions with delays to allow DOM to load
  setTimeout(() => {
    replaceTitleWithLogo();
    
    setTimeout(() => {
      transformLevelsToPlanets();
      
      setTimeout(() => {
        addRocketToPath();
      }, 500);
    }, 300);
  }, 200);
};

// Function to replace the title with a better logo
const replaceTitleWithLogo = () => {
  const headerTitle = document.querySelector('header h1');
  if (!headerTitle) return;
  
  const logoContainer = document.createElement('div');
  logoContainer.className = 'logo-container';
  logoContainer.innerHTML = `
    <svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" class="tradelingo-logo">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        
        <filter id="neonGlow">
          <feGaussianBlur stdDeviation="4" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <g transform="translate(30, 60) rotate(-30)" filter="url(#neonGlow)">
        <path d="M0,0 L15,40 L0,55 L-15,40 Z" fill="url(#logoGradient)" />
        <circle cx="0" cy="15" r="5" fill="white" fillOpacity="0.8" />
        <path d="M-10,40 L0,60 L10,40" fill="#f59e0b" filter="url(#glow)" />
      </g>
      
      <g filter="url(#neonGlow)">
        <text x="75" y="80" fontFamily="Arial" fontWeight="bold" fontSize="60" fill="url(#logoGradient)">TRADE</text>
        <text x="260" y="80" fontFamily="Arial" fontWeight="bold" fontSize="60" fill="url(#logoGradient)">LINGO</text>
      </g>
      
      <path d="M75,90 L355,90" stroke="url(#logoGradient)" strokeWidth="2" strokeDasharray="5,5" />
      
      <polyline points="380,60 390,50 400,65 410,45 420,55 430,40" 
        stroke="url(#logoGradient)" strokeWidth="3" fill="none" filter="url(#neonGlow)" />
      
      <circle cx="450" cy="50" r="15" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
      <circle cx="450" cy="50" r="10" fill="url(#logoGradient)" fillOpacity="0.3" />
      <circle cx="450" cy="50" r="5" fill="url(#logoGradient)" fillOpacity="0.5" />
    </svg>
  `;
  
  headerTitle.innerHTML = '';
  headerTitle.appendChild(logoContainer);
};

// Function to transform levels to planets
const transformLevelsToPlanets = () => {
  const levelNodes = document.querySelectorAll('.level-node');
  
  levelNodes.forEach((node, index) => {
    // Check if the node has already been transformed
    if (node.querySelector('.planet-container')) return;
    
    // Get existing elements
    const levelIcon = node.querySelector('.level-icon');
    const levelInfo = node.querySelector('.level-info');
    if (!levelIcon) return;
    
    // Get progress percentage
    const progressBar = node.querySelector('.progress-bar .progress');
    const progressStyle = progressBar ? progressBar.style.width : '0%';
    const progressPercentage = parseInt(progressStyle) || 0;
    
    // Create planet container
    const planetContainer = document.createElement('div');
    planetContainer.className = 'planet-container';
    
    // Create planet
    const planet = document.createElement('div');
    planet.className = 'planet';
    
    // Add progress indicator in the center of the planet
    const planetProgress = document.createElement('div');
    planetProgress.className = 'planet-progress';
    
    const progressText = document.createElement('div');
    progressText.className = 'progress-text';
    progressText.textContent = `${progressPercentage}%`;
    
    planetProgress.appendChild(progressText);
    planet.appendChild(planetProgress);
    
    // Add planet features (craters)
    for (let i = 0; i < 8; i++) {
      const feature = document.createElement('div');
      feature.className = 'planet-feature';
      
      // Random position within the planet
      feature.style.left = `${15 + Math.random() * 70}%`;
      feature.style.top = `${15 + Math.random() * 70}%`;
      
      // Random size
      const featureSize = 3 + Math.random() * 12;
      feature.style.width = `${featureSize}px`;
      feature.style.height = `${featureSize}px`;
      
      // Random opacity
      feature.style.opacity = 0.1 + Math.random() * 0.3;
      
      planet.appendChild(feature);
    }
    
    // Add glow effect
    const planetGlow = document.createElement('div');
    planetGlow.className = 'planet-glow';
    
    // Put everything together
    planetContainer.appendChild(planet);
    planetContainer.appendChild(planetGlow);

    // Add rotating rocket to active planet
    const isUnlocked = !node.classList.contains('locked');
    const isActive = progressPercentage > 0 && progressPercentage < 100;
    
    if (isUnlocked && isActive) {
      const orbitingRocket = document.createElement('div');
      orbitingRocket.className = 'orbiting-rocket';
      
      const rocketBody = document.createElement('div');
      rocketBody.className = 'rocket-body';
      
      const rocketShape = document.createElement('div');
      rocketShape.className = 'rocket-shape';
      
      const rocketWindow = document.createElement('div');
      rocketWindow.className = 'rocket-window';
      
      const rocketFlame = document.createElement('div');
      rocketFlame.className = 'rocket-flame';
      
      rocketBody.appendChild(rocketShape);
      rocketBody.appendChild(rocketWindow);
      rocketBody.appendChild(rocketFlame);
      orbitingRocket.appendChild(rocketBody);
      
      planetContainer.appendChild(orbitingRocket);
    }
    
    // Replace level icon with planet
    try {
      node.replaceChild(planetContainer, levelIcon);
      
      // Adjust layout to vertical
      node.style.flexDirection = 'column';
      node.style.alignItems = 'center';
      
      // Adjust text alignment
      if (levelInfo) {
        levelInfo.style.textAlign = 'center';
      }
    } catch (err) {
      console.error('Error replacing level icon:', err);
    }
  });
};

// Function to add rocket to path
const addRocketToPath = () => {
  // Remove existing rockets to prevent duplicates
  document.querySelectorAll('.rocket').forEach(r => r.remove());
  
  const paths = document.querySelectorAll('.level-path');
  if (!paths || paths.length === 0) return;
  
  paths.forEach((path, index) => {
    // Check if path is active (not grayed out)
    const pathStyle = window.getComputedStyle(path);
    const isPathActive = pathStyle.opacity !== '0.4' && pathStyle.opacity > 0.5;
    
    if (!isPathActive) return;
    
    // Create rocket element
    const rocket = document.createElement('div');
    rocket.className = 'rocket';
    rocket.id = `rocket-${index}`;
    
    const rocketBody = document.createElement('div');
    rocketBody.className = 'rocket-body';
    
    const rocketShape = document.createElement('div');
    rocketShape.className = 'rocket-shape';
    
    const rocketWindow = document.createElement('div');
    rocketWindow.className = 'rocket-window';
    
    const rocketFlame = document.createElement('div');
    rocketFlame.className = 'rocket-flame';
    
    rocketBody.appendChild(rocketShape);
    rocketBody.appendChild(rocketWindow);
    rocketBody.appendChild(rocketFlame);
    rocket.appendChild(rocketBody);
    
    // Add rocket to the DOM
    const worldMap = document.querySelector('.world-map');
    if (worldMap) {
      worldMap.appendChild(rocket);
      
      // Start animation
      animateRocketAlongPath(rocket, path, worldMap);
    }
  });
};

// Function to animate rocket along path
const animateRocketAlongPath = (rocket, path, worldMap) => {
  if (!rocket || !path || !worldMap) return;
  
  let progress = 0;
  const speed = 0.5;
  
  const pathRect = path.getBoundingClientRect();
  const mapRect = worldMap.getBoundingClientRect();
  
  // Determine start and end points of the path
  const startX = pathRect.left - mapRect.left;
  const startY = pathRect.top - mapRect.top;
  const endX = pathRect.right - mapRect.left;
  const endY = pathRect.bottom - mapRect.top;
  
  // Midpoint for a curved path
  const midX = (startX + endX) / 2;
  const midY = startY - 50;
  
  const animate = () => {
    // Update progress
    progress += speed;
    if (progress > 100) progress = 0;
    
    const t = progress / 100;
    
    // Calculate quadratic bezier curve point
    const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX;
    const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * midY + t * t * endY;
    
    // Calculate a point slightly ahead on the curve for rotation
    const tAhead = Math.min(t + 0.01, 1);
    const xAhead = (1 - tAhead) * (1 - tAhead) * startX + 2 * (1 - tAhead) * tAhead * midX + tAhead * tAhead * endX;
    const yAhead = (1 - tAhead) * (1 - tAhead) * startY + 2 * (1 - tAhead) * tAhead * midY + tAhead * tAhead * endY;
    
    // Calculate rotation angle
    const angle = Math.atan2(yAhead - y, xAhead - x) * 180 / Math.PI;
    
    // Position the rocket
    rocket.style.transform = `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`;
    rocket.style.display = 'block';
    
    // Next frame
    requestAnimationFrame(animate);
  };
  
  // Start animation
  requestAnimationFrame(animate);
};
