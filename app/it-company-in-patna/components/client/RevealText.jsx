"use client";

import React from "react";
import { motion } from "framer-motion";

const RevealText = ({ text, className = "" }) => {
  const words = text.split(" ");
  return (
    <div className={`overflow-hidden flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.3em] pb-1 will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default RevealText;
