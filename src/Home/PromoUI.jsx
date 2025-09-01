import React, { useState, useEffect } from "react";
import Blog from "../assets/images/blog42.png";
import Blog1 from "../assets/images/image__12.png";
import { Clock } from "lucide-react";

const PromoUI = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 31,
    seconds: 53,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Arcade power supply 12V2A arcade game...",
      price: "Rs.367.48",
      originalPrice: "Rs.427.09",
      discount: "-14%",
      label: "Arcade game machine power box",
      sublabel: "12V output power box",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Mirascreen G20 Plus 5G ultra 4K Wireless HD TV...",
      price: "Rs.1,302.63",
      originalPrice: "Rs.1,691.46",
      discount: "-23%",
      label: "NewAuto",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Vertical diaphragm electrolyzer, J2605...",
      price: "Rs.1,281.27",
      originalPrice: "Rs.1,601.59",
      discount: "-20%",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "L Curl Fast Easy Fan Eyelash Extension Faux...",
      price: "Rs.212.72",
      originalPrice: "Rs.506.36",
      discount: "-58%",
      brand: "Domi Lash",
    },
  ];

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <>
      <div className="min-h-120  flex items-center justify-center px-16 py-8">
        <div className="max-w-8xl w-full mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Card - Crazy Deals */}
            <div className="relative bg-gradient-to-br from-orange-300 to-yellow-400 rounded-2xl overflow-hidden h-96 flex">
              {/* Text Content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="text-white ">
                  <p className="text-sm font-medium opacity-90">crazy deals</p>
                  <h2 className="text-3xl  font-bold leading-tight">
                    buy 1 get 1 free
                  </h2>
                  <p className="text-sm opacity-90">
                    The best classic dress is on sale at ShopEasy
                  </p>
                  <button className="mt-6 border-2 border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-orange-400 transition-colors duration-200">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Model Image */}
              <div className="flex-1 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Blog}
                    alt="Model"
                    className="w-full h-full  object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Card - Spring/Summer */}
            <div className="relative bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl overflow-hidden h-96 flex">
              {/* Text Content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="text-white ">
                  <p className="text-sm font-medium opacity-90">
                    Designed for Your Kitchen
                  </p>
                  <h2 className="text-3xl font-bold leading-tight">
                    Timeless kitchen sets to complement your space.
                  </h2>
                  <p className="text-sm opacity-90 mt-2">
                    Beautifully crafted kitchen essentials, now available at
                    ShopEasy.
                  </p>
                  <button className="mt-6 border-2 border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-slate-600 transition-colors duration-200">
                    Discover More
                  </button>
                </div>
              </div>

              {/* Clothing Display */}
              <div className="flex-1 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Blog1}
                    alt="Model"
                    className="w-full h-full  object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoUI;
