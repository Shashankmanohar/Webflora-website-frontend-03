"use client";

import React from "react";

export const ScrollProgressBar = () => {
  return null;
};

export const FadeInUp = ({ children, delay = 0, className = "" }) => (
  <div 
    className={`animate-fade-in-up ${className}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

export const HoverScale = ({ children, className = "" }) => (
  <div className={`transition-transform duration-300 hover:scale-105 active:scale-95 ${className}`}>
    {children}
  </div>
);

export const StaggerContainer = ({ children, className = "" }) => (
  <div className={`animate-fade-in-up ${className}`}>
    {children}
  </div>
);
