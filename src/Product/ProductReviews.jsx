import React from "react";
import { Star } from "lucide-react";

const ProductReviews = () => {

      
const reviews = [
    {
      name: "Aarav Sharma",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      date: "12 Aug 2025",
      comment: "Amazing product, quality is top-notch!",
    //   images: ["https://via.placeholder.com/100", "https://via.placeholder.com/100"]
    },
    {
      name: "Simran Kaur",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
      date: "8 Aug 2025",
      comment: "Good value for money. Packaging could be better.",
      images: []
    },
    {
      name: "Rohit Verma",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      date: "1 Aug 2025",
      comment: "Love it! Will buy again.",
    //   images: ["https://via.placeholder.com/100"]
    }
  ];



  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  // Rating breakdown
  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => r.rating === star).length;
    return {
      star,
      count,
      percentage: ((count / reviews.length) * 100).toFixed(0),
    };
  });

  return (
    <div className="bg-white  border border-gray-200 rounded-2xl p-6 mt-10 max-w-2xl ">
      {/* Overall Rating */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            {averageRating.toFixed(1)}/5
          </h2>
          <div className="flex justify-center md:justify-start mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(averageRating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-500 mt-1">{reviews.length} reviews</p>
        </div>

        {/* Rating Breakdown */}
        <div className="flex-1">
          {ratingBreakdown.map(({ star, count, percentage }) => (
            <div key={star} className="flex items-center gap-3 mb-2">
              <span className="text-gray-600 w-10">{star}★</span>
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-yellow-400  h-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-gray-600 w-12 text-right">
                {percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Review Cards */}
      <div className="space-y-6">
        {reviews.slice(0, 3).map((r, idx) => (
          <div
            key={idx}
            className="border-b border-gray-200 pb-4 last:border-none"
          >
            <div className="flex items-center gap-3 mb-2">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{r.name}</h4>
                <p className="text-xs text-gray-500">{r.date}</p>
              </div>
            </div>

            {/* Star rating */}
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < r.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-700 mb-3">{r.comment}</p>

            {/* Review Images */}
            {r.images && r.images.length > 0 && (
              <div className="flex gap-2">
                {r.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="review"
                    className="w-16 h-16 rounded-lg object-cover border"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="mt-6 w-full py-2 px-4 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
        View all reviews
      </button>
    </div>
  );
};

export default ProductReviews;
