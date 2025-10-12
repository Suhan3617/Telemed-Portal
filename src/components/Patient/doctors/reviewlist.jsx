import React from "react";
import { Star } from "lucide-react";

const ReviewList = ({ reviews }) => {
  if (reviews.length === 0)
    return <p className="text-gray-500 italic">No reviews yet. Be the first!</p>;

  return (
    <div className="space-y-4 mb-6">
      {reviews.map((r) => (
        <div
          key={r.id}
          className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl shadow-sm border border-blue-200 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-lg text-gray-800">{r.name}</h4>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < r.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-700 italic">{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
