import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="flex justify-center">
      {[...Array(5)].map((_, i) => {
        const currentRating = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              className="hidden"
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              size={50}
              className="cursor-pointer"
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
      <h1 className="uppercase text-xl mt-3">Your Rating is {rating}</h1>
    </div>
  );
};

export default Star;
