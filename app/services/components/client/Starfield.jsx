"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Starfield = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    setStars(Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 3 + 4,
    })));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white will-change-[opacity]"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: star.duration, repeat: Infinity, ease: "linear" }}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
