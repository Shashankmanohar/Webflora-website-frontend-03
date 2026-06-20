"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";

export default function LazySection({ loader, height = "200px", props = {} }) {
  const [inView, setInView] = useState(false);
  const [Component, setComponent] = useState(null);
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

  useEffect(() => {
    if (inView && loader) {
      loader().then((mod) => {
        setComponent(() => mod.default);
      });
    }
  }, [inView, loader]);

  return (
    <div ref={ref} style={{ minHeight: inView ? "auto" : height }}>
      {Component ? (
        <Suspense fallback={<div style={{ minHeight: height }} />}>
          <Component {...props} />
        </Suspense>
      ) : (
        <div style={{ minHeight: height }} />
      )}
    </div>
  );
}
