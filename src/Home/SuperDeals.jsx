import React, { useState, useEffect, useRef } from "react";
import { Clock } from "lucide-react";

export default function SuperDeals() {
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

  const formatTime = (time) => time.toString().padStart(2, "0");

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const products = [
    {
      id: 101,
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
      id: 102,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Mirascreen G20 Plus 5G ultra 4K Wireless HD TV...",
      price: "Rs.1,302.63",
      originalPrice: "Rs.1,691.46",
      discount: "-23%",
      label: "NewAuto",
    },
    {
      id: 103,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Vertical diaphragm electrolyzer, J2605...",
      price: "Rs.1,281.27",
      originalPrice: "Rs.1,601.59",
      discount: "-20%",
    },
    {
      id: 104,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "L Curl Fast Easy Fan Eyelash Extension Faux...",
      price: "Rs.212.72",
      originalPrice: "Rs.506.36",
      discount: "-58%",
      brand: "Domi Lash",
    },
    {
      id: 101,
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
      id: 102,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Mirascreen G20 Plus 5G ultra 4K Wireless HD TV...",
      price: "Rs.1,302.63",
      originalPrice: "Rs.1,691.46",
      discount: "-23%",
      label: "NewAuto",
    },
    {
      id: 103,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Vertical diaphragm electrolyzer, J2605...",
      price: "Rs.1,281.27",
      originalPrice: "Rs.1,601.59",
      discount: "-20%",
    },
    {
      id: 104,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "L Curl Fast Easy Fan Eyelash Extension Faux...",
      price: "Rs.212.72",
      originalPrice: "Rs.506.36",
      discount: "-58%",
      brand: "Domi Lash",
    },
    {
      id: 101,
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
      id: 102,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Mirascreen G20 Plus 5G ultra 4K Wireless HD TV...",
      price: "Rs.1,302.63",
      originalPrice: "Rs.1,691.46",
      discount: "-23%",
      label: "NewAuto",
    },
    {
      id: 103,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Vertical diaphragm electrolyzer, J2605...",
      price: "Rs.1,281.27",
      originalPrice: "Rs.1,601.59",
      discount: "-20%",
    },
    {
      id: 104,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "L Curl Fast Easy Fan Eyelash Extension Faux...",
      price: "Rs.212.72",
      originalPrice: "Rs.506.36",
      discount: "-58%",
      brand: "Domi Lash",
    },
    {
      id: 101,
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
      id: 102,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Mirascreen G20 Plus 5G ultra 4K Wireless HD TV...",
      price: "Rs.1,302.63",
      originalPrice: "Rs.1,691.46",
      discount: "-23%",
      label: "NewAuto",
    },
    {
      id: 103,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "Vertical diaphragm electrolyzer, J2605...",
      price: "Rs.1,281.27",
      originalPrice: "Rs.1,601.59",
      discount: "-20%",
    },
    {
      id: 104,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      title: "L Curl Fast Easy Fan Eyelash Extension Faux...",
      price: "Rs.212.72",
      originalPrice: "Rs.506.36",
      discount: "-58%",
      brand: "Domi Lash",
    },
    // Repeat or add more products with unique IDs
  ];

  return (
    <div className="border border-gray-200 bg-white hover:bg-gray-100 rounded-lg shadow-md overflow-hidden m-30 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Section */}
          <div className="flex-shrink-0 w-full md:w-72">
            <div className="mt-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                SuperDeals
              </h2>
              <div className="flex items-center bg-red-100 px-3 py-2 rounded text-gray-800 gap-2 mb-6">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="text-gray-600">Ends in:</span>
                <span className="font-mono text-lg font-bold text-red-600">
                  {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
                  {formatTime(timeLeft.seconds)}
                </span>
              </div>
              <button className="w-full bg-black text-white py-3 px-6 rounded font-semibold hover:bg-gray-800 transition-colors">
                Shop now
              </button>
            </div>
          </div>

          {/* Right Section - Products */}
          <div className="relative w-full">
            {/* Scroll Arrows */}
            <button
              onClick={scrollLeft}
              className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
            >
              →
            </button>

            {/* Product Carousel */}
            <div
              ref={carouselRef}
              className="flex overflow-x-auto space-x-4 scroll-smooth px-8 py-4 no-scrollbar"
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[200px] max-w-[220px] bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    {product.label && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        {product.label}
                      </div>
                    )}
                    {product.brand && (
                      <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                        {product.brand}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                      {product.title}
                    </h3>
                    {product.sublabel && (
                      <p className="text-xs text-gray-500 mt-1">
                        {product.sublabel}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-base font-bold text-gray-900">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <div className="mt-1 inline-block bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {product.discount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
