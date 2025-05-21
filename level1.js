// src/data/levels/level1.js
const level1 = {
  id: 'level1',
  title: 'What is Trading?',
  icon: 'chart-line',
  nextLevel: 'level2',
  position: { top: 100, left: 100 },
  lessons: [
    {
      id: 'lesson1_1',
      title: 'Introduction to Trading',
      description: 'Learn the basic concepts of trading in financial markets',
      content: [
        {
          type: 'text',
          value: 'Trading is the process of buying and selling financial instruments like stocks, bonds, currencies, commodities, and derivatives with the goal of generating a profit. It involves the transfer of assets between parties, typically facilitated by exchanges or over-the-counter markets.'
        },
        {
          type: 'text',
          value: "Unlike long-term investing, trading often involves shorter timeframes and more frequent transactions. Traders aim to capitalize on price movements in the market, whether prices are rising (going long) or falling (going short)."
        },
        {
          type: 'image',
          src: '/assets/images/trading-concept.jpg',
          alt: 'Trading concept illustration',
          caption: 'Trading involves analyzing markets and executing transactions at optimal times'
        },
        {
          type: 'text',
          value: 'Various factors influence trading decisions, including technical analysis (studying price charts and patterns), fundamental analysis (evaluating economic indicators and company financials), and market sentiment (gauging investor emotions and behavior).'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q1_1',
            question: 'What is the primary goal of trading?',
            options: [
              'Long-term wealth preservation',
              'Generating profits from price movements',
              'Avoiding market volatility',
              'Collecting dividends only'
            ],
            correctAnswer: 1,
            explanation: 'While there are multiple benefits to trading, the primary goal is to generate profits from price movements in the market.'
          },
          {
            id: 'q1_2',
            question: 'Which of these is NOT typically used in trading decision-making?',
            options: [
              'Technical analysis',
              'Fundamental analysis',
              'Market sentiment',
              'Astrological charts'
            ],
            correctAnswer: 3,
            explanation: 'While some traders may look at astrological charts, it is not considered a legitimate or mainstream analysis method in professional trading.'
          },
          {
            id: 'q1_3',
            question: 'What does "going short" mean in trading?',
            options: [
              'Making quick trades',
              'Trading small amounts',
              'Profiting from falling prices',
              'Trading for less than one hour'
            ],
            correctAnswer: 2,
            explanation: "Going short refers to a trading strategy where a trader aims to profit from falling prices by selling assets they don't own (borrowing them) and buying them back later at a lower price."
          }
        ]
      }
    },
    {
      id: 'lesson1_2',
      title: 'How Does Trading Work?',
      description: 'Understand the mechanics and processes behind trading activities',
      content: [
        {
          type: 'text',
          value: 'At its core, trading works through a simple principle: buy low and sell high (or sell high and buy back low when shorting). However, the actual mechanics involve several steps and systems.'
        },
        {
          type: 'image',
          src: '/assets/images/trading-process.jpg',
          alt: 'Trading process flowchart',
          caption: 'The trading process involves market research, order placement, execution, and monitoring'
        },
        {
          type: 'text',
          value: "First, traders analyze markets using various methods to identify potential trading opportunities. Once they spot an opportunity, they place orders through brokers or trading platforms, specifying the asset, quantity, and sometimes the price they're willing to accept."
        },
        {
          type: 'text',
          value: "These orders enter a marketplace where they're matched with counterparties – other traders looking to take the opposite side of the trade. When a match occurs, the trade is executed, and ownership of the asset transfers from seller to buyer."
        },
        {
          type: 'text',
          value: 'After execution, the trade goes through clearing and settlement processes to ensure that assets and funds change hands properly. Modern electronic trading systems can complete this entire cycle in fractions of a second.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q2_1',
            question: 'What is the correct sequence in the trading process?',
            image: {
              src: '/assets/images/trading-sequence-question.jpg',
              alt: 'Trading sequence options'
            },
            options: [
              'Execution → Analysis → Order placement → Settlement',
              'Analysis → Order placement → Execution → Settlement',
              'Order placement → Analysis → Execution → Settlement',
              'Analysis → Execution → Order placement → Settlement'
            ],
            correctAnswer: 1,
            explanation: 'The trading process typically begins with market analysis, followed by placing an order, execution of the trade, and finally settlement.'
          },
          {
            id: 'q2_2',
            question: 'What happens during trade execution?',
            options: [
              'Market analysis is performed',
              'Buy and sell orders are matched',
              'Trading strategies are developed',
              'Money is deposited into a trading account'
            ],
            correctAnswer: 1,
            explanation: 'Trade execution is the process where buy and sell orders are matched, and the transaction actually takes place.'
          },
          {
            id: 'q2_3',
            question: 'In electronic trading, how long can the trading cycle take?',
            options: [
              'Several days',
              'A few hours',
              'Fractions of a second',
              'Always exactly one minute'
            ],
            correctAnswer: 2,
            explanation: 'With modern electronic trading systems, the entire cycle from order placement to execution can happen in fractions of a second.'
          }
        ]
      }
    },
    {
      id: 'lesson1_3',
      title: 'What Does a Trader Do?',
      description: 'Explore the roles, responsibilities, and daily activities of traders',
      content: [
        {
          type: 'text',
          value: 'Traders are financial professionals who buy and sell assets with the goal of making profits from price movements. Their work combines analytical thinking, psychology, risk management, and decisiveness.'
        },
        {
          type: 'image',
          src: '/assets/images/trader-activities.jpg',
          alt: 'Trader at work with multiple screens',
          caption: 'Traders typically use multiple screens to monitor markets, news, and their positions'
        },
        {
          type: 'text',
          value: 'A typical day for a trader starts with market research – reviewing financial news, economic calendars, company announcements, and overnight market moves. They analyze charts, financial statements, and various indicators to identify potential trading opportunities.'
        },
        {
          type: 'text',
          value: 'Throughout the trading day, traders execute their strategies by placing orders, managing open positions, and adjusting to changing market conditions. They constantly assess risk-reward scenarios and make decisions under pressure and uncertainty.'
        },
        {
          type: 'text',
          value: 'Different types of traders include day traders (who close all positions by the end of each day), swing traders (who hold positions for days or weeks), and position traders (who may hold for months). Traders can specialize in specific assets like stocks, options, futures, or currencies.'
        },
        {
          type: 'text',
          value: 'After market hours, traders often review their performance, update their trading journals, and prepare strategies for the next trading session. Continuous learning and adaptation are crucial for long-term success.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q3_1',
            question: "Which of these is NOT typically part of a trader's daily routine?",
            options: [
              'Analyzing market data',
              'Managing risk on open positions',
              'Physically delivering purchased commodities',
              'Reviewing financial news'
            ],
            correctAnswer: 2,
            explanation: 'Most traders deal with electronic representations of assets and never handle physical delivery, especially in securities and derivatives markets.'
          },
          {
            id: 'q3_2',
            question: 'What type of trader holds positions overnight but rarely longer than a few weeks?',
            image: {
              src: '/assets/images/trader-types.jpg',
              alt: 'Different types of traders'
            },
            options: [
              'Scalper',
              'Day trader',
              'Swing trader',
              'Position trader'
            ],
            correctAnswer: 2,
            explanation: 'Swing traders typically hold positions for several days to a few weeks, trying to profit from medium-term price movements.'
          },
          {
            id: 'q3_3',
            question: "Which skill is MOST important for a trader's success?",
            options: [
              'Programming',
              'Risk management',
              'Public speaking',
              'Graphic design'
            ],
            correctAnswer: 1,
            explanation: 'While many skills are valuable, risk management is considered the most crucial skill for long-term trading success, as it helps traders survive inevitable losses.'
          }
        ]
      }
    },
    {
      id: 'lesson1_4',
      title: 'Trading vs. Investing',
      description: 'Understand the key differences between trading and investing strategies',
      content: [
        {
          type: 'text',
          value: 'Although trading and investing both involve market participation, they represent distinctly different approaches to financial markets with contrasting timeframes, goals, strategies, and mindsets.'
        },
        {
          type: 'image',
          src: '/assets/images/trading-vs-investing.jpg',
          alt: 'Comparison between trading and investing',
          caption: 'Trading focuses on short-term price movements, while investing targets long-term growth'
        },
        {
          type: 'text',
          value: "Timeframe: Trading typically involves shorter holding periods – from seconds (in high-frequency trading) to days or weeks. Investing, on the other hand, involves holding assets for months, years, or even decades."
        },
        {
          type: 'text',
          value: "Goals: Traders aim to profit from price movements and market volatility, often making many smaller gains that accumulate over time. Investors seek long-term appreciation, dividends, interest, and the power of compounding returns."
        },
        {
          type: 'text',
          value: "Analysis: Traders frequently employ technical analysis, focusing on price patterns, momentum, and market psychology. Investors typically rely more on fundamental analysis, examining company financials, competitive advantages, and growth potential."
        },
        {
          type: 'text',
          value: "Activity Level: Trading requires active market monitoring and frequent decision-making. Investing can be more passive, with periodic portfolio reviews and adjustments."
        },
        {
          type: 'text',
          value: "Neither approach is inherently superior – both can be successful when executed properly, and many market participants use elements of both strategies in their financial plans."
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q4_1',
            question: 'Which statement best differentiates trading from investing?',
            options: [
              'Trading is risk-free while investing is risky',
              'Trading focuses on short-term price movements while investing targets long-term growth',
              'Trading requires a large capital while investing can start small',
              'Trading is only for professionals while investing is for amateurs'
            ],
            correctAnswer: 1,
            explanation: 'The primary difference is the timeframe and approach - trading focuses on capitalizing on short-term price movements, while investing aims for long-term growth, often over years or decades.'
          },
          {
            id: 'q4_2',
            question: 'Looking at these two charts, which one likely represents a trader\'s perspective and which one an investor\'s?',
            image: {
              src: '/assets/images/timeframe-comparison.jpg',
              alt: 'Daily chart vs yearly chart'
            },
            options: [
              'A: Trader, B: Investor',
              'A: Investor, B: Trader',
              'Both represent a trader\'s perspective',
              'Both represent an investor\'s perspective'
            ],
            correctAnswer: 0,
            explanation: 'Chart A shows short-term price movements (possibly intraday or daily), which traders focus on, while Chart B shows a long-term trend over years, which is more relevant to investors.'
          },
          {
            id: 'q4_3',
            question: 'Which type of analysis is more commonly used by investors rather than traders?',
            options: [
              'Technical analysis of price charts',
              'Volume analysis',
              'Fundamental analysis of company financials',
              'Momentum indicators'
            ],
            correctAnswer: 2,
            explanation: 'While there\'s overlap in techniques, investors typically place greater emphasis on fundamental analysis - examining company financials, business models, competitive advantages, and growth potential.'
          }
        ]
      }
    },
    {
      id: 'lesson1_5',
      title: 'How Does a Broker Work?',
      description: 'Learn about brokers, order books, and the matching process in financial markets',
      content: [
        {
          type: 'text',
          value: 'Brokers are intermediaries that connect traders and investors to financial markets. They execute buy and sell orders on behalf of their clients and provide the necessary infrastructure for trading.'
        },
        {
          type: 'image',
          src: '/assets/images/broker-function.jpg',
          alt: 'Broker as intermediary between traders and markets',
          caption: 'Brokers serve as intermediaries between individual traders and the larger financial markets'
        },
        {
          type: 'text',
          value: 'When you place an order through a broker, it gets sent to an exchange or market where it enters the order book. An order book is a real-time, dynamic list of buy orders (bids) and sell orders (asks) for a specific security or asset.'
        },
        {
          type: 'text',
          value: "Buy orders are typically arranged from highest price to lowest, while sell orders are arranged from lowest price to highest. The difference between the highest bid and the lowest ask is called the spread."
        },
        {
          type: 'image',
          src: '/assets/images/orderbook-visualization.jpg',
          alt: 'Visualization of an order book',
          caption: 'Order books show pending buy and sell orders at different price levels'
        },
        {
          type: 'text',
          value: "The matching process occurs when a buy order and sell order have compatible prices. For example, if someone wants to buy at $10.05 or lower, and someone else wants to sell at $10.05 or higher, these orders can match, resulting in a trade execution."
        },
        {
          type: 'text',
          value: "Modern markets use sophisticated electronic matching engines that process thousands of orders per second according to strict price-time priority rules. The best prices get executed first, and when prices are equal, the orders that arrived earlier take precedence."
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q5_1',
            question: 'What is an order book in financial markets?',
            options: [
              'A physical book where trades are recorded manually',
              'A digital record of pending buy and sell orders for an asset',
              'A broker\'s trading history',
              'A trader\'s personal trade journal'
            ],
            correctAnswer: 1,
            explanation: 'An order book is a digital, real-time list that shows all pending buy and sell orders for a specific asset at various price levels.'
          },
          {
            id: 'q5_2',
            question: 'Looking at this order book visualization, what is the current spread?',
            image: {
              src: '/assets/images/spread-question.jpg',
              alt: 'Order book with bids and asks'
            },
            options: [
              '$0.01',
              '$0.05',
              '$0.10',
              '$0.20'
            ],
            correctAnswer: 2,
            explanation: 'The spread is the difference between the highest bid price and the lowest ask price. In this example, the highest bid is $10.25 and the lowest ask is $10.35, resulting in a $0.10 spread.'
          },
          {
            id: 'q5_3',
            question: 'Which principle governs the order matching process in most electronic markets?',
            options: [
              'Random selection',
              'Order size priority (larger orders first)',
              'Price-time priority',
              'Broker reputation ranking'
            ],
            correctAnswer: 2,
            explanation: 'Most electronic markets use price-time priority, where the best-priced orders are executed first, and when prices are equal, the orders that arrived earlier take precedence.'
          }
        ]
      }
    },
    {
      id: 'lesson1_6',
      title: 'Trading Terminology',
      description: 'Master essential trading terms like spreads, slippage, and liquidity',
      content: [
        {
          type: 'text',
          value: 'Understanding trading terminology is crucial for effective communication and decision-making in financial markets. Let\'s explore some of the most important concepts.'
        },
        {
          type: 'text',
          value: "Spread: The difference between the bid price (what buyers are willing to pay) and the ask price (what sellers are willing to accept). Narrow spreads typically indicate liquid markets with high trading activity."
        },
        {
          type: 'image',
          src: '/assets/images/spread-visualization.jpg',
          alt: 'Visualization of bid-ask spread',
          caption: 'The bid-ask spread represents the difference between buying and selling prices'
        },
        {
          type: 'text',
          value: "Slippage: The difference between the expected price of a trade and the actual executed price. Slippage often occurs during high volatility or when large orders are executed in markets with limited liquidity."
        },
        {
          type: 'text',
          value: "Liquidity: The ease with which an asset can be bought or sold without causing a significant price movement. High liquidity means there are many buyers and sellers, making it easier to enter and exit positions at stable prices."
        },
        {
          type: 'image',
          src: '/assets/images/liquidity-comparison.jpg',
          alt: 'Comparison of high and low liquidity markets',
          caption: 'High liquidity markets (left) have many orders at each price level, while low liquidity markets (right) have sparse order books'
        },
        {
          type: 'text',
          value: "Other important terms include volume (the number of shares or contracts traded), volatility (the rate at which prices change), margin (borrowed funds used to increase position size), and leverage (the ratio of the position size to the required capital)."
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q6_1',
            question: 'What does a narrow bid-ask spread typically indicate about a market?',
            options: [
              'Low liquidity and high volatility',
              'High liquidity and active trading',
              'Limited market participation',
              'Market manipulation'
            ],
            correctAnswer: 1,
            explanation: 'A narrow spread usually indicates a liquid market with many active participants, making it easier and cheaper to trade.'
          },
          {
            id: 'q6_2',
            question: 'In which scenario would you most likely experience significant slippage?',
            image: {
              src: '/assets/images/slippage-scenarios.jpg',
              alt: 'Different market scenarios'
            },
            options: [
              'Executing a small order in a highly liquid market',
              'Placing a limit order in a stable market',
              'Executing a large market order during breaking news',
              'Trading during regular market hours with normal volume'
            ],
            correctAnswer: 2,
            explanation: 'Slippage is most common when executing large orders during high volatility (like breaking news), especially with market orders rather than limit orders.'
          },
          {
            id: 'q6_3',
            question: 'What is leverage in trading?',
            options: [
              'A tool used to analyze market trends',
              'The use of borrowed capital to increase potential return',
              'A measure of market volatility',
              'The commission charged by brokers'
            ],
            correctAnswer: 1,
            explanation: 'Leverage involves using borrowed funds to increase your position size and potential returns, but it also amplifies risk and potential losses.'
          }
        ]
      }
    },
    {
      id: 'lesson1_7',
      title: 'Bulls and Bears',
      description: 'Understand market sentiment and the concepts of bullish and bearish markets',
      content: [
        {
          type: 'text',
          value: "The terms \"bull\" and \"bear\" are fundamental concepts in financial markets that describe market sentiment, trends, and investor attitudes. These animal metaphors have been part of financial terminology for centuries."
        },
        {
          type: 'image',
          src: '/assets/images/bull-bear-markets.jpg',
          alt: 'Bull and bear market comparison',
          caption: 'Bull markets trend upward, while bear markets trend downward over time'
        },
        {
          type: 'text',
          value: "A bull market is characterized by rising prices and positive sentiment. The term comes from the way a bull attacks – thrusting its horns upward. During bull markets, investor confidence is high, economic indicators are positive, and there's generally optimism about future prospects."
        },
        {
          type: 'text',
          value: "A bear market is characterized by falling prices and negative sentiment. The term derives from the way a bear attacks – swiping its paws downward. Bear markets typically involve economic slowdowns, pessimism, and cautious or fearful market participants."
        },
        {
          type: 'text',
          value: "Traders and investors are also described as \"bullish\" or \"bearish\" based on their outlook. A bullish trader expects prices to rise and may take long positions, while a bearish trader anticipates price declines and may take short positions."
        },
        {
          type: 'image',
          src: '/assets/images/sentiment-indicators.jpg',
          alt: 'Market sentiment indicators',
          caption: 'Various indicators help traders gauge whether market sentiment is bullish or bearish'
        },
        {
          type: 'text',
          value: "Market sentiment often shifts between these two extremes, and recognizing the prevailing sentiment – and potential shifts – is crucial for successful trading. However, it's important to note that markets rarely move in a straight line, and even strong bull markets experience corrections, while bear markets have rallies."
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q7_1',
            question: 'Based on this chart pattern, would you describe this as a bull or bear market?',
            image: {
              src: '/assets/images/market-trend-question.jpg',
              alt: 'Chart showing an upward trend'
            },
            options: [
              'Strongly bullish',
              'Mildly bullish',
              'Mildly bearish',
              'Strongly bearish'
            ],
            correctAnswer: 0,
            explanation: 'This chart shows a strong upward trend with higher highs and higher lows, which is characteristic of a strongly bullish market.'
          },
          {
            id: 'q7_2',
            question: 'What strategy would a bearish trader likely employ?',
            options: [
              'Buy and hold for long-term appreciation',
              'Purchase call options',
              'Short selling or buying put options',
              'Dollar-cost averaging into index funds'
            ],
            correctAnswer: 2,
            explanation: 'Bearish traders expect prices to fall, so they often employ strategies like short selling (borrowing and selling shares to buy back cheaper later) or buying put options (which increase in value when prices fall).'
          },
          {
            id: 'q7_3',
            question: 'Which of these is NOT typically associated with a bull market?',
            options: [
              'Increasing investor confidence',
              'Rising stock prices',
              'Economic expansion',
              'High unemployment rates'
            ],
            correctAnswer: 3,
            explanation: 'High unemployment rates are typically associated with economic weakness and bear markets, not bull markets, which generally coincide with economic growth and falling unemployment.'
          }
        ]
      }
    },
    {
      id: 'lesson1_8',
      title: 'Types of Financial Markets',
      description: 'Explore different financial markets and their characteristics',
      content: [
        {
          type: 'text',
          value: 'Financial markets are platforms where buyers and sellers can trade securities, commodities, and other financial instruments. These markets play a crucial role in allocating resources and facilitating economic growth.'
        },
        {
          type: 'text',
          value: 'Stock markets are perhaps the most well-known type of financial market. They enable companies to raise capital by selling shares to investors who become partial owners. Examples include the New York Stock Exchange (NYSE) and NASDAQ.'
        },
        {
          type: 'text',
          value: 'Bond markets (or debt markets) allow entities to issue debt securities to raise funds. Investors who purchase bonds are essentially lending money to the issuer in exchange for regular interest payments and the return of principal at maturity.'
        },
        {
          type: 'text',
          value: 'Foreign exchange (forex) markets facilitate the trading of currencies. With a daily trading volume exceeding $6 trillion, the forex market is the largest and most liquid financial market in the world.'
        },
        {
          type: 'image',
          src: '/assets/images/financial-markets.jpg',
          alt: 'Different financial markets',
          caption: 'Major financial markets include stock, bond, forex, and commodity markets'
        },
        {
          type: 'text',
          value: 'Commodity markets enable the trading of raw materials like gold, oil, natural gas, and agricultural products. These can be traded as spot (immediate delivery) or futures contracts (delivery at a future date).'
        },
        {
          type: 'text',
          value: 'Derivatives markets involve financial instruments whose value is derived from an underlying asset. These include options, futures, swaps, and other complex instruments used for hedging risks or speculative purposes.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q8_1',
            question: 'Which market has the highest daily trading volume?',
            options: [
              'Stock market',
              'Bond market',
              'Forex market',
              'Cryptocurrency market'
            ],
            correctAnswer: 2,
            explanation: 'The foreign exchange (forex) market has the highest daily trading volume, exceeding $6 trillion, making it the largest and most liquid financial market in the world.'
          },
          {
            id: 'q8_2',
            question: 'What do investors receive when they purchase shares in the stock market?',
            options: [
              'A loan agreement with the company',
              'Partial ownership in the company',
              'Regular interest payments',
              'A physical certificate only'
            ],
            correctAnswer: 1,
            explanation: 'When investors purchase shares of stock, they receive partial ownership in the company, which may include voting rights and potential dividends.'
          },
          {
            id: 'q8_3',
            question: 'Looking at these market visualizations, which one represents the forex market?',
            image: {
              src: '/assets/images/market-types.jpg',
              alt: 'Different market visualizations'
            },
            options: [
              'Market A',
              'Market B',
              'Market C',
              'Market D'
            ],
            correctAnswer: 2,
            explanation: 'Market C shows currency pairs and their exchange rates, which is characteristic of the forex market where currencies are traded against each other.'
          }
        ]
      }
    }
  ]
};

export default level1;
