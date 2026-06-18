"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";

export default function LazySection({ children, height = "200px" }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: inView ? "auto" : height }}>
      {inView ? (
        <Suspense fallback={<div style={{ minHeight: height }} />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}
