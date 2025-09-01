import React from "react";
import { Heart, ChevronRight } from "lucide-react";

const PetStoreUI = () => {
  const products = [
    {
      id: 1,
      name: "Fancy Feast",
      price: "$50.00",
      pricePerOz: "69.4 ¢/oz",
      description:
        "(24 Pack) Fancy Feast Pate Wet Cat Food, Savory Centers Pate With Be...",
      image:
        "https://images.unsplash.com/photo-1610096768223-3b0a79a209b0?auto=format&fit=crop&w=80&q=80",
    },
    {
      id: 2,
      name: "Chicken Coop",
      price: "$249.99",
      description: "ZephyPaws 118in Chicken Coop, Wooden Hen House Outdoor...",
      image:
        "https://images.unsplash.com/photo-1608439676593-4155b3c97b74?auto=format&fit=crop&w=80&q=80",
    },
    {
      id: 3,
      name: "Delectables",
      price: "$13.99",
      pricePerOz: "83.3 ¢/oz",
      description:
        "Hartz Delectables Bisque for Kittens, Complete & Balanced Lickable Wet...",
      image:
        "https://images.unsplash.com/photo-1604908177225-6fa0bd014f68?auto=format&fit=crop&w=80&q=80",
    },
  ];

  return (
    <div className="bg-white px-28 p-5">
      <div className="flex">
        {/* Left Section - Hero Banner */}
        <div className="w-1/2 bg-gray-100 h-111 p-8 rounded-lg relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-blue-900 font-medium mb-2">
              Benebone, Playology & more
            </p>
            <h1 className="text-5xl font-bold text-blue-900 leading-tight mb-8">
              A new lineup of
              <br />
              dog toys
            </h1>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Shop now
            </button>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm mt-8 inline-block">
              New
              <br />
              Arrivals
            </div>
          </div>
        </div>

        {/* Right Section - Product Grid */}
        <div className="w-1/2 p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Flea & tick treatments
              </h2>
              <p className="text-gray-600">Subscribe to top brands for dogs</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800">
              View all
            </button>
          </div>

          {/* Dynamic Product Grid */}
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg p-4 border hover:shadow-lg transition-shadow"
              >
                <div className="relative mb-4">
                  <button className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full">
                    <Heart className="w-5 h-5 text-gray-400" />
                  </button>
                  <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-20 h-20 rounded"
                    />
                  </div>
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">
                  {product.price}
                </div>
                {product.pricePerOz && (
                  <div className="text-sm text-gray-500 mb-2">
                    {product.pricePerOz}
                  </div>
                )}
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <span className="mr-2">+</span> Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetStoreUI;
