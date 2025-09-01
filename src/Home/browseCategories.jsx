import React from "react";

const BrowseCategories = () => {
  const categories = [
    {
      id: 1,
      name: "New Electronics",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop&crop=center",
      alt: "iPad tablet",
    },
    {
      id: 2,
      name: "Collectibles",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center",
      alt: "Trading cards",
    },
    {
      id: 3,
      name: "Parts & Accessories",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop&crop=center",
      alt: "Car wheel",
    },
    {
      id: 4,
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=150&fit=crop&crop=center",
      alt: "Sneakers",
    },
    {
      id: 5,
      name: "Health & Beauty",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=150&h=150&fit=crop&crop=center",
      alt: "Perfume bottle",
    },
    {
      id: 6,
      name: "Home & Garden",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop&crop=center",
      alt: "Eames chair",
    },
    {
      id: 7,
      name: "Refurbished",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=150&h=150&fit=crop&crop=center",
      alt: "Smartphone",
    },
  ];

  return (
    <div className="p-30  bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Browse by categories
      </h2>

      <div className="grid grid-cols-7">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="relative mb-4">
              <div className="w-44 h-44 rounded-full bg-gray-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-30 h-30 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Apply underline on group hover */}
            <span className="text-xl font-medium text-gray-900 text-center leading-tight group-hover:underline">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCategories;
