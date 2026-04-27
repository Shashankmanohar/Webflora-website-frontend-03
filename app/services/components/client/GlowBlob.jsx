"use client";

import React from "react";
import { motion } from "framer-motion";

const GlowBlob = ({ color, size, top, left, bottom, right, delay = 0 }) => (
  <motion.div
    animate={{
      x: [0, 20, -20, 0],
      y: [0, -30, 30, 0],
    }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
    className="absolute blur-[150px] rounded-full opacity-10 pointer-events-none will-change-transform"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      top: top,
      left: left,
      bottom: bottom,
      right: right,
    }}
  />
);

export default GlowBlob;
