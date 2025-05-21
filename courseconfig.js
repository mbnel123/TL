// src/data/courseconfig.js
// Importeer de level bestanden - controleer of je bestandsnamen kloppen
import level1 from './levels/level1.js';
import level2 from './levels/level2.js';

// Define all level objects
export const courseStructure = {
  level1,
  level2,
  // Additional levels can be imported and added here
};

// Define the connections between levels
export const levelConnections = [
  { from: 'level1', to: 'level2' },
  // Add more connections as new levels are created
];

// Export a function to get all level IDs
export const getAllLevelIds = () => Object.keys(courseStructure);

// Export a function to get the next level for a given level ID
export const getNextLevelId = (currentLevelId) => {
  const currentLevel = courseStructure[currentLevelId];
  return currentLevel ? currentLevel.nextLevel : null;
};
