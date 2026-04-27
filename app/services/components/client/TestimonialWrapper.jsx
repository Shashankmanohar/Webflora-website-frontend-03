"use client";

import React from "react";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("../TesimonialSection"), { 
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-3xl m-6" />
});

const TestimonialWrapper = () => {
  return <Testimonials />;
};

export default TestimonialWrapper;
