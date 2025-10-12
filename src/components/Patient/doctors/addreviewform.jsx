import React, { useState } from "react";
import { Send, Star } from "lucide-react";

const AddReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) {
      alert("Please fill all fields!");
      return;
    }
    onAddReview({ name, rating, comment });
    setName("");
    setRating(0);
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 backdrop-blur-md border border-blue-200 p-5 rounded-2xl shadow-inner hover:shadow-lg transition-all duration-300"
    >
      <h4 className="font-semibold text-gray-800 mb-3 text-lg">
        💬 Add Your Review
      </h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full border border-blue-200 rounded-lg p-2 mb-3 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />

      <div className="flex items-center mb-3 gap-1">
        {[1, 2, 3, 4, 5].map((num) => (
          <Star
            key={num}
            onClick={() => setRating(num)}
            className={`cursor-pointer w-6 h-6 transition-all duration-150 ${
              num <= rating
                ? "text-yellow-400 fill-yellow-400 scale-110"
                : "text-gray-300 hover:text-yellow-400"
            }`}
          />
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your experience..."
        className="w-full border border-blue-200 rounded-lg p-3 h-24 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-none"
      />

      <button
        type="submit"
        className="mt-3 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-200"
      >
        <Send className="w-4 h-4" /> Submit Review
      </button>
    </form>
  );
};

export default AddReviewForm;
