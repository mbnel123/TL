import React, { useState } from 'react';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Award,
  BarChart2,
  BookOpen,
  Users,
  Settings,
  Bell,
  Check,
  X,
  HelpCircle,
} from 'lucide-react';

const TradeMaster = () => {
  const [selectedWorld, setSelectedWorld] = useState('basics');
  const [currentScreen, setCurrentScreen] = useState('worldMap');
  const [currentLesson, setCurrentLesson] = useState(null);

  const worlds = {
    basics: {
      name: 'Trading Basics',
      color: 'bg-blue-500',
      levels: 5,
      completed: 3,
      icon: <BookOpen className="h-8 w-8 text-blue-200" />,
    },
    technical: {
      name: 'Technical Analysis',
      color: 'bg-purple-500',
      levels: 8,
      completed: 0,
      icon: <BarChart2 className="h-8 w-8 text-purple-200" />,
    },
    fundamental: {
      name: 'Fundamental Analysis',
      color: 'bg-green-500',
      levels: 6,
      completed: 0,
      icon: <BookOpen className="h-8 w-8 text-green-200" />,
    },
    strategies: {
      name: 'Trading Strategies',
      color: 'bg-yellow-500',
      levels: 10,
      completed: 0,
      icon: <Award className="h-8 w-8 text-yellow-200" />,
    },
    advanced: {
      name: 'Advanced Concepts',
      color: 'bg-red-500',
      levels: 12,
      completed: 0,
      icon: <Sparkles className="h-8 w-8 text-red-200" />,
    },
  };

  // Planet styles voor elk level om ze uniek te maken
  const getPlanetStyle = (levelIndex, isCompleted, isActive) => {
    const planetColors = [
      { primary: '#e89999', secondary: '#cc7777', ring: 'rgba(232, 153, 153, 0.4)' },
      { primary: '#99c2e8', secondary: '#77aac2', ring: 'rgba(153, 194, 232, 0.4)' },
      { primary: '#a8e899', secondary: '#88cc77', ring: 'rgba(168, 232, 153, 0.4)' },
      { primary: '#e8c599', secondary: '#ccaa77', ring: 'rgba(232, 197, 153, 0.4)' },
      { primary: '#c999e8', secondary: '#aa77cc', ring: 'rgba(201, 153, 232, 0.4)' },
      { primary: '#99e8c5', secondary: '#77ccaa', ring: 'rgba(153, 232, 197, 0.4)' },
      { primary: '#e8b399', secondary: '#cc9977', ring: 'rgba(232, 179, 153, 0.4)' },
      { primary: '#b3e899', secondary: '#99cc77', ring: 'rgba(179, 232, 153, 0.4)' },
      { primary: '#e899d1', secondary: '#cc77bb', ring: 'rgba(232, 153, 209, 0.4)' },
      { primary: '#99d1e8', secondary: '#77bbcc', ring: 'rgba(153, 209, 232, 0.4)' },
      { primary: '#d1e899', secondary: '#bbcc77', ring: 'rgba(209, 232, 153, 0.4)' },
      { primary: '#e899b3', secondary: '#cc7799', ring: 'rgba(232, 153, 179, 0.4)' },
    ];
    
    const colorIndex = levelIndex % planetColors.length;
    const colors = planetColors[colorIndex];
    
    let opacity = 0.6;
    let glowIntensity = 0.3;
    
    if (isCompleted) {
      opacity = 1;
      glowIntensity = 0.6;
    } else if (isActive) {
      opacity = 0.9;
      glowIntensity = 0.8;
    }
    
    return {
      ...colors,
      opacity,
      glowIntensity,
      hasRing: levelIndex % 3 === 0,
    };
  };

  const generateLevelNodes = (world) => {
    const levels = [];
    for (let i = 1; i <= worlds[world].levels; i++) {
      const isCompleted = i <= worlds[world].completed;
      const isActive = i === worlds[world].completed + 1;
      const planetStyle = getPlanetStyle(i - 1, isCompleted, isActive);
      
      levels.push(
        <div key={i} className="relative flex flex-col items-center group">
          <div 
            className="relative w-8 h-8 rounded-full cursor-pointer transition-all duration-300 hover:scale-125"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${planetStyle.primary}, ${planetStyle.secondary})`,
              opacity: planetStyle.opacity,
              boxShadow: `0 0 ${planetStyle.glowIntensity * 20}px ${planetStyle.ring}`,
            }}
          >
            <div 
              className="absolute inset-1 rounded-full"
              style={{
                background: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3), transparent 40%)`,
              }}
            />
            
            {planetStyle.hasRing && (
              <div 
                className="absolute inset-0 rounded-full border-2 opacity-50"
                style={{
                  borderColor: planetStyle.ring,
                  transform: 'scale(1.8)',
                  borderStyle: 'dashed',
                }}
              />
            )}
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold">
              {i}
            </div>
            
            {isCompleted && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full flex items-center justify-center">
                <Check className="h-2 w-2 text-white" />
              </div>
            )}
            
            {isActive && (
              <div 
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  boxShadow: `0 0 15px ${planetStyle.primary}`,
                }}
              />
            )}
          </div>
          
          <span className="mt-1 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Level {i}
          </span>
        </div>
      );
    }
    return levels;
  };

  const getLessonContent = () => {
    if (selectedWorld === 'basics') {
      return {
        intro:
          "Trading is the process of buying and selling financial instruments like stocks, currencies, or commodities to make a profit. Before diving deep, let's understand some basic concepts.",
        steps: [
          {
            type: 'text',
            content:
              'Markets are where trades happen. Common markets include stock exchanges, forex markets, and cryptocurrency exchanges.',
          },
          {
            type: 'quiz',
            question: 'Which of these is NOT a common financial market?',
            options: [
              'Stock Exchange',
              'Forex Market',
              'Trading Simulator',
              'Cryptocurrency Exchange',
            ],
            correctAnswer: 2,
          },
          {
            type: 'text',
            content:
              'Assets are what you trade. These can be stocks, currencies, commodities, cryptocurrencies, and more.',
          },
          {
            type: 'interactive',
            question: 'Match these terms with their definitions:',
            pairs: [
              { term: 'Bull Market', definition: 'A market that is rising in value' },
              { term: 'Bear Market', definition: 'A market that is falling in value' },
              { term: 'Volatility', definition: 'A measure of price fluctuations' },
            ],
          },
        ],
        summary:
          "Great job! You've learned the very basics of trading. Remember that understanding markets and assets is the foundation of becoming a successful trader.",
      };
    } else if (selectedWorld === 'technical') {
      return {
        intro:
          'Technical analysis involves studying price charts and patterns to predict future price movements.',
        steps: [
          {
            type: 'text',
            content:
              'Charts are visual representations of price movements over time. Common chart types include line charts, bar charts, and candlestick charts.',
          },
          {
            type: 'quiz',
            question: 'Which chart type shows the open, high, low, and close prices?',
            options: ['Line Chart', 'Scatter Plot', 'Candlestick Chart', 'Pie Chart'],
            correctAnswer: 2,
          },
        ],
        summary:
          "Technical analysis is a powerful tool for traders. As you progress, you'll learn more advanced patterns and indicators.",
      };
    } else {
      return {
        intro: 'Welcome to the ' + worlds[selectedWorld].name + ' module!',
        steps: [
          {
            type: 'text',
            content:
              'This is a placeholder lesson for the ' +
              worlds[selectedWorld].name +
              ' world. More content will be added soon!',
          },
        ],
        summary: 'This is just a preview. Full lessons will be available in the complete app.',
      };
    }
  };

  const QuizComponent = ({ question, options, correctAnswer, onAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answered, setAnswered] = useState(false);

    const handleAnswer = (index) => {
      setSelectedAnswer(index);
      setAnswered(true);
      setTimeout(() => {
        onAnswer(index === correctAnswer);
      }, 1500);
    };

    return (
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">{question}</h3>
        <div className="space-y-3">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => !answered && handleAnswer(index)}
              className={
                'p-3 rounded-lg border cursor-pointer transition-all ' +
                (!answered
                  ? 'border-gray-600 hover:border-blue-400'
                  : index === correctAnswer
                  ? 'border-green-500 bg-green-500 bg-opacity-20'
                  : index === selectedAnswer
                  ? 'border-red-500 bg-red-500 bg-opacity-20'
                  : 'border-gray-600')
              }
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {answered && index === correctAnswer && (
                  <Check className="h-5 w-5 text-green-500" />
                )}
                {answered && index === selectedAnswer && index !== correctAnswer && (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const LessonScreen = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [lessonComplete, setLessonComplete] = useState(false);
    const content = getLessonContent();

    const handleNextStep = () => {
      if (currentStep < content.steps.length) {
        setCurrentStep(currentStep + 1);
      } else {
        setLessonComplete(true);
      }
    };

    const handleQuizAnswer = (correct) => {
      setTimeout(handleNextStep, 500);
    };

    return (
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setCurrentScreen('worldMap')}
            className="mr-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-xl font-bold">
            {currentLesson.title} - {lessonComplete ? 'Complete!' : 'Step ' + (currentStep + 1) + ' of ' + (content.steps.length + 1)}
          </h2>
        </div>
        <div className="w-full bg-gray-800 h-2 rounded-full mb-8">
          <div
            className={worlds[selectedWorld].color + ' h-2 rounded-full transition-all'}
            style={{
              width: lessonComplete
                ? '100%'
                : (((currentStep + 1) / (content.steps.length + 1)) * 100) + '%',
            }}
          ></div>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg mb-8">
          {currentStep === 0 ? (
            <>
              <h3 className="text-xl font-bold mb-4">Introduction</h3>
              <p className="text-gray-300 mb-6">{content.intro}</p>
              <button
                onClick={handleNextStep}
                className={worlds[selectedWorld].color + ' px-6 py-3 rounded-lg font-bold w-full'}
              >
                Begin Lesson
              </button>
            </>
          ) : lessonComplete ? (
            <>
              <h3 className="text-xl font-bold mb-4">Lesson Complete!</h3>
              <div className={worlds[selectedWorld].color + ' w-24 h-24 rounded-full flex items-center justify-center my-8'}>
                <Award className="h-12 w-12" />
              </div>
              <p className="text-gray-300 mb-6">{content.summary}</p>
              <button
                onClick={() => setCurrentScreen('worldMap')}
                className={worlds[selectedWorld].color + ' px-6 py-3 rounded-lg font-bold w-full'}
              >
                Return to Map
              </button>
            </>
          ) : (
            <>
              {content.steps[currentStep - 1].type === 'text' ? (
                <>
                  <div className="mb-6">
                    <p className="text-gray-300">{content.steps[currentStep - 1].content}</p>
                  </div>
                  <button
                    onClick={handleNextStep}
                    className={worlds[selectedWorld].color + ' px-6 py-3 rounded-lg font-bold w-full'}
                  >
                    Continue
                  </button>
                </>
              ) : content.steps[currentStep - 1].type === 'quiz' ? (
                <QuizComponent {...content.steps[currentStep - 1]} onAnswer={handleQuizAnswer} />
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">{content.steps[currentStep - 1].question}</h3>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-400 mb-2">
                        This is a placeholder for an interactive component.
                      </p>
                      <p className="text-gray-300">
                        In the full app, this would be an interactive exercise.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleNextStep}
                    className={worlds[selectedWorld].color + ' px-6 py-3 rounded-lg font-bold w-full'}
                  >
                    Continue
                  </button>
                </>
              )}
            </>
          )}
        </div>
        <div className="flex justify-center">
          <button className="flex items-center text-gray-400 hover:text-blue-400">
            <HelpCircle className="h-5 w-5 mr-2" />
            Need help with this lesson?
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center">
          <Sparkles className="h-6 w-6 text-blue-400 mr-2" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            TradeMaster
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
              42
            </div>
            <div className="ml-1 text-blue-400 font-semibold">XP</div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
              <Award className="h-5 w-5 text-gray-900" />
            </div>
            <div className="ml-1 text-yellow-400 font-semibold">3</div>
          </div>
          <Bell className="h-6 w-6 text-gray-400 cursor-pointer hover:text-blue-400" />
          <Settings className="h-6 w-6 text-gray-400 cursor-pointer hover:text-blue-400" />
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">
        {currentScreen === 'worldMap' ? (
          <>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(worlds).map((worldKey) => (
                <div
                  key={worldKey}
                  onClick={() => setSelectedWorld(worldKey)}
                  className={
                    (selectedWorld === worldKey
                      ? worlds[worldKey].color + ' text-white'
                      : 'bg-gray-800 text-gray-300'
                    ) +
                    ' p-4 rounded-xl flex flex-col items-center justify-center w-32 h-32 cursor-pointer hover:scale-105 transition-transform shadow-lg'
                  }
                >
                  <div className={'rounded-full p-3 ' + (selectedWorld === worldKey ? 'bg-opacity-20 bg-white' : 'bg-gray-700')}>
                    {worlds[worldKey].icon}
                  </div>
                  <span className="mt-2 font-medium text-center">{worlds[worldKey].name}</span>
                  <div className="mt-1 text-xs">
                    {worlds[worldKey].completed}/{worlds[worldKey].levels}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className={'inline-block w-4 h-4 rounded-full ' + worlds[selectedWorld].color + ' mr-2'}></span>
                {worlds[selectedWorld].name} - Learning Path
              </h2>
              <div className="flex flex-wrap gap-4 justify-center items-center">
                {generateLevelNodes(selectedWorld)}
              </div>
              {worlds[selectedWorld].completed < worlds[selectedWorld].levels && (
                <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className={'inline-block w-3 h-3 rounded-full ' + worlds[selectedWorld].color + ' mr-2'}></span>
                    Next Lesson: Introduction to {worlds[selectedWorld].name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Learn the fundamentals of {worlds[selectedWorld].name.toLowerCase()} and how they apply to real-world trading scenarios.
                  </p>
                  <button
                    onClick={() => {
                      setCurrentLesson({
                        world: selectedWorld,
                        level: worlds[selectedWorld].completed + 1,
                        title: 'Introduction to ' + worlds[selectedWorld].name,
                      });
                      setCurrentScreen('lesson');
                    }}
                    className={worlds[selectedWorld].color + ' hover:opacity-90 px-6 py-3 rounded-lg font-bold flex items-center justify-center transition-all'}
                  >
                    Start Lesson <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </>
        ) : currentScreen === 'lesson' && currentLesson ? (
          <LessonScreen />
        ) : null}
      </main>
      {currentScreen === 'worldMap' && (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
          <div className="flex justify-around p-4">
            <div className="flex flex-col items-center text-blue-400">
              <BookOpen className="h-6 w-6" />
              <span className="text-xs mt-1">Learn</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <BarChart2 className="h-6 w-6" />
              <span className="text-xs mt-1">Practice</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <Users className="h-6 w-6" />
              <span className="text-xs mt-1">Community</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <Award className="h-6 w-6" />
              <span className="text-xs mt-1">Profile</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default TradeMaster;
