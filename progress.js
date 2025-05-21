// src/utils/progress.js

// Get user progress from localStorage
export const getUserProgress = () => {
  const savedProgress = localStorage.getItem('tradeLingo_progress');
  return savedProgress ? JSON.parse(savedProgress) : {
    completedLessons: [],
    quizScores: {},
    unlockedLevels: ['level1']
  };
};

// Save user progress to localStorage
export const saveUserProgress = (progress) => {
  localStorage.setItem('tradeLingo_progress', JSON.stringify(progress));
};

// Initialize progress if not already in localStorage
export const initializeProgress = () => {
  if (!localStorage.getItem('tradeLingo_progress')) {
    const initialProgress = {
      completedLessons: [],
      quizScores: {},
      unlockedLevels: ['level1']
    };
    localStorage.setItem('tradeLingo_progress', JSON.stringify(initialProgress));
  }
};

// Calculate level progress
export const getLevelProgress = (level, completedLessons) => {
  const completedInLevel = level.lessons.filter(lesson => 
    completedLessons.includes(lesson.id)
  ).length;
  
  return {
    completed: completedInLevel,
    total: level.lessons.length,
    percentage: (completedInLevel / level.lessons.length) * 100
  };
};

// Check if all lessons in a level are completed
export const isLevelCompleted = (level, completedLessons) => {
  return level.lessons.every(lesson => completedLessons.includes(lesson.id));
};

// Check if a specific lesson is available
export const isLessonAvailable = (level, lessonIndex, completedLessons) => {
  if (lessonIndex === 0) return true;
  
  // Check if all previous lessons are completed
  return level.lessons
    .slice(0, lessonIndex)
    .every(lesson => completedLessons.includes(lesson.id));
};
