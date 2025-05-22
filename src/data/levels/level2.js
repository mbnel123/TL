// src/data/levels/level2.js
const level2 = {
  id: 'level2',
  title: 'Financial Markets',
  icon: 'analytics',
  nextLevel: null, // Last level for now
  position: { top: 250, left: 450 },
  lessons: [
    {
      id: 'lesson2_1',
      title: 'Stock Markets Explained',
      description: 'Understand how stock markets function and how to participate',
      content: [
        {
          type: 'text',
          value: 'Stock markets are organized marketplaces where shares of publicly traded companies are bought and sold. These markets can be physical locations (like the NYSE trading floor) or electronic networks (like NASDAQ).'
        },
        {
          type: 'text',
          value: 'When companies want to raise capital, they can issue shares through an Initial Public Offering (IPO). After the IPO, these shares trade on secondary markets where investors buy and sell them based on their perceived value.'
        },
        {
          type: 'text',
          value: 'Stock prices are determined by supply and demand dynamics. When more investors want to buy a stock than sell it, the price typically rises. Conversely, when more investors want to sell than buy, the price usually falls.'
        },
        {
          type: 'image',
          src: '/assets/images/lessons/stock_market_trading.jpg',
          alt: 'Stock market trading',
          caption: 'Modern stock trading happens primarily through electronic networks'
        },
        {
          type: 'text',
          value: 'Stocks can be categorized in different ways: by market capitalization (large-cap, mid-cap, small-cap), by sector (technology, healthcare, financials), or by style (growth or value). Diversifying across these categories can help manage risk in your portfolio.'
        },
        {
          type: 'text',
          value: 'Stock indices like the S&P 500, Dow Jones Industrial Average, and NASDAQ Composite track the performance of groups of stocks and serve as benchmarks for the broader market.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q3_1',
            question: 'What is an IPO?',
            options: [
              'International Portfolio Optimization',
              'Initial Public Offering',
              'Internal Price Oscillation',
              'Investor Protection Order'
            ],
            correctAnswer: 1
          },
          {
            id: 'q3_2',
            question: 'What happens to a stock\'s price when more investors want to sell it than buy it?',
            options: [
              'The price typically rises',
              'The price remains stable',
              'The price typically falls',
              'Trading gets suspended'
            ],
            correctAnswer: 2
          },
          {
            id: 'q3_3',
            question: 'Which of these is NOT a major stock exchange?',
            options: [
              'NYSE (New York Stock Exchange)',
              'NASDAQ',
              'LSE (London Stock Exchange)',
              'IMF (International Monetary Fund)'
            ],
            correctAnswer: 3
          },
          {
            id: 'q3_4',
            question: 'Look at this chart pattern. What is it called?',
            image: '/assets/images/quiz/head_shoulders_pattern.jpg',
            options: [
              'Double Bottom',
              'Head and Shoulders',
              'Cup and Handle',
              'Descending Triangle'
            ],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'lesson2_2',
      title: 'Bond Markets and Debt Securities',
      description: 'Learn about bonds, treasuries, and other debt instruments',
      content: [
        {
          type: 'text',
          value: 'Bond markets, also known as debt markets or fixed-income markets, allow governments, municipalities, and corporations to issue debt securities to raise capital. Investors who buy bonds are essentially lending money to the issuer.'
        },
        {
          type: 'text',
          value: 'Bonds typically pay regular interest (known as coupon payments) and return the principal amount at maturity. They are generally considered less risky than stocks, though the risk level varies depending on the issuer\'s creditworthiness.'
        },
        {
          type: 'text',
          value: 'Government bonds, such as U.S. Treasury securities, are backed by the full faith and credit of the issuing government and are considered among the safest investments. Corporate bonds, issued by companies, generally offer higher yields but come with higher risk.'
        },
        {
          type: 'image',
          src: '/assets/images/lessons/bond_market.jpg',
          alt: 'Bond market illustration',
          caption: 'Bonds trade in various markets with different characteristics and risk profiles'
        },
        {
          type: 'text',
          value: 'Bond prices have an inverse relationship with interest rates. When rates rise, bond prices typically fall, and vice versa. This is because new bonds will be issued at the higher prevailing rates, making existing bonds with lower rates less attractive.'
        },
        {
          type: 'text',
          value: 'Bond ratings from agencies like Moody\'s, S&P, and Fitch help investors assess credit risk. Investment-grade bonds (AAA to BBB-) are considered lower risk, while high-yield or "junk" bonds (BB+ and below) offer higher returns with greater risk.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q4_1',
            question: 'What is a coupon payment in bond investing?',
            options: [
              'A discount voucher for purchasing more bonds',
              'The regular interest payment made to bondholders',
              'The fee charged by brokers for bond transactions',
              'The principal amount returned at maturity'
            ],
            correctAnswer: 1
          },
          {
            id: 'q4_2',
            question: 'Which type of bonds are generally considered the safest?',
            options: [
              'Corporate bonds',
              'Municipal bonds',
              'Junk bonds',
              'Government treasury bonds'
            ],
            correctAnswer: 3
          },
          {
            id: 'q4_3',
            question: 'What happens to existing bonds when interest rates rise?',
            options: [
              'Their prices typically rise',
              'Their prices typically fall',
              'Their coupon rates automatically adjust upward',
              'They automatically mature earlier'
            ],
            correctAnswer: 1
          },
          {
            id: 'q4_4',
            question: 'Based on this yield curve, what economic condition might analysts predict?',
            image: '/assets/images/quiz/inverted_yield_curve.jpg',
            options: [
              'Economic growth',
              'Stable economy',
              'Potential recession',
              'Hyperinflation'
            ],
            correctAnswer: 2
          }
        ]
      }
    },
    {
      id: 'lesson2_3',
      title: 'Forex Markets',
      description: 'Explore the foreign exchange market and currency trading',
      content: [
        {
          type: 'text',
          value: 'The foreign exchange (forex) market is where currencies are traded. It\'s the largest and most liquid financial market in the world, with an average daily trading volume exceeding $6 trillion.'
        },
        {
          type: 'text',
          value: 'Forex trading always involves buying one currency while simultaneously selling another, which is why currencies are quoted in pairs like EUR/USD or USD/JPY. The first currency in the pair is the base currency, and the second is the quote currency.'
        },
        {
          type: 'image',
          src: '/assets/images/lessons/forex_trading.jpg',
          alt: 'Forex trading dashboard',
          caption: 'Forex traders monitor multiple currency pairs and time frames to identify trading opportunities'
        },
        {
          type: 'text',
          value: 'Forex markets operate 24 hours a day, five days a week, with trading beginning in Sydney and moving around the globe as financial centers in Tokyo, London, and New York open and close.'
        },
        {
          type: 'text',
          value: 'Major factors influencing exchange rates include interest rates, inflation, economic growth, geopolitical events, and trade balances. Central banks also play a crucial role in currency markets through monetary policy decisions and interventions.'
        },
        {
          type: 'text',
          value: 'Forex trading offers high leverage opportunities, allowing traders to control large positions with a relatively small amount of capital. However, this amplifies both potential profits and losses, making risk management essential.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q5_1',
            question: 'In the currency pair EUR/USD, which is the base currency?',
            options: [
              'USD',
              'EUR',
              'Neither, they are equals',
              'It depends on the exchange'
            ],
            correctAnswer: 1
          },
          {
            id: 'q5_2',
            question: 'What does this candlestick pattern indicate?',
            image: '/assets/images/quiz/forex_engulfing_pattern.jpg',
            options: [
              'Continuation of current trend',
              'Potential reversal',
              'Market indecision',
              'Low volatility period'
            ],
            correctAnswer: 1
          },
          {
            id: 'q5_3',
            question: 'Which of these is NOT one of the major forex trading sessions?',
            options: [
              'Sydney session',
              'Tokyo session',
              'Berlin session',
              'London session'
            ],
            correctAnswer: 2
          },
          {
            id: 'q5_4',
            question: 'If the EUR/USD exchange rate moves from 1.1000 to 1.1050, what happened to the euro?',
            options: [
              'It strengthened against the US dollar',
              'It weakened against the US dollar',
              'It remained stable',
              'Not enough information to determine'
            ],
            correctAnswer: 0
          }
        ]
      }
    },
    {
      id: 'lesson2_4',
      title: 'Cryptocurrency Markets',
      description: 'Understand digital currencies and blockchain-based assets',
      content: [
        {
          type: 'text',
          value: 'Cryptocurrency markets enable the trading of digital or virtual currencies that use cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized networks based on blockchain technology.'
        },
        {
          type: 'text',
          value: 'Bitcoin, created in 2009, was the first cryptocurrency and remains the largest by market capitalization. Since then, thousands of alternative cryptocurrencies (altcoins) have been created, each with different features and use cases.'
        },
        {
          type: 'image',
          src: '/assets/images/lessons/crypto_market.jpg',
          alt: 'Cryptocurrency market visualization',
          caption: 'Cryptocurrency markets operate 24/7 and can be highly volatile'
        },
        {
          type: 'text',
          value: 'Crypto markets are known for their high volatility compared to traditional financial markets. Prices can fluctuate dramatically based on factors such as technological developments, regulatory news, market sentiment, and adoption rates.'
        },
        {
          type: 'text',
          value: 'Trading cryptocurrencies can be done on centralized exchanges (like Binance or Coinbase), which function similarly to traditional stock exchanges, or decentralized exchanges (DEXs) that operate without intermediaries through smart contracts.'
        },
        {
          type: 'text',
          value: 'Beyond simple cryptocurrencies, the crypto ecosystem has expanded to include stablecoins (pegged to stable assets like USD), tokens representing various rights or utilities, non-fungible tokens (NFTs), and decentralized finance (DeFi) applications.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q6_1',
            question: 'What technology underlies most cryptocurrencies?',
            options: [
              'Artificial Intelligence',
              'Cloud Computing',
              'Blockchain',
              'Quantum Computing'
            ],
            correctAnswer: 2
          },
          {
            id: 'q6_2',
            question: 'Identify this famous cryptocurrency logo:',
            image: '/assets/images/quiz/ethereum_logo.jpg',
            options: [
              'Bitcoin',
              'Ethereum',
              'Litecoin',
              'Cardano'
            ],
            correctAnswer: 1
          },
          {
            id: 'q6_3',
            question: 'What is a "whale" in cryptocurrency markets?',
            options: [
              'A type of cryptocurrency',
              'A blockchain security feature',
              'An individual or entity holding large amounts of cryptocurrency',
              'A trading strategy involving multiple exchanges'
            ],
            correctAnswer: 2
          },
          {
            id: 'q6_4',
            question: 'What distinguishes NFTs from regular cryptocurrencies?',
            options: [
              'NFTs are fungible (interchangeable)',
              'NFTs represent unique digital assets',
              'NFTs cannot be sold or traded',
              'NFTs are issued by central banks'
            ],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'lesson2_5',
      title: 'Commodities Markets',
      description: 'Learn about trading physical goods and raw materials',
      content: [
        {
          type: 'text',
          value: 'Commodities markets facilitate the trading of raw materials or primary agricultural products. These markets are essential for price discovery and allow producers and consumers to hedge against price fluctuations.'
        },
        {
          type: 'text',
          value: 'Major commodity categories include: energy (oil, natural gas), metals (gold, silver, copper), agricultural products (wheat, corn, soybeans), and livestock and meat (cattle, hogs). Each category has its own supply and demand dynamics.'
        },
        {
          type: 'image',
          src: '/assets/images/lessons/commodities_trading.jpg',
          alt: 'Commodities trading floor',
          caption: 'While electronic trading is now dominant, some commodities still trade in physical trading pits'
        },
        {
          type: 'text',
          value: 'Investors and traders can gain exposure to commodities through futures contracts, options on futures, exchange-traded funds (ETFs), physical ownership (for some commodities like gold), or by investing in companies that produce the commodity.'
        },
        {
          type: 'text',
          value: 'Commodity prices are influenced by factors such as global economic growth, weather conditions, geopolitical events, currency fluctuations, and technological innovations that affect supply and demand.'
        },
        {
          type: 'text',
          value: 'Many commodities exhibit cyclical price patterns based on seasonal production and consumption patterns, making market timing an important aspect of commodities trading.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q7_1',
            question: 'Which of these is NOT a major category of traded commodities?',
            options: [
              'Energy',
              'Metals',
              'Agricultural products',
              'Software'
            ],
            correctAnswer: 3
          },
          {
            id: 'q7_2',
            question: 'What commodity is shown in this futures price chart?',
            image: '/assets/images/quiz/gold_futures_chart.jpg',
            options: [
              'Crude Oil',
              'Gold',
              'Coffee',
              'Natural Gas'
            ],
            correctAnswer: 1
          },
          {
            id: 'q7_3',
            question: 'Which factor typically has the LEAST impact on agricultural commodity prices?',
            options: [
              'Weather conditions',
              'Central bank interest rates',
              'Crop yields',
              'Seasonal demand patterns'
            ],
            correctAnswer: 1
          },
          {
            id: 'q7_4',
            question: 'What is "contango" in commodities markets?',
            options: [
              'A trading strategy involving multiple commodities',
              'A situation where futures prices are higher than spot prices',
              'A regulatory agency overseeing commodities trading',
              'A type of commodity option'
            ],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'lesson2_6',
      title: 'Market Indices',
      description: 'Understand market benchmarks and how they track performance',
      content: [
        {
          type: 'text',
          value: 'Market indices are statistical measures that represent the value of a specific segment of a financial market. They track the performance of a group of assets, such as stocks or bonds, and serve as benchmarks for investors and fund managers.'
        },
        {
          type: 'text',
          value: 'Stock indices can be constructed in different ways: price-weighted (like the Dow Jones Industrial Average), market-cap weighted (like the S&P 500), or equal-weighted. Each calculation method affects how individual components influence the index.'
        },
        {
          type: 'image',
          src: '/assets/images/lessons/market_indices.jpg',
          alt: 'Major market indices display',
          caption: 'Global market indices provide snapshots of economic performance across different regions'
        },
        {
          type: 'text',
          value: 'Major global stock indices include the S&P 500 and Dow Jones (US), FTSE 100 (UK), DAX (Germany), Nikkei 225 (Japan), and Hang Seng (Hong Kong). Each represents the economic performance of its respective country or region.'
        },
        {
          type: 'text',
          value: 'Indices are not just tracking tools—they can be traded through index funds, ETFs, futures, and options. These instruments allow investors to gain diversified exposure to entire markets or sectors with a single transaction.'
        },
        {
          type: 'text',
          value: 'Many indices are rebalanced periodically, adding or removing components based on predefined criteria. This ensures they remain representative of their target market segment over time.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q8_1',
            question: 'The S&P 500 index is calculated based on:',
            options: [
              'Equal weighting of all companies',
              'Market capitalization of the component companies',
              'Share price of the component companies',
              'Revenue of the component companies'
            ],
            correctAnswer: 1
          },
          {
            id: 'q8_2',
            question: 'Identify the country associated with this stock index:',
            image: '/assets/images/quiz/nikkei_index.jpg',
            options: [
              'United States',
              'United Kingdom',
              'Japan',
              'Germany'
            ],
            correctAnswer: 2
          },
          {
            id: 'q8_3',
            question: 'What is the main difference between a price-weighted index and a market-cap weighted index?',
            options: [
              'Price-weighted indices only include high-priced stocks',
              'Market-cap weighted indices only include large companies',
              'In price-weighted indices, higher-priced stocks have more influence regardless of company size',
              'Market-cap weighted indices only measure price changes, not total returns'
            ],
            correctAnswer: 2
          },
          {
            id: 'q8_4',
            question: 'Which of the following is NOT a way to invest in an index?',
            options: [
              'Index ETF',
              'Index mutual fund',
              'Index futures',
              'Index shareholders meeting'
            ],
            correctAnswer: 3
          }
        ]
      }
    },
    {
      id: 'lesson2_7',
      title: 'Futures Markets',
      description: 'Learn about derivative contracts for future delivery',
      content: [
        {
          type: 'text',
          value: 'Futures markets involve standardized contracts where buyers and sellers agree to exchange a specified asset at a predetermined price at a future date. These markets originally developed to help agricultural producers and consumers manage price risk.'
        },
        {
          type: 'text',
          value: 'Today, futures contracts exist for a wide range of assets: commodities (grain, oil, metals), financial instruments (stock indices, bonds, currencies), and even intangibles like interest rates or weather derivatives.'
        },
        {
          type: 'image',
          src: '/assets/images/lessons/futures_trading.jpg',
          alt: 'Futures trading screen',
          caption: 'Futures traders analyze contract specifications, delivery dates, and market conditions'
        },
        {
          type: 'text',
          value: 'Futures contracts have standardized terms regarding quantity, quality, delivery time, and location. This standardization creates liquidity and makes them easier to trade compared to forward contracts, which are customized.'
        },
        {
          type: 'text',
          value: 'Futures trading requires margin—a performance bond that represents a fraction of the contract\'s value. This creates leverage, allowing traders to control large positions with relatively small capital, but also amplifies risk.'
        },
        {
          type: 'text',
          value: 'While futures contracts technically obligate the holder to take or make delivery of the underlying asset, most futures positions are closed before expiration through offsetting trades, making physical delivery unnecessary.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q9_1',
            question: 'What is the primary purpose of futures markets?',
            options: [
              'To allow day trading of commodities',
              'To facilitate price discovery and hedging',
              'To enable central banks to control market prices',
              'To prevent physical delivery of commodities'
            ],
            correctAnswer: 1
          },
          {
            id: 'q9_2',
            question: 'What does this futures trading curve indicate?',
            image: '/assets/images/quiz/futures_curve.jpg',
            options: [
              'Backwardation',
              'Contango',
              'Spot delivery',
              'Delivery failure'
            ],
            correctAnswer: 0
          },
          {
            id: 'q9_3',
            question: 'What happens if you hold a futures contract until expiration without closing the position?',
            options: [
              'The contract is automatically renewed',
              'You must take or make delivery of the underlying asset',
              'The exchange voids the contract',
              'A penalty fee is assessed'
            ],
            correctAnswer: 1
          },
          {
            id: 'q9_4',
            question: 'How are futures contracts different from options?',
            options: [
              'Futures contracts have no expiration date',
              'Futures give the holder the right but not obligation to buy/sell',
              'Futures obligate both parties to fulfill the contract terms',
              'Futures can only be used for commodities, not financial instruments'
            ],
            correctAnswer: 2
          }
        ]
      }
    },
    {
      id: 'lesson2_8',
      title: 'Options Markets',
      description: 'Explore derivatives that provide the right but not obligation to buy or sell',
      content: [
        {
          type: 'text',
          value: 'Options are financial derivatives that give buyers the right, but not the obligation, to buy or sell an underlying asset at a specified price (strike price) before or at the expiration date. Call options provide the right to buy, while put options provide the right to sell.'
        },
        {
          type: 'text',
          value: 'Options pricing is influenced by several factors: the underlying asset\'s price, strike price, time until expiration, volatility, interest rates, and dividends. The Black-Scholes model is a common mathematical formula used to determine theoretical option prices.'
        },
        {
          type: 'image',
          src: '/assets/images/lessons/options_payoff.jpg',
          alt: 'Options payoff diagrams',
          caption: 'Payoff diagrams visualize profit and loss potential for different options strategies'
        },
        {
          type: 'text',
          value: 'Options can be used for various purposes: speculation on price movements, hedging existing positions against adverse moves, generating income through premium collection, or constructing complex strategies with specific risk-reward profiles.'
        },
        {
          type: 'text',
          value: 'Common options strategies include covered calls, protective puts, straddles, strangles, spreads, and iron condors. Each strategy combines different options positions to achieve specific objectives based on market outlook.'
        },
        {
          type: 'text',
          value: 'Options have unique terminology. "In-the-money" options have intrinsic value, "at-the-money" options have strike prices near the underlying asset\'s price, and "out-of-the-money" options have no intrinsic value. Options also have "Greeks" (delta, gamma, theta, vega, rho) that measure sensitivity to various factors.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q10_1',
            question: 'If you buy a call option, what right does it give you?',
            options: [
              'The right to sell the underlying asset at the strike price',
              'The right to buy the underlying asset at the strike price',
              'The obligation to buy the underlying asset at market price',
              'The obligation to sell the underlying asset at market price'
            ],
            correctAnswer: 1
          },
          {
            id: 'q10_2',
            question: 'What options strategy is shown in this payoff diagram?',
            image: '/assets/images/quiz/straddle_payoff.jpg',
            options: [
              'Covered Call',
              'Protective Put',
              'Straddle',
              'Iron Condor'
            ],
            correctAnswer: 2
          },
          {
            id: 'q10_3',
            question: 'Which "Greek" measures an option\'s sensitivity to changes in the underlying asset\'s price?',
            options: [
              'Delta',
              'Gamma',
              'Theta',
              'Vega'
            ],
            correctAnswer: 0
          },
          {
            id: 'q10_4',
            question: 'What happens to the time value component of an option\'s price as it approaches expiration?',
            options: [
              'It increases linearly',
              'It decreases and eventually becomes zero at expiration',
              'It remains constant',
              'It fluctuates randomly'
            ],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'lesson2_9',
      title: 'ETFs and Investment Funds',
      description: 'Understand pooled investment vehicles and their benefits',
      content: [
        {
          type: 'text',
          value: 'Exchange-Traded Funds (ETFs) are investment funds traded on stock exchanges, much like individual stocks. They typically track an index, sector, commodity, or other asset, but can be bought and sold throughout the trading day at market prices.'
        },
        {
          type: 'text',
          value: 'ETFs offer several advantages: diversification across multiple securities with a single purchase, generally lower expense ratios than mutual funds, tax efficiency due to their creation/redemption process, and intraday trading flexibility.'
        },
        {
          type: 'image',
          src: '/assets/images/lessons/etf_structure.jpg',
          alt: 'ETF structure diagram',
          caption: 'ETFs have a unique creation/redemption mechanism that helps keep their prices closely aligned with their net asset values'
        },
        {
          type: 'text',
          value: 'Beyond traditional index-tracking ETFs, there are now leveraged ETFs (amplifying returns), inverse ETFs (profiting from market declines), active ETFs (managed to outperform benchmarks), factor ETFs (targeting specific investment factors), and thematic ETFs (focusing on specific trends or themes).'
        },
        {
          type: 'text',
          value: 'Mutual funds are another popular pooled investment vehicle. Unlike ETFs, they trade only once per day after market close at their net asset value (NAV). They come in actively managed and passively managed varieties.'
        },
        {
          type: 'text',
          value: 'Other types of investment funds include closed-end funds, hedge funds, private equity funds, and real estate investment trusts (REITs). Each has distinct characteristics regarding liquidity, accessibility, management style, and fee structures.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q11_1',
            question: 'What is a key difference between ETFs and mutual funds?',
            options: [
              'ETFs can only track indices while mutual funds are actively managed',
              'ETFs can be traded throughout the day at market prices, while mutual funds trade once daily at NAV',
              'ETFs can only invest in stocks, while mutual funds can invest in bonds',
              'ETFs are only available to institutional investors'
            ],
            correctAnswer: 1
          },
          {
            id: 'q11_2',
            question: 'What type of ETF is shown in this performance comparison chart?',
            image: '/assets/images/quiz/leveraged_etf.jpg',
            options: [
              'Index ETF',
              'Sector ETF',
              'Leveraged ETF',
              'Dividend ETF'
            ],
            correctAnswer: 2
          },
          {
            id: 'q11_3',
            question: 'What is tracking error in the context of ETFs?',
            options: [
              'A technical error in the ETF trading platform',
              'The difference between the ETF\'s performance and its benchmark index',
              'A mistake in calculating the ETF\'s net asset value',
              'The delay between placing an ETF order and execution'
            ],
            correctAnswer: 1
          },
          {
            id: 'q11_4',
            question: 'Which of the following is generally considered an advantage of ETFs over individual stocks?',
            options: [
              'Higher potential returns',
              'Guaranteed positive performance',
              'Instant diversification',
              'Control over individual company holdings'
            ],
            correctAnswer: 2
          }
        ]
      }
    },
    {
      id: 'lesson2_10',
      title: 'Market Trading Hours',
      description: 'Learn when different financial markets operate worldwide',
      content: [
        {
          type: 'text',
          value: 'Financial markets operate on different schedules around the world, creating a nearly 24-hour global trading environment during weekdays. Understanding market hours is essential for traders to know when liquidity is highest and when major price movements might occur.'
        },
        {
          type: 'text',
          value: 'Stock markets have specific trading hours. For example, the New York Stock Exchange (NYSE) and NASDAQ operate from 9:30 AM to 4:00 PM Eastern Time, with pre-market trading from 4:00 AM and after-hours trading until 8:00 PM. European exchanges generally operate during daytime hours in their respective time zones.'
        },
        {
          type: 'image',
          src: '/assets/images/lessons/global_market_hours.jpg',
          alt: 'Global market trading hours',
          caption: 'Financial markets operate in a sequence around the globe as trading centers open and close'
        },
        {
          type: 'text',
          value: 'The forex market operates 24 hours a day, five days a week, with trading beginning in Sydney, then moving through Tokyo, London, and New York as each financial center opens. The most active periods occur when two major sessions overlap, particularly during the London-New York overlap (8:00 AM to 12:00 PM Eastern Time).'
        },
        {
          type: 'text',
          value: 'Cryptocurrency markets operate 24/7/365, with no official closing times, though trading volumes can fluctuate throughout the day and week. This constant availability creates both opportunities and challenges for traders managing their schedules.'
        },
        {
          type: 'text',
          value: 'Commodities futures markets typically follow their respective exchange hours. For example, COMEX gold futures trade from 6:00 PM to 5:00 PM Eastern Time the next day, Sunday through Friday, with a break from 5:00 PM to 6:00 PM each day.'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q12_1',
            question: 'During which session overlap is forex market liquidity typically highest?',
            options: [
              'Sydney-Tokyo',
              'Tokyo-London',
              'London-New York',
              'New York-Sydney'
            ],
            correctAnswer: 2
          },
          {
            id: 'q12_2',
            question: 'Based on this chart showing trading activity, which market is illustrated?',
            image: '/assets/images/quiz/24h_market_activity.jpg',
            options: [
              'NYSE stock market',
              'Cryptocurrency market',
              'Tokyo Stock Exchange',
              'Bond market'
            ],
            correctAnswer: 1
          },
          {
            id: 'q12_3',
            question: 'What time does regular trading on the New York Stock Exchange (NYSE) begin?',
            options: [
              '8:00 AM Eastern Time',
              '9:30 AM Eastern Time',
              '10:00 AM Eastern Time',
              '12:00 PM Eastern Time'
            ],
            correctAnswer: 1
          },
          {
            id: 'q12_4',
            question: 'Which of these markets has the MOST limited trading hours per week?',
            options: [
              'Forex market',
              'Stock market',
              'Cryptocurrency market',
              'Options market'
            ],
            correctAnswer: 1
          }
        ]
      }
    }
  ]
};

export default level2;
