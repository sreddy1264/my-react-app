import { useState } from "react";

export const StarRating = ({ count }) => {
  const [starCount, setStarCount] = useState(0);

  return (
    <div>
      {Array.from({ length: count }, (_, i) => {
        const startIndex = i + 1;
        return (
          <span
            style={{
              cursor: "pointer",
              color: starCount >= startIndex ? "gold" : "gray",
            }}
            onClick={() => setStarCount(startIndex)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};
