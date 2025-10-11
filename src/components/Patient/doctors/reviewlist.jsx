import React from "react";
import { Star } from "lucide-react";

const ReviewList = ({ reviews }) => {
  if (reviews.length === 0)
    return <p className="text-gray-500">No reviews yet.</p>;

  return (
    <div className="space-y-4 mb-4">
      {reviews.map((r) => (
        <div
          key={r.id}
          className="bg-blue-50 p-3 rounded-lg shadow-sm border border-blue-100"
        >
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-gray-800">{r.name}</h4>
            <div className="flex">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 w-4 h-4 fill-yellow-400"
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600">{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
