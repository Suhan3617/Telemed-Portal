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
      className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-inner"
    >
      <h4 className="font-semibold text-gray-800 mb-2">Add Your Review</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full border rounded-lg p-2 mb-2 outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex items-center mb-2 gap-1">
        {[1, 2, 3, 4, 5].map((num) => (
          <Star
            key={num}
            className={`cursor-pointer w-5 h-5 ${
              num <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
            onClick={() => setRating(num)}
          />
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your experience..."
        className="w-full border rounded-lg p-2 mb-3 h-20 outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        <Send className="w-4 h-4" /> Submit Review
      </button>
    </form>
  );
};

export default AddReviewForm;
