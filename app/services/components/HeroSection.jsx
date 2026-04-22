"use client";

import { useEffect, useRef, useState } from "react";

// ─── Starfield (Client-only to avoid SSR hydration mismatch) ─────────────────
function Starfield() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 3,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="absolute inset-0 opacity-50" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            opacity: star.opacity,
            "--opacity": star.opacity,
          }}
        />
      ))}
    </div>
  );
}

// ─── Word-by-word Headline Reveal ─────────────────────────────────────────────
function RevealHeadline({ text, isActive }) {
  const words = text.split(" ");

  return (
    <h1
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: "clamp(2.5rem, 8vw, 5rem)",
        letterSpacing: "-0.04em",
        lineHeight: 0.95,
        color: "#ffffff",
        filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.5))",
        margin: 0,
      }}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}
        >
          <span
            style={{
              display: "inline-block",
              opacity: isActive ? 1 : 0,
              transform: isActive
                ? "translateY(0) rotate(0deg)"
                : "translateY(100%) rotate(5deg)",
              transition: `opacity 0.5s ease-out ${wi * 80}ms, transform 0.5s cubic-bezier(0.2,1,0.3,1) ${wi * 80}ms`,
              willChange: "opacity, transform",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </h1>
  );
}

// ─── Fade-Up on Scroll ────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s cubic-bezier(0.2,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Arrow Up-Right SVG ───────────────────────────────────────────────────────
function ArrowUpRight({ className = "" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

// ─── Mouse / Scroll Icon SVG ──────────────────────────────────────────────────
function MouseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </svg>
  );
}

// ─── Main Hero Section ────────────────────────────────────────────────────────
export default function HeroSection() {
  const [headlineActive, setHeadlineActive] = useState(false);
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  // Trigger headline word reveal after mount
  useEffect(() => {
    const t = setTimeout(() => setHeadlineActive(true), 100);
    return () => clearTimeout(t);
  }, []);

  const headline = "Technology Solutions That Directly Increase Business Growth";
  const subtextParts = ["Websites", "Software", "Apps", "Automation", "Marketing"];

  return (
    <>
      {/* ── Keyframe Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@200;300;400&display=swap');

        @keyframes twinkle {
          0%, 100% { opacity: var(--opacity, 0.3); transform: scale(1); }
          50%        { opacity: 0; transform: scale(0.5); }
        }
        @keyframes blob {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(30px, -50px) scale(1.1); }
          66%  { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes ping-anim {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes separator-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateX(-50%) translateY(0);    animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50%       { transform: translateX(-50%) translateY(-6px); animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        @keyframes shimmer-move {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .hero-blob-1 { animation: blob 10s ease-in-out infinite; will-change: transform; }
        .hero-blob-2 { animation: blob 10s ease-in-out 2s infinite; will-change: transform; }
        .hero-blob-3 { animation: blob 10s ease-in-out 4s infinite; will-change: transform; }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.5;
          animation: scroll-bounce 2s ease-in-out infinite;
        }

        .hero-ping {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #ff3c00;
          opacity: 0.75;
          animation: ping-anim 1.5s cubic-bezier(0,0,0.2,1) infinite;
        }

        .hero-separator {
          animation: separator-pulse 2s ease-in-out infinite;
        }

        .hero-shimmer-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.55) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          animation: shimmer-move 1.8s linear infinite;
        }

        .hero-primary-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #000;
          background: #ffffff;
          border: none;
          cursor: pointer;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 0 40px rgba(255,255,255,0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          outline: none;
        }
        .hero-primary-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 60px rgba(255,255,255,0.3);
        }
        .hero-primary-btn:focus-visible {
          outline: 2px solid #ff3c00;
          outline-offset: 3px;
        }
        .hero-primary-btn .btn-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #ff3c00, #fb923c, #ff3c00);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .hero-primary-btn:hover .btn-gradient-overlay {
          opacity: 1;
        }
        .hero-primary-btn:hover .btn-arrow {
          transform: rotate(-45deg);
        }
        .btn-arrow {
          transition: transform 0.3s ease;
          position: relative;
          z-index: 10;
        }
        .btn-label {
          position: relative;
          z-index: 10;
        }

        .hero-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.10);
          cursor: pointer;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          outline: none;
        }
        .hero-secondary-btn:hover {
          border-color: rgba(255,60,0,0.5);
          background: rgba(255,60,0,0.05);
          transform: scale(1.05);
        }
        .hero-secondary-btn:focus-visible {
          outline: 2px solid #ff3c00;
          outline-offset: 3px;
        }
      `}</style>

      <section
        role="banner"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          overflow: "hidden",
          background: "#030303",
        }}
      >
        {/* ── Backgrounds ── */}
        <div
          style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}
          aria-hidden="true"
        >
          <Starfield />

          {/* Orange blob */}
          <div
            className="hero-blob-1"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 600,
              height: 600,
              background: "rgba(255,60,0,0.20)",
              filter: "blur(120px)",
              borderRadius: "50%",
              mixBlendMode: "screen",
            }}
          />
          {/* Blue blob */}
          <div
            className="hero-blob-2"
            style={{
              position: "absolute",
              top: "25%",
              left: "25%",
              width: 400,
              height: 400,
              background: "rgba(59,130,246,0.10)",
              filter: "blur(100px)",
              borderRadius: "50%",
              mixBlendMode: "screen",
            }}
          />
          {/* Purple blob */}
          <div
            className="hero-blob-3"
            style={{
              position: "absolute",
              bottom: "25%",
              right: "25%",
              width: 500,
              height: 500,
              background: "rgba(168,85,247,0.10)",
              filter: "blur(100px)",
              borderRadius: "50%",
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* ── Subtle Grid Overlay ── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.5,
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />

        {/* ── Main Content ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            maxWidth: "64rem",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* Status badge */}
          <FadeUp delay={100}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 15px rgba(255,60,0,0.2)",
                cursor: "default",
              }}
            >
              {/* Pulsing dot */}
              <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
                <span
                  className="hero-ping"
                  style={{ width: "100%", height: "100%" }}
                />
                <span
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#ff3c00",
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "rgba(255,255,255,0.9)",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                System Online
              </span>
            </div>
          </FadeUp>

          {/* Headline */}
          <FadeUp delay={0} style={{ width: "100%" }}>
            <RevealHeadline text={headline} isActive={headlineActive} />
          </FadeUp>

          {/* Subtext */}
          <FadeUp delay={400} style={{ maxWidth: "42rem", margin: "0 auto" }}>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "1.125rem",
                fontWeight: 300,
                lineHeight: 1.75,
                letterSpacing: "0.02em",
                fontFamily: "'JetBrains Mono', monospace",
                margin: 0,
              }}
            >
              {subtextParts.map((part, i) => (
                <span key={i}>
                  {part}
                  {i < subtextParts.length - 1 && (
                    <span
                      className="hero-separator"
                      aria-hidden="true"
                      style={{
                        color: "#ff3c00",
                        margin: "0 12px",
                        display: "inline-block",
                      }}
                    >
                      /
                    </span>
                  )}
                </span>
              ))}
            </p>
          </FadeUp>

          {/* CTA Buttons */}
          <FadeUp delay={600} style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              {/* Primary */}
              <a href="#contact" className="hero-primary-btn" aria-label="Get Free Consultation">
                <div className="hero-shimmer-layer" aria-hidden="true" />
                <div className="btn-gradient-overlay" aria-hidden="true" />
                <span className="btn-label">Get Free Consultation</span>
                <ArrowUpRight className="btn-arrow" />
              </a>

              {/* Secondary */}
              <a href="#services" className="hero-secondary-btn">
                View Portfolio
              </a>
            </div>
          </FadeUp>
        </div>

      </section>
    </>
  );
}