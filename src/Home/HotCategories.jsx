import React from "react";

const HotCategories = () => {
    const categories = [
        {
          title: "Tools, Industrial & Scientific",
          button: true,
          images: [
            "https://source.unsplash.com/featured/?tools",
            "https://source.unsplash.com/featured/?industrial",
            "https://source.unsplash.com/featured/?scientific",
            "https://source.unsplash.com/featured/?engineering",
          ],
        },
        {
          title: "Electronics",
          images: [
            "https://source.unsplash.com/featured/?electronics",
            "https://source.unsplash.com/featured/?gadgets",
            "https://source.unsplash.com/featured/?circuit",
          ],
        },
        {
          title: "Computers, Videos & Games",
          images: [
            "https://source.unsplash.com/featured/?computer",
            "https://source.unsplash.com/featured/?gaming",
          ],
        },
        {
          title: "Automobiles & Motorcycles",
          images: [
            "https://source.unsplash.com/featured/?car",
            "https://source.unsplash.com/featured/?motorcycle",
            "https://source.unsplash.com/featured/?vehicle",
          ],
        },
        {
          title: "Audio, Mobile Phones & Accessories",
          images: [
            "https://source.unsplash.com/featured/?headphones",
            "https://source.unsplash.com/featured/?smartphone",
            "https://source.unsplash.com/featured/?earbuds",
          ],
        },
        {
          title: "Sports & Outdoor",
          images: [
            "https://source.unsplash.com/featured/?sports",
            "https://source.unsplash.com/featured/?outdoor",
            "https://source.unsplash.com/featured/?exercise",
          ],
        },
        {
          title: "Lights & Lighting",
          images: [
            "https://source.unsplash.com/featured/?lighting",
            "https://source.unsplash.com/featured/?lamp",
            "https://source.unsplash.com/featured/?lightbulb",
          ],
        },
      ];
      
  return (
    <div className=" px-50 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        <span className="text-red-600">Hot</span> Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`bg-gray-50 p-4 rounded-md shadow-sm ${
              index === 0 ? "row-span-2 col-span-1 bg-blue-50" : ""
            }`}
          >
            <h3 className="text-md font-semibold text-gray-700 mb-2">
              {cat.title}
            </h3>

            {cat.button && (
              <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full mb-3">
                Go &rarr;
              </button>
            )}

            <div
              className={`grid ${
                index === 0 ? "grid-cols-2 gap-2" : "grid-cols-3 gap-2"
              }`}
            >
              {cat.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="object-contain w-full h-20 rounded-sm border"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotCategories;
