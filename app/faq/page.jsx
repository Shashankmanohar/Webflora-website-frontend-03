"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "../Components/ContactSection";

const faqData = {
  website: {
    title: "Website Dev",
    icon: "solar:code-bold-duotone",
    faqs: [
      {
        question: "How much does a website cost in Patna?",
        answer: "At Webflora Technologies, our custom basic website package starts from ₹25,000. E-commerce systems, custom portals, and enterprise-grade web applications are priced based on the number of features, API integrations, database complexity, and design requirements.",
        icon: "lucide:dollar-sign"
      },
      {
        question: "Which is the best website company in Bihar?",
        answer: "Webflora Technologies is considered a top-rated website development company in Bihar. We are an MSME-registered (UDYAM-BR-26-0183379) professional agency offering custom, sub-second loading Next.js and React web architectures with zero slow templates, solid local SEO, and full source code ownership.",
        icon: "lucide:award"
      },
      {
        question: "How long does website development take?",
        answer: "A standard corporate or landing page typically takes 2 to 4 weeks. E-commerce platforms and custom database portals generally take 4 to 8 weeks, while complex enterprise web systems may span 8 to 12 weeks from planning to final deployment.",
        icon: "lucide:calendar"
      },
      {
        question: "Do you build SEO-friendly websites?",
        answer: "Yes, all our websites are engineered with technical SEO best practices. This includes semantic HTML5 layouts, optimized meta tags, automated XML sitemaps, JSON-LD schema markup, fast loading speeds, and responsive design to rank on Google.",
        icon: "lucide:search"
      },
      {
        question: "Do you provide website maintenance?",
        answer: "Yes, we offer monthly and annual maintenance support. This covers regular off-site backups, security patching, library updates, content revisions, server health monitoring, and minor feature additions to keep your system active.",
        icon: "lucide:settings"
      },
      {
        question: "Can I rank my business on Google?",
        answer: "Yes. By building a fast, structured, mobile-responsive website and integrating localized keyword targeting, schema markup, and optimized business profiles, you can rank your business on Google Search and Maps.",
        icon: "lucide:trending-up"
      },
      {
        question: "What technologies do you use?",
        answer: "We build using Next.js, React, Tailwind CSS, Node.js, Express, Python, PostgreSQL, MongoDB, and AWS to deliver high-performance, robust, and secure web solutions.",
        icon: "lucide:code"
      },
      {
        question: "Will my website look good on mobile?",
        answer: "Yes. Every website we build is 100% mobile-responsive, utilizing flexible grid frameworks so that layout elements render perfectly on all devices, from small smartphones to wide desktop monitors.",
        icon: "lucide:smartphone"
      },
      {
        question: "Do I get complete ownership of the source code?",
        answer: "Yes, we provide full source code ownership and repository access once the project is completed and final payments are cleared.",
        icon: "lucide:key"
      },
      {
        question: "Do you provide domain registration and cloud hosting?",
        answer: "Yes, we assist in domain registration and set up cloud hosting on secure providers like AWS, Vercel, Hostinger, or custom VPS containers depending on your project needs.",
        icon: "lucide:cloud"
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Yes, we redesign legacy websites to update old UI/UX layouts, improve page loading speed, update security configurations, and implement mobile-first styling.",
        icon: "lucide:refresh-cw"
      },
      {
        question: "Do you develop e-commerce websites with payment gateways?",
        answer: "Yes, we build secure, fully-featured e-commerce stores with payment gateway integrations (Razorpay, Stripe), product catalogs, secure checkout steps, and admin inventory dashboards.",
        icon: "lucide:shopping-cart"
      },
      {
        question: "What is the difference between custom development and WordPress?",
        answer: "Custom React/Next.js development provides faster load speeds, better security, lower server costs, and unlimited layout flexibility. WordPress is a generic template platform that is easier for non-technical edits but suffers from slower speeds and plugin security risks.",
        icon: "lucide:zap"
      },
      {
        question: "Do you write content for the website?",
        answer: "We can assist with SEO copywriting, keyword optimization, and professional content creation tailored to your industry to help improve search rankings.",
        icon: "lucide:pen-tool"
      },
      {
        question: "Can you integrate third-party APIs into my site?",
        answer: "Yes, we can integrate any third-party REST or GraphQL APIs, such as CRM systems, SMS gateways, WhatsApp APIs, payment portals, and ERP pipelines.",
        icon: "lucide:git-merge"
      }
    ]
  },
  software: {
    title: "Software Dev",
    icon: "solar:database-bold-duotone",
    faqs: [
      {
        question: "How much does custom software development cost in Patna?",
        answer: "Custom software systems designed by Webflora Technologies start from ₹1,00,000. The ultimate pricing depends on system architecture complexity, active user counts, security standards, and third-party integrations.",
        icon: "lucide:wallet"
      },
      {
        question: "Is Webflora Technologies a registered company?",
        answer: "Yes, Webflora Technologies is an officially registered Professional Service under the MSME Ministry, Government of India, with registration ID UDYAM-BR-26-0183379. This guarantees extreme structural reliability, standard commercial compliance, and long-term project support.",
        icon: "lucide:file-text"
      },
      {
        question: "How long does it take to develop software?",
        answer: "Development time depends on complexity. Small systems may take 4-8 weeks, while large scalable systems can take several months for a full rollout and integration.",
        icon: "lucide:clock"
      },
      {
        question: "Can you upgrade existing software?",
        answer: "Yes, Webflora Technologies can improve, upgrade, or rebuild existing legacy systems to match current business needs using modern SaaS architecture and cloud-native solutions.",
        icon: "lucide:cpu"
      },
      {
        question: "Why is Webflora Technologies the best custom software development company in Patna?",
        answer: "We provide tailored, secure, and scalable enterprise-grade software solutions using modern tech stacks, ensuring that your business operations are fully automated and data-driven.",
        icon: "lucide:check-circle"
      },
      {
        question: "How much does AI automation implementation cost in Patna?",
        answer: "At Webflora Technologies, custom n8n workflow integrations and AI chatbot automations start from ₹45,000. Custom enterprise solutions involving custom LLM fine-tuning or heavy data parsing are quoted after thorough process mapping.",
        icon: "lucide:coins"
      },
      {
        question: "Do you specialize in n8n and WhatsApp automation?",
        answer: "Yes, we are the leading AI automation company in Patna specializing in n8n workflows and official WhatsApp Business API setups. We build highly efficient, cost-effective automation systems that avoid expensive recurring software fees.",
        icon: "lucide:message-square"
      },
      {
        question: "What is n8n vs Zapier and why choose n8n?",
        answer: "While Zapier charges high monthly fees per task call, n8n is an open-source alternative that we host on your own serverless cloud. This allows you to run millions of automated tasks at a fraction of the cost, making it highly cost-effective.",
        icon: "lucide:arrow-right-left"
      },
      {
        question: "What is RAG vs Fine-tuning for AI chatbots?",
        answer: "Fine-tuning updates the neural parameters of an AI model to learn styles, whereas RAG (Retrieval-Augmented Generation) connects the AI to a dynamic document database (like your PDFs or FAQs) in real time to fetch accurate answers without hallucinations.",
        icon: "lucide:brain"
      },
      {
        question: "What is the difference between an AI Chatbot and Live Chat?",
        answer: "Live Chat requires an active human representative to type answers. An AI Chatbot responds instantly 24/7, auto-qualifying leads and answering FAQs, routing to a human agent only when needed.",
        icon: "lucide:help-circle"
      },
      {
        question: "What are some real-world AI Workflow Examples?",
        answer: "Examples include: (1) Automatically reading incoming PDF invoices and saving data to Google Sheets. (2) Sending custom WhatsApp confirmation alerts when someone fills out a contact form. (3) Grabbing and grading leads from Facebook Ads and saving them straight to your CRM.",
        icon: "lucide:play"
      },
      {
        question: "How can AI automation help my business?",
        answer: "AI automation helps businesses save time, reduce manual workload, improve customer response speed, automate operations, increase efficiency, and streamline workflow management.",
        icon: "lucide:activity"
      },
      {
        question: "Do you build AI chatbots for websites and WhatsApp?",
        answer: "Yes, we develop AI-powered chatbots for websites, WhatsApp, and business platforms to automate customer support, lead generation, and communication processes.",
        icon: "lucide:bot"
      },
      {
        question: "Can small businesses use AI automation?",
        answer: "Yes, AI automation is highly beneficial for startups and small businesses because it improves operational efficiency, automates repetitive tasks, and reduces manual dependency.",
        icon: "lucide:users"
      },
      {
        question: "What types of business processes can be automated?",
        answer: "We automate customer support, lead management, CRM workflows, appointment booking, email communication, internal approvals, data entry, reporting systems, and operational workflows.",
        icon: "lucide:layers"
      }
    ]
  },
  mobile: {
    title: "Mobile Apps",
    icon: "solar:iphone-bold-duotone",
    faqs: [
      {
        question: "How much does mobile app development cost in Patna Bihar?",
        answer: "At Webflora Technologies, basic hybrid mobile app packages using Flutter or React Native start from ₹80,000. Advanced applications featuring real-time tracking, chat engines, or custom AI integrations are quoted based on technical requirements.",
        icon: "lucide:wallet"
      },
      {
        question: "Do you develop apps for both Android and iOS?",
        answer: "Yes, we develop applications for Android and iOS platforms using technologies like React Native, Flutter, Kotlin, and Swift to ensure smooth cross-platform performance.",
        icon: "lucide:smartphone"
      },
      {
        question: "Do you deploy the applications to Google Play and Apple App Store?",
        answer: "Yes, we handle the entire launch cycle—from technical code optimization and App Store Optimization (ASO) to official deployment and approval on both Apple App Store and Google Play Store.",
        icon: "lucide:upload-cloud"
      },
      {
        question: "Which framework is better: Flutter or React Native?",
        answer: "Both Flutter and React Native are excellent cross-platform frameworks. The best choice depends on project goals, performance requirements, scalability, and feature complexity.",
        icon: "lucide:git-pull-request"
      },
      {
        question: "How long does mobile app development take?",
        answer: "Development timelines depend on app complexity, features, integrations, and UI/UX requirements. Most business applications take between 6 to 16 weeks for development and deployment.",
        icon: "lucide:clock"
      },
      {
        question: "Can you build ecommerce mobile apps?",
        answer: "Yes, we develop ecommerce applications with payment integration, inventory management, order tracking, push notifications, and scalable backend systems for online businesses.",
        icon: "lucide:shopping-bag"
      },
      {
        question: "Will my app be scalable in the future?",
        answer: "Yes, all applications are developed using scalable architecture and modern frameworks to support future feature upgrades, higher traffic, and long-term business growth.",
        icon: "lucide:trending-up"
      },
      {
        question: "Can you rebuild an existing website as a mobile app?",
        answer: "Yes, we can leverage your existing backend APIs or build a fresh wrapper database to launch a mobile app that syncs data with your current website in real time.",
        icon: "lucide:repeat"
      },
      {
        question: "Do your mobile apps support push notifications?",
        answer: "Yes, we integrate Firebase Cloud Messaging (FCM) to trigger instant push notifications for promotions, updates, chats, and user alerts.",
        icon: "lucide:bell"
      },
      {
        question: "What backend technologies do you use for mobile apps?",
        answer: "We develop reliable APIs using Node.js, Express, MongoDB, PostgreSQL, Firebase, or cloud VPS containers on AWS to manage app data.",
        icon: "lucide:server"
      },
      {
        question: "Can your mobile apps work offline?",
        answer: "Yes, we implement offline database caching using SQLite, Hive, or WatermelonDB so users can read data and perform tasks offline, syncing automatically once reconnected.",
        icon: "lucide:wifi-off"
      },
      {
        question: "How do you handle app security and user data privacy?",
        answer: "We secure connections using HTTPS, implement data encryption, support OAuth/social logins, and enforce strict user permission levels to safeguard data.",
        icon: "lucide:lock"
      },
      {
        question: "Do we get regular updates during app development?",
        answer: "Yes, we schedule weekly demo playbacks and provide test APKs or TestFlight releases so you can interact with the app's progress.",
        icon: "lucide:check-circle"
      },
      {
        question: "Do you offer post-launch support and store updates?",
        answer: "Yes, our maintenance SLAs cover OS update compliance checks, bug patches, server upkeep, and regular listings maintenance.",
        icon: "lucide:headset"
      },
      {
        question: "Can you integrate biometric authentication (Face ID/Fingerprint)?",
        answer: "Yes, we implement local authentication APIs to enable Face ID, Touch ID, and fingerprint scanning for secure and fast logins.",
        icon: "lucide:fingerprint"
      }
    ]
  },
  marketing: {
    title: "Digital Marketing",
    icon: "solar:ranking-bold-duotone",
    faqs: [
      {
        question: "How much do digital marketing services cost in Patna Bihar?",
        answer: "At Webflora Technologies, our customized performance marketing and local SEO growth plans start from ₹15,000 per month. The pricing depends on target ad budget, keyword competition, and campaign complexity.",
        icon: "lucide:wallet"
      },
      {
        question: "How long does local SEO take to show organic results?",
        answer: "Local SEO map ranking and organic search engine listings usually take 2 to 4 months to yield substantial traffic and phone calls in Patna, Bihar, depending on industry search competition.",
        icon: "lucide:clock"
      },
      {
        question: "Which is better: SEO or paid ads?",
        answer: "Both have benefits. SEO is long-term organic growth, while paid ads provide immediate lead conversions. A combination ensures maximum ROAS and lead generation.",
        icon: "lucide:bar-chart-3"
      },
      {
        question: "Do you provide social media marketing?",
        answer: "Yes, we manage social media platforms to increase brand awareness, community engagement, and run target paid social campaigns.",
        icon: "lucide:share-2"
      },
      {
        question: "How do you generate leads?",
        answer: "We use a mix of local SEO, Google ads, social campaigns, landing page conversion designs, and automated lead responders to capture clients.",
        icon: "lucide:target"
      },
      {
        question: "Can digital marketing work for small businesses?",
        answer: "Absolutely. Digital marketing is highly effective for small businesses to increase visibility, compete with larger entities, and dominate their local geographic area.",
        icon: "lucide:check-circle"
      },
      {
        question: "What is the Google Local 3-Pack and why does it matter?",
        answer: "The Local 3-Pack is the boxed section at the top of Google search pages showing the top three local business listings. Securing a spot here captures over 50% of local service clicks.",
        icon: "lucide:map-pin"
      },
      {
        question: "Do you manage Google Ads (PPC) campaigns?",
        answer: "Yes, we research keywords, write ad copies, design landing pages, manage bidding budgets, and track conversions to optimize search campaigns.",
        icon: "lucide:google"
      },
      {
        question: "Do you set up tracking tools like Google Analytics?",
        answer: "Yes, we install Google Analytics 4 (GA4), Search Console, and Meta Pixel on your site to track traffic, conversions, and visitor behaviors.",
        icon: "lucide:gauge"
      },
      {
        question: "Do you run Hindi language advertisements for Bihar markets?",
        answer: "Yes, we design localized Hindi, English, and Hinglish ad copy to match regional dialects and raise brand familiarity among Bihar consumers.",
        icon: "lucide:languages"
      },
      {
        question: "What is on-page SEO vs off-page SEO?",
        answer: "On-page SEO covers optimizations done directly on your site (content, speed, headers, schema tags). Off-page SEO covers external actions (acquiring backlinks, map pack listings, social shares).",
        icon: "lucide:layers"
      },
      {
        question: "Can you help remove negative Google Business reviews?",
        answer: "We cannot directly delete reviews, but we help you report illegitimate reviews violating Google's terms and establish campaigns to secure positive customer reviews.",
        icon: "lucide:trash-2"
      },
      {
        question: "Do you handle graphic design for social media marketing?",
        answer: "Yes, our creative designers craft custom social graphics, vector banners, ad layouts, and product mockups tailored for your brand guidelines.",
        icon: "lucide:palette"
      },
      {
        question: "How often do you send performance reports?",
        answer: "We send comprehensive campaign reports bi-weekly and monthly, highlighting keyword ranks, click rates, ad spend, and conversion volumes.",
        icon: "lucide:file-text"
      },
      {
        question: "Do you guarantee top organic ranking on Google?",
        answer: "No reputable agency guarantees #1 rankings due to search algorithm shifts. However, we guarantee strict execution of best practices which consistently elevates organic ranks.",
        icon: "lucide:alert-triangle"
      }
    ]
  },
  optimization: {
    title: "SE, GEO & AEO",
    icon: "solar:graph-bold-duotone",
    faqs: [
      {
        question: "What is Search Engine Optimization (SEO/SE)?",
        answer: "Search Engine Optimization (SEO or SE) is the technical and creative process of optimizing your website to rank higher in traditional search engines like Google and Bing. It focuses on crawling, indexing, keyword relevancy, high-quality backlinks, and site speed to capture organic user searches.",
        icon: "lucide:search"
      },
      {
        question: "How do Page Load Speeds and Core Web Vitals affect search rankings?",
        answer: "Google uses Core Web Vitals (LCP, FID/INP, CLS) as direct ranking factors. If a site takes longer than 3 seconds to load on mobile 4G networks, bounce rates spike, and Google downranks the page. We use Next.js and Tailwind to build websites that load in under 1 second, securing higher ranks.",
        icon: "lucide:gauge"
      },
      {
        question: "Why is structural schema markup critical for search engines?",
        answer: "Schema markup (JSON-LD) is structured data added to your website that helps search engine crawlers understand your content context (e.g., LocalBusiness, Service, FAQPage, BreadcrumbList). Correct schemas help your pages stand out with rich snippets in Google SERPs.",
        icon: "lucide:braces"
      },
      {
        question: "What is Generative Engine Optimization (GEO)?",
        answer: "Generative Engine Optimization (GEO) is the practice of optimizing your brand content so that AI search engines and LLM systems (such as ChatGPT Search, Google Gemini, Perplexity, and Claude) cite, reference, and recommend your company when users ask complex conversational questions.",
        icon: "lucide:brain-circuit"
      },
      {
        question: "How do AI search engines decide which sources to cite?",
        answer: "AI models select references based on entity authority, semantic context, direct matches to natural language intents, and unique primary source data. Unlike traditional search engines, AI engines value unique data points, technical accuracy, and structured relational schemas.",
        icon: "lucide:quote"
      },
      {
        question: "How does Webflora optimize content for GEO?",
        answer: "We structure your web assets as a connected knowledge graph. By publishing primary research data, custom case studies, detailed specifications, and deep-dive schema descriptions, we make it easy for generative AI engines to scrape, synthesize, and cite Webflora as an authority.",
        icon: "lucide:network"
      },
      {
        question: "What is Answer Engine Optimization (AEO)?",
        answer: "Answer Engine Optimization (AEO) is a sub-discipline of search marketing focused on optimizing web content to supply direct, immediate answers to query engines, particularly voice assistants like Google Assistant, Apple Siri, Amazon Alexa, and smart speaker devices.",
        icon: "lucide:mic"
      },
      {
        question: "Why do voice queries require different optimization than text searches?",
        answer: "Voice queries are generally conversational, longer, phrased as complete questions (who, what, where, how), and expect a single, clear, verbal answer. Traditional SEO targets short phrases, while AEO targets direct, highly-structured question-answer units.",
        icon: "lucide:message-square-code"
      },
      {
        question: "How do we implement AEO for local businesses?",
        answer: "We incorporate Speakable Schema markup, write concise direct answers in our FAQ sections, format content with clear header tags (H2/H3), and keep local Name, Address, and Phone (NAP) details perfectly uniform across the web to capture localized 'near me' voice queries.",
        icon: "lucide:map-pin"
      },
      {
        question: "What is the main difference between SEO and GEO?",
        answer: "Traditional SEO focuses on links, page structures, and keyword density to rank websites in static lists. GEO focuses on conversational understanding, conceptual associations, and information synthesis to secure citations in AI-generated search layouts.",
        icon: "lucide:info"
      },
      {
        question: "Does traditional search engine optimization help GEO rankings?",
        answer: "Yes, traditional SEO fundamentals like fast loading speeds, indexable URLs, clear content formatting, and entity authority are baseline prerequisites for AI models to discover and synthesize your content.",
        icon: "lucide:check-circle"
      },
      {
        question: "What is Speakable Schema and how does it relate to AEO?",
        answer: "Speakable Schema is a structural data element that identifies sections of your webpage content (like paragraphs or answers) that are particularly suitable for text-to-speech conversion by voice engines.",
        icon: "lucide:volume-2"
      },
      {
        question: "How do AI search engines handle local near-me search queries?",
        answer: "AI search engines cross-reference local directories, business profiles, and customer reviews to synthesize direct, conversational recommendations for geographic queries.",
        icon: "lucide:navigation"
      },
      {
        question: "What types of businesses benefit most from AEO?",
        answer: "Service providers (plumbers, doctors, web development companies), transactional websites, and local businesses where customers ask direct questions ('Where is the nearest IT company?') benefit most.",
        icon: "lucide:check"
      },
      {
        question: "Will GEO replace traditional SEO completely?",
        answer: "GEO will not replace SEO, but rather expand it. Users will continue using traditional search lists for general browsing, while increasingly using AI search engines for complex synthesis and direct answers.",
        icon: "lucide:refresh-cw"
      }
    ]
  }
};

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("website");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const currentCategory = faqData[activeCategory];
  
  // Aggregate all FAQs for Schema markup
  const allFaqs = Object.values(faqData).flatMap(cat => cat.faqs);

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#FF3B00] pt-24 overflow-hidden">
      {/* JSON-LD Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "Webflora Technologies Core Services FAQ | SE, GEO, and AEO Guide",
            "description": "Get answers to frequently asked questions about custom website development, software engineering, mobile apps, digital marketing, and advanced AI engine optimization.",
            "mainEntity": allFaqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://webfloratechnologies.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "FAQ",
                "item": "https://webfloratechnologies.com/faq"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-black border-b border-white/5">
        <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-[#FF3B00] font-black tracking-[0.25em] uppercase text-xs">Help Desk & Resource Hub</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-extrabold">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Find immediate answers regarding our custom development frameworks, mobile app structures, digital growth strategies, and modern SEO/GEO architectures.
          </p>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-12 px-6 bg-[#050505] relative">
        <div className="max-w-5xl mx-auto">
          {/* Category Switcher */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {Object.entries(faqData).map(([key, category]) => (
              <button
                key={key}
                onClick={() => { setActiveCategory(key); setExpandedIndex(null); }}
                className={`px-5 py-3 rounded-full font-bold text-xs md:text-sm tracking-wide transition-all duration-300 flex items-center gap-2 uppercase border ${
                  activeCategory === key
                    ? "bg-[#FF3B00] border-[#FF3B00] text-black shadow-[0_0_20px_rgba(255,59,0,0.3)]"
                    : "bg-zinc-900/50 border-white/5 text-gray-400 hover:text-white hover:border-white/10"
                }`}
              >
                <Icon icon={category.icon} className="text-base md:text-lg" />
                {category.title}
              </button>
            ))}
          </div>

          {/* Accordions */}
          <div className="space-y-4 min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {currentCategory.faqs.map((faq, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border transition-all duration-500 overflow-hidden ${isExpanded
                        ? "border-[#FF3B00] bg-white/[0.02] shadow-[0_0_40px_rgba(255,59,0,0.08)]"
                        : "border-white/5 bg-white/[0.005] hover:border-white/10"
                      }`}
                    >
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${isExpanded ? "bg-[#FF3B00] text-black" : "bg-white/5 text-[#FF3B00]"
                          }`}>
                            <Icon icon={faq.icon} className="text-xl" />
                          </div>
                          <h3 className={`text-base md:text-lg font-bold transition-colors ${isExpanded ? "text-white" : "text-gray-300"
                          }`}>
                            {faq.question}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          className="text-[#FF3B00] shrink-0"
                        >
                          <Icon icon="solar:alt-arrow-down-linear" width={24} />
                        </motion.div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="h-[1px] w-full bg-gradient-to-r from-[#FF3B00]/20 to-transparent mb-4" />
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
