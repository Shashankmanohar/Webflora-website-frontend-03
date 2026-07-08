"use client";

import React, { useState, useEffect } from "react";

const Starfield = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStars(Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 3 + 4,
      })));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
      <style>{`
        @keyframes star-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        .star-element {
          animation: star-pulse var(--star-duration) infinite ease-in-out;
        }
      `}</style>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white star-element"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--star-duration": `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
