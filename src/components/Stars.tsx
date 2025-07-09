import React from "react";

type StarsProps = {
  rating: number;
  max?: number;
  direction?: "rtl" | "ltr";
};

const Stars: React.FC<StarsProps> = ({ rating, max = 5, direction = "ltr" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars > 0;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  // تحديد اتجاه التدرج
  const gradientDirection = direction === "rtl" ? "to left" : "to right";

  return (
    <span className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <polygon points="9.9,1.1 12.3,6.6 18.2,7.3 13.7,11.3 15,17.1 9.9,14.1 4.8,17.1 6.1,11.3 1.6,7.3 7.5,6.6" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20">
          <defs>
            <linearGradient id={`half-${direction}`}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <polygon
            points="9.9,1.1 12.3,6.6 18.2,7.3 13.7,11.3 15,17.1 9.9,14.1 4.8,17.1 6.1,11.3 1.6,7.3 7.5,6.6"
            fill={`url(#half-${direction})`}
            stroke="currentColor"
            strokeWidth="1"
            style={{
              // عكس اتجاه التدرج إذا كان RTL
              transform: direction === "rtl" ? "scaleX(-1)" : undefined,
              transformOrigin: "center",
            }}
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <polygon points="9.9,1.1 12.3,6.6 18.2,7.3 13.7,11.3 15,17.1 9.9,14.1 4.8,17.1 6.1,11.3 1.6,7.3 7.5,6.6" />
        </svg>
      ))}
    </span>
  );
};

export default Stars;