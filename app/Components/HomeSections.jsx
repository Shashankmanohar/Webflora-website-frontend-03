"use client";

/**
 * HomeSections.jsx — Client Component wrapper
 *
 * Next.js 16 prohibits `ssr: false` inside Server Components.
 * This file is a "use client" boundary that owns all viewport-gated
 * dynamic imports. Each section is imported and evaluated only when
 * it is scrolled into view (using IntersectionObserver inside LazySection).
 * This completely avoids initial bundle bloat and preloading issues.
 */

import React from "react";
import LazySection from "./LazySection";

export default function HomeSections({ faqComponent }) {
  return (
    <>
      {/* Trust signals — appear just below the hero fold */}
      <div className="content-auto">
        <LazySection
          height="80px"
          loader={() => import("./GoogleTrustBanner")}
        />
      </div>
      <div className="content-auto">
        <LazySection
          height="600px"
          loader={() => import("./TrustSignals")}
          props={{ hideStats: true }}
        />
      </div>

      {/* Mid-page sections */}
      <div className="content-auto">
        <LazySection
          height="300px"
          loader={() => import("./GrowthSection")}
        />
      </div>
      <div className="content-auto">
        <LazySection
          height="600px"
          loader={() => import("./ServicesDetailShowcase")}
        />
      </div>
      <div className="content-auto">
        <LazySection
          height="400px"
          loader={() => import("./TechStackSection")}
        />
      </div>
      <div className="content-auto">
        <LazySection
          height="500px"
          loader={() => import("./SectorsServedSection")}
        />
      </div>
      <div className="content-auto">
        <LazySection
          height="400px"
          loader={() => import("./ProcessSection")}
        />
      </div>
      <div className="content-auto">
        <LazySection
          height="400px"
          loader={() => import("./ProductCard")}
        />
      </div>
      <div className="content-auto">
        <LazySection
          height="400px"
          loader={() => import("./WorkSection")}
        />
      </div>
      <div className="content-auto">
        <LazySection
          height="400px"
          loader={() => import("./VegavanTeaser")}
        />
      </div>

      {/* Social proof */}
      <div className="content-auto">
        <LazySection
          height="450px"
          loader={() => import("../services/components/TestimonialSection")}
        />
      </div>
      <div className="content-auto">
        <LazySection
          height="350px"
          loader={() => import("./GoogleReviewsSection")}
        />
      </div>

      {/* CTA + FAQ + Contact */}
      <div className="content-auto">
        <LazySection
          height="300px"
          loader={() => import("./PremiumCTA")}
        />
      </div>

      {/* Statically rendered SEO blocks passed from server component */}
      {faqComponent}

      <div className="content-auto">
        <LazySection
          height="500px"
          loader={() => import("./LatestInsights")}
        />
      </div>

      <div className="content-auto">
        <LazySection
          height="500px"
          loader={() => import("./ContactSection")}
        />
      </div>
    </>
  );
}
