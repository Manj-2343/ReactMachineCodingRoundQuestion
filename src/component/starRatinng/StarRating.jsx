import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 min-h-screen justify-center">
      <h1 className="text-3xl font-bold mb-4">Star Rating</h1>

      <div className="flex gap-2">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                className="hidden"
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                size={50}
                className="cursor-pointer transition-colors duration-200"
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>

      <p className="text-xl">Your rating: {rating} stars</p>
    </div>
  );
};

export default StarRating;
