import React from "react";
import Hero from "./Components/HeroSection";
import ClientMarquee from "./Components/ClientMarquee";
import StatsMarquee from "./Components/StatsMarquee";
import HomeSections from "./Components/HomeSections";
import HomeIntroSection from "./Components/HomeIntroSection";
import FaqSection from "./it-company-in-patna/components/FaqSection";
import {
  buildOrganizationSchema,
  buildLocalBusinessSchema,
  buildProfessionalServiceSchema,
  buildWebSiteSchema,
  buildWebPageSchema,
  buildServiceSchema,
  buildFAQPageSchema,
  buildBreadcrumbListSchema,
  buildItemListSchema,
  buildAggregateRatingSchema,
  buildReviewSchema,
  toGraphSchema
} from "./lib/schemas";

/* ── FAQ data (defined server-side, passed as prop to client component) ── */
const homeFaqs = [
  {
    question: "Why is Webflora Technologies considered the top software development company in Patna?",
    answer: "Webflora Technologies is considered the top software company in Patna, Bihar, due to our dedication to high-performance custom code, premium tailor-made designs, and completely transparent flat-rate pricing. We design secure, search-optimized web systems and mobile applications that scale alongside your company, providing 100% source code ownership.",
    icon: "lucide:award"
  },
  {
    question: "What digital services do you provide?",
    answer: "We provide a complete suite of premium digital services: custom enterprise software (ERP/CRM), high-converting website development, native and cross-platform mobile app development, custom AI workflows, and targeted performance digital marketing. Our Patna-based team designs each solution from scratch to match your specific business workflows and scale seamlessly.",
    icon: "lucide:layers"
  },
  {
    question: "Do you offer custom AI and automation integrations?",
    answer: "Yes, we build custom workflow automations and advanced AI integration pipelines using platforms like n8n and modern LLM frameworks (OpenAI, Claude). Our automation solutions eliminate repetitive tasks, resolve manual bottlenecks, and enable your business to run efficiently 24/7 with zero downtime.",
    icon: "lucide:trending-up"
  },
  {
    question: "Why should my business choose Webflora Technologies over off-the-shelf software?",
    answer: "Choosing Webflora Technologies guarantees full source code ownership, founder-led engineering execution, and high-performance custom builds with zero recurring per-user monthly licensing fees. We ensure your custom software aligns perfectly with your specific business rules, avoiding the rigid constraints and high costs of off-the-shelf products.",
    icon: "lucide:check-circle"
  },
  {
    question: "Do you support startups and local businesses in Bihar?",
    answer: "Yes, we partner closely with local startups, clinics, institutes, and businesses in Patna, Muzaffarpur, Gaya, and across Bihar, helping them digitize operations and grow their online presence.",
    icon: "lucide:users"
  },
  {
    question: "Do you provide long-term technical support?",
    answer: "Absolutely. We offer complete post-launch support including server management, regular security updates, local SEO health checks, and feature scaling support for all our custom builds.",
    icon: "lucide:headset"
  }
];

/* ── Root Page — Server Component ── */
export default function Page() {
  return (
    <>
      {/* ── Above the fold — statically server-rendered ── */}
      <Hero />

      {/* Client Marquee - logo slider */}
      <ClientMarquee />

      {/* ── SEO introduction section — statically server-rendered ── */}
      <HomeIntroSection />

      {/* ── Marquee — static, no JS hydration needed ── */}
      <StatsMarquee />

      {/* ── All viewport-gated client sections ── */}
      <HomeSections
        homeFaqs={homeFaqs}
        faqComponent={
          <FaqSection faqs={homeFaqs} title="home" />
        }
      />

      {/* ── JSON-LD Schemas — server-rendered for SEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toGraphSchema([
              buildOrganizationSchema(),
              buildLocalBusinessSchema(),
              buildProfessionalServiceSchema(),
              buildWebSiteSchema(),
              buildWebPageSchema({
                name: "Software Company in Patna, Bihar | Webflora Technologies",
                description: "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software, website development, mobile apps, and digital marketing.",
                url: "https://webfloratechnologies.com"
              }),
              buildServiceSchema({
                name: "Software Development Services",
                serviceType: "Custom Software & Web Development",
                description: "High-performance custom software, website, mobile app development, and AI automation workflows."
              }),
              buildFAQPageSchema(homeFaqs),
              buildBreadcrumbListSchema([{ name: "Home", url: "/" }]),
              buildItemListSchema([
                { name: "Website Development Patna", url: "/website-development-patna" },
                { name: "Mobile App Development Patna", url: "/mobile-app-development-patna" },
                { name: "Software Development Patna", url: "/software-company-patna" },
                { name: "AI Automation Patna", url: "/ai-chatbot-development-patna" },
                { name: "Digital Marketing Patna", url: "/digital-marketing-patna" }
              ]),
              {
                ...buildLocalBusinessSchema(),
                aggregateRating: buildAggregateRatingSchema({ ratingValue: 4.9, reviewCount: 68 })
              },
              buildReviewSchema({
                authorName: "Anand Prakash",
                reviewRating: 5,
                reviewBody: "Webflora Technologies delivered an outstanding web solution for our enterprise. Highly recommended engineering team in Bihar!"
              })
            ])
          )
        }}
      />
    </>
  );
}
