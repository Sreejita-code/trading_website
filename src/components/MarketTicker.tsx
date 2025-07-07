
import React from 'react';

interface MarketData {
  label: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
}

const MarketTicker = () => {
  const marketData: MarketData[] = [
    {
      label: "BTC/USD",
      value: "$43,250.50",
      change: "+2.45%",
      changeType: "positive"
    },
    {
      label: "ETH/USD",
      value: "$2,680.30",
      change: "+1.87%",
      changeType: "positive"
    },
    {
      label: "EUR/USD",
      value: "$1.0856",
      change: "-0.32%",
      changeType: "negative"
    },
    {
      label: "GBP/USD",
      value: "$1.2654",
      change: "+0.78%",
      changeType: "positive"
    },
    {
      label: "GOLD",
      value: "$2,045.80",
      change: "+0.95%",
      changeType: "positive"
    },
    {
      label: "OIL",
      value: "$78.45",
      change: "-1.23%",
      changeType: "negative"
    }
  ];

  return (
    <section className="py-4 bg-gray-900 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-center text-white font-bold rounded-lg p-4 min-w-[160px] m-2 
                         bg-white/5 dark:bg-white/10 backdrop-blur-sm border border-white/10 
                         hover:bg-white/10 dark:hover:bg-white/15 hover:scale-105 hover:shadow-lg 
                         transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="text-sm opacity-80 mb-1 text-gray-300 dark:text-gray-200">
                {item.label}
              </div>
              <div className="text-lg font-bold mb-1 text-white">
                {item.value}
              </div>
              <div
                className={`text-sm font-semibold transition-colors duration-200 ${
                  item.changeType === 'positive' 
                    ? 'text-green-500 hover:text-green-400' 
                    : 'text-red-500 hover:text-red-400'
                }`}
              >
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketTicker;
