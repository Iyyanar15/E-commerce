import { useState, useEffect } from "react";
import React from "react";
const FlashDealsUI = () => {
  const deals = [
    {
      id: 1,
      discount: "5% Off",
      price: "₹3,813.59",
      image: "https://picsum.photos/id/1080/150/150", // RC Car
      alt: "RC Car",
    },
    {
      id: 2,
      discount: "11% Off",
      price: "₹2,181.31",
      image: "https://picsum.photos/id/250/150/150", // Gaming Controller
      alt: "Gaming Controller",
    },
    {
      id: 3,
      discount: "53% Off",
      price: "₹1,221.15",
      image: "https://picsum.photos/id/180/150/150", // Wireless Earbuds
      alt: "Wireless Earbuds",
    },
    {
      id: 4,
      discount: "56% Off",
      price: "₹1,221.15",
      image: "https://picsum.photos/id/1040/150/150", // Wireless Controller
      alt: "Wireless Controller",
    },
    {
      id: 5,
      discount: "50% Off",
      price: "₹1,308.44",
      image: "https://picsum.photos/id/1019/150/150", // Cable
      alt: "Cable",
    },
    {
      id: 6,
      discount: "45% Off",
      price: "₹522.85",
      image: "https://picsum.photos/id/1062/150/150", // Wireless Mouse
      alt: "Wireless Mouse",
    },
  ];

  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 48); // 48 hours from now

    const updateTimer = () => {
      const now = new Date();
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time.toString().padStart(2, "0");

  return (
    <>
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-3xl shadow-xl max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Fla<span className="text-orange-500">⚡</span>h Deals
            </h2>

            {/* Timer */}
            <div className="flex items-center gap-1 animate-pulse">
              {["hours", "minutes", "seconds"].map((unit, index) => (
                <React.Fragment key={unit}>
                  <div className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-bold min-w-[40px] text-center shadow-inner">
                    {formatTime(timeLeft[unit])}
                  </div>
                  {index < 2 && (
                    <span className="text-gray-600 text-lg font-semibold">
                      :
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <button className="text-orange-600 hover:text-orange-800 font-semibold hover:underline transition">
            See More →
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative"
            >
              <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10 shadow-md">
                {deal.discount}
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden flex items-center justify-center">
                <img
                  src={deal.image}
                  alt={deal.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">
                  {deal.price}
                </div>
                <div className="text-sm text-gray-500 mt-1">{deal.alt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
  
    </>
  );
};

export default FlashDealsUI;
