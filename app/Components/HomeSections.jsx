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
      {/* 1. Trust signals — appear just below the hero fold */}
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

      {/* 2. Core Capabilities & Services */}
      <div className="content-auto">
        <LazySection
          height="600px"
          loader={() => import("./ServicesDetailShowcase")}
        />
      </div>

      {/* 3. Proof of Capability (Work / Portfolio) */}
      <div className="content-auto">
        <LazySection
          height="400px"
          loader={() => import("./WorkSection")}
        />
      </div>

      {/* 4. Delivery & Process */}
      <div className="content-auto">
        <LazySection
          height="400px"
          loader={() => import("./ProcessSection")}
        />
      </div>

      {/* 5. Tech Stack & Frameworks */}
      <div className="content-auto">
        <LazySection
          height="400px"
          loader={() => import("./TechStackSection")}
        />
      </div>

      {/* 6. Industries & Sectors Served */}
      <div className="content-auto">
        <LazySection
          height="500px"
          loader={() => import("./SectorsServedSection")}
        />
      </div>

      {/* 7. Growth & Performance Stats */}
      <div className="content-auto">
        <LazySection
          height="300px"
          loader={() => import("./GrowthSection")}
        />
      </div>

      {/* 8. Deeper Social Proof (Testimonials & Google Reviews) */}
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

      {/* 9. Value Teaser / Mid-page CTA */}
      <div className="content-auto">
        <LazySection
          height="300px"
          loader={() => import("./PremiumCTA")}
        />
      </div>

      {/* 10. FAQ Component (Statically rendered SEO blocks) */}
      {faqComponent}

      {/* 11. Thought Leadership & Blogs */}
      <div className="content-auto">
        <LazySection
          height="500px"
          loader={() => import("./LatestInsights")}
        />
      </div>

      {/* 12. Final Action / Contact Form */}
      <div className="content-auto">
        <LazySection
          height="500px"
          loader={() => import("./ContactSection")}
        />
      </div>
    </>
  );
}
