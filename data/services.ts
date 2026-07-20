export interface ServiceData {
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  headline: string;
  problemTitle: string;
  problems: string[];
  solutions: string[];
  benefits: { title: string; description: string; icon: string; stat: string; statLabel: string }[];
  process: { title: string; desc: string }[];
  techStack: { name: string; icon: string }[];
  pricing: { name: string; subtitle: string; price: string; period: string; features: string[]; popular: boolean; timeline?: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  "website-development": {
    slug: "website-development",
    name: "Website Development",
    title: "Website Development",
    subtitle: "High-Performance Next.js Web Systems",
    headline: "Custom Website Development Company",
    problemTitle: "Website Performance Bottlenecks",
    problems: [
      "Slow load times causing high user bounce rates and lower search indexing.",
      "Outdated UI/UX that fails to convert high-intent visitors.",
      "Lack of mobile-first responsive layout optimization."
    ],
    solutions: [
      "Lightweight serverless Next.js 15 architectures.",
      "Responsive, clean UI layouts using Tailwind CSS.",
      "Fully integrated technical SEO and Schema markups."
    ],
    benefits: [
      {
        title: "Sub-Second Speeds",
        description: "Achieve perfect Core Web Vitals with static compilation and smart asset delivery.",
        icon: "solar:bolt-linear",
        stat: "<1s",
        statLabel: "Page Load Speed"
      },
      {
        title: "SEO-First Design",
        description: "Semantic HTML and structural schema markup mapped to Google's ranking criteria.",
        icon: "solar:ranking-linear",
        stat: "100%",
        statLabel: "SEO Optimized"
      }
    ],
    process: [
      { title: "Discovery", desc: "Analyzing your business environment and targeting high-value user keywords." },
      { title: "UX Wireframing", desc: "Constructing conversion-centric user flows and layouts." },
      { title: "Engineering", desc: "Writing clean, type-safe code using Next.js, React, and TypeScript." },
      { title: "Deployment", desc: "Launching on secure serverless cloud platforms like Vercel." }
    ],
    techStack: [
      { name: "Next.js 15", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "Framer Motion", icon: "logos:framer" }
    ],
    pricing: [
      {
        name: "Startup Website",
        subtitle: "Best for local business presence",
        price: "₹25,000",
        period: "one-time cost",
        features: [
          "Responsive React/Next.js Layout",
          "5 Core Pages + Contact Form",
          "Standard Local SEO Setup",
          "Sub-1s Page Loading Speed",
          "1 Month Post-Launch Support"
        ],
        popular: false,
        timeline: "7-21 Days"
      },
      {
        name: "Custom E-Commerce",
        subtitle: "Fully featured online storefront",
        price: "₹75,000+",
        period: "based on features",
        features: [
          "Bespoke Product Catalog & Checkout",
          "Razorpay / Stripe Payment Gate",
          "Admin Dashboard & Inventory Control",
          "Advanced SEO & Speed Optimized",
          "3 Months Support SLA"
        ],
        popular: true,
        timeline: "15-30 Days"
      }
    ],
    faqs: [
      {
        question: "How long does custom website development take?",
        answer: "A standard corporate corporate page takes about 2 to 3 weeks, while complex database-connected web portals may take 4 to 8 weeks."
      }
    ]
  },
  "web-design": {
    slug: "web-design",
    name: "Web Design",
    title: "Web Design",
    subtitle: "Stunning, Conversion-Focused UI/UX",
    headline: "Premium Web Design Agency",
    problemTitle: "Weak Visual Identity Issues",
    problems: [
      "Boring cookie-cutter templates that fail to engage users.",
      "Cluttered navigation panels causing low conversion rates.",
      "Lack of clear, high-intent call-to-actions (CTAs)."
    ],
    solutions: [
      "Custom, bespoke Figma UI/UX designs.",
      "Dynamic interactive micro-animations.",
      "Optimized layout hierarchy for visual priority."
    ],
    benefits: [
      {
        title: "High Engagement",
        description: "Tailored UI patterns that guide users seamlessly to contact and buy pages.",
        icon: "solar:star-linear",
        stat: "2.5x",
        statLabel: "Engagement Lift"
      },
      {
        title: "Brand Authority",
        description: "Bespoke graphics, custom fonts, and color harmonies that match your business values.",
        icon: "solar:medal-ribbon-linear",
        stat: "Top-Tier",
        statLabel: "Visual Class"
      }
    ],
    process: [
      { title: "Brand Identity Analysis", desc: "Understanding corporate goals, brand colors, and style directions." },
      { title: "UI Mockups", desc: "Creating high-fidelity UI visual design boards in Figma." },
      { title: "Interactive Prototypes", desc: "Simulating user clicks and micro-animations to align user flows." }
    ],
    techStack: [
      { name: "Figma", icon: "logos:figma" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Framer Motion", icon: "logos:framer" },
      { name: "Illustrator", icon: "logos:adobe-illustrator" },
      { name: "Photoshop", icon: "logos:adobe-photoshop" },
      { name: "Spline 3D", icon: "logos:spline" }
    ],
    pricing: [
      {
        name: "Premium UI Design",
        subtitle: "Figma layouts & design systems",
        price: "₹18,000",
        period: "one-time",
        features: ["Bespoke Layout Mockups", "Full Desktop & Mobile Grid Design", "Interactive User Flows", "UI Assets Handover"],
        popular: false,
        timeline: "5-10 Days"
      },
      {
        name: "Enterprise Brand System",
        subtitle: "Figma design system specs",
        price: "₹35,000+",
        period: "based on screens",
        features: [
          "Complete Custom UI Design System",
          "Figma Interactive Prototypes",
          "Custom Vector Illustrations",
          "Desktop & Mobile Responsive Grid",
          "Full Assets Handover"
        ],
        popular: true,
        timeline: "10-20 Days"
      }
    ],
    faqs: [
      {
        question: "Do you design websites before writing code?",
        answer: "Yes, we create fully interactive prototypes in Figma for your approval before writing a single line of code."
      }
    ]
  },
  "app-development": {
    slug: "app-development",
    name: "Mobile App Development",
    title: "Mobile App Development",
    subtitle: "High-Performance Cross-Platform Apps",
    headline: "Mobile App Development Company",
    problemTitle: "Mobile Experience Gaps",
    problems: [
      "Sluggish web views masquerading as mobile applications.",
      "Maintaining two native codebases increasing costs and delays.",
      "Poor offline performance and synchronization bugs."
    ],
    solutions: [
      "Cross-platform Flutter or React Native frameworks.",
      "Sub-second native-level rendering speeds.",
      "Secure offline databases and real-time syncing pipelines."
    ],
    benefits: [
      {
        title: "Build Once, Run Everywhere",
        description: "Single code base for both iOS and Android platforms, cutting maintenance costs in half.",
        icon: "solar:smartphone-linear",
        stat: "2-in-1",
        statLabel: "iOS & Android"
      },
      {
        title: "60FPS Animations",
        description: "Buttery-smooth UI transitions that match the speed of fully native layouts.",
        icon: "solar:flash-linear",
        stat: "60 FPS",
        statLabel: "Rendering Performance"
      }
    ],
    process: [
      { title: "Specs Definition", desc: "Mapping out exact screen hierarchies, API endpoints, and user actions." },
      { title: "UI Mockups", desc: "Designing responsive layouts matching phone ratios." },
      { title: "App Engineering", desc: "Coding high-quality components with Flutter or React Native." },
      { title: "Store Optimization", desc: "Deploying and optimizing lists on Google Play and Apple App Store." }
    ],
    techStack: [
      { name: "Flutter", icon: "logos:flutter" },
      { name: "React Native", icon: "logos:react" },
      { name: "Firebase", icon: "logos:firebase" },
      { name: "Swift", icon: "logos:swift" },
      { name: "Kotlin", icon: "logos:kotlin-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" }
    ],
    pricing: [
      {
        name: "MVP Mobile App",
        subtitle: "Build to validate your app idea",
        price: "₹80,000",
        period: "one-time cost",
        features: [
          "Flutter or React Native UI",
          "Auth (Email/OTP) & User Profile",
          "Clean Firebase/Node API Backend",
          "App Store & Google Play Setup",
          "30 Days Launch Warranty"
        ],
        popular: false,
        timeline: "20-45 Days"
      },
      {
        name: "Custom Enterprise App",
        subtitle: "Heavy database custom mobile app",
        price: "₹1,80,000+",
        period: "based on specs",
        features: [
          "Bespoke Design System Integration",
          "Role-Based Admin Dashboards",
          "Real-Time Notifications & Chats",
          "AWS VPS Backend Configuration",
          "6 Months Maintenance Contract"
        ],
        popular: true,
        timeline: "35-60 Days"
      }
    ],
    faqs: [
      {
        question: "Do you publish our mobile app to the app stores?",
        answer: "Yes, we handle the complete deployment cycle, including review compliance and App Store Optimization (ASO) for both Google Play and Apple App Store."
      }
    ]
  },
  "software-development": {
    slug: "software-development",
    name: "Custom Software Development",
    title: "Custom Software Development",
    subtitle: "Tailored Business Automation Systems",
    headline: "Custom Software Development Company",
    problemTitle: "Operational Inefficiencies",
    problems: [
      "Manual data entry leading to high errors and staffing costs.",
      "Disconnected desktop apps failing to sync records.",
      "Vulnerable software databases exposing sensitive commercial data."
    ],
    solutions: [
      "Secure cloud-native software systems.",
      "RESTful API architectures for smooth data exchange.",
      "Advanced role-based permission locks."
    ],
    benefits: [
      {
        title: "100% Custom Logic",
        description: "Built strictly to mirror your actual business workflows without licensing constraints.",
        icon: "solar:code-linear",
        stat: "Bespoke",
        statLabel: "Workflows"
      },
      {
        title: "Data Protection",
        description: "TLS/SSL transfers, hidden proxy endpoints, and sanitized query databases.",
        icon: "solar:shield-keyhole-linear",
        stat: "Enterprise",
        statLabel: "Security Rating"
      }
    ],
    process: [
      { title: "Workflow Mapping", desc: "Documenting every operational step and database link." },
      { title: "Database Architecture", desc: "Designing scalable relational databases (PostgreSQL/MySQL)." },
      { title: "API Development", desc: "Writing fast middleware APIs (Node.js/Python/Go)." }
    ],
    techStack: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "AWS Cloud", icon: "logos:aws" },
      { name: "Python", icon: "logos:python" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Go Lang", icon: "logos:go" }
    ],
    pricing: [
      {
        name: "SaaS Starter",
        subtitle: "Bespoke web application build",
        price: "₹1,20,000",
        period: "one-time cost",
        features: [
          "Next.js Dashboard UI Portal",
          "Database Integration (Postgre/Mongo)",
          "Auth and User Roles Controls",
          "Standard Payment Webhook/Stripe",
          "3 Months System SLA"
        ],
        popular: false,
        timeline: "15-30 Days"
      },
      {
        name: "Custom Enterprise Suite",
        subtitle: "Full CRM / ERP workflow software",
        price: "₹2,50,000+",
        period: "custom scope",
        features: [
          "Bespoke Cloud Pipeline Structure",
          "Multi-Tenant Database Scaling",
          "Autonomous Automation (n8n APIs)",
          "Dedicated Staging Environments",
          "12 Months Maintenance SLA"
        ],
        popular: true,
        timeline: "30-60 Days"
      }
    ],
    faqs: [
      {
        question: "Do we get full source code ownership?",
        answer: "Yes, once final payments are cleared, we hand over complete source code ownership and repository access."
      }
    ]
  },
  "ai-chatbot-development": {
    slug: "ai-chatbot-development",
    name: "AI Chatbot Development",
    title: "AI Chatbot Development",
    subtitle: "24/7 Intelligent Support Agents",
    headline: "AI Chatbot Development Services",
    problemTitle: "Customer Support Delays",
    problems: [
      "Leaking high-intent leads during off-hours when staff are offline.",
      "Repetitive, basic support questions wasting support team hours.",
      "Inconsistent client responses hurting brand reputation."
    ],
    solutions: [
      "Context-aware AI chatbots using LLM models.",
      "Custom system prompts trained on company documentation.",
      "Direct CRM integrations for automated lead capture."
    ],
    benefits: [
      {
        title: "Instant Responses",
        description: "Zero wait times for clients asking about services, pricing, or orders.",
        icon: "solar:chat-line-linear",
        stat: "Instant",
        statLabel: "Response Time"
      },
      {
        title: "Lead Harvesting",
        description: "Qualifies prospects dynamically, collecting email and phone data automatically.",
        icon: "solar:user-plus-linear",
        stat: "+80%",
        statLabel: "Leads Captured"
      }
    ],
    process: [
      { title: "Knowledge Extraction", desc: "Collating company FAQs, documentation, and pricing sheets." },
      { title: "LLM Fine-Tuning", desc: "Configuring system prompts and guardrails for brand safety." },
      { title: "Widget Integration", desc: "Deploying chat UI widgets on your website and WhatsApp channels." }
    ],
    techStack: [
      { name: "OpenAI API", icon: "logos:openai-icon" },
      { name: "LangChain", icon: "logos:langchain-icon" },
      { name: "n8n Automation", icon: "logos:n8n-icon" },
      { name: "Pinecone DB", icon: "logos:pinecone-icon" },
      { name: "Flowise AI", icon: "logos:flowise" },
      { name: "Python", icon: "logos:python" }
    ],
    pricing: [
      {
        name: "AI Chatbot Starter",
        subtitle: "Smart automated responder setup",
        price: "₹45,000",
        period: "one-time cost",
        features: [
          "WhatsApp & Web Chatbot Flows",
          "Custom Knowledge Base Sync",
          "Lead Capture Integration",
          "Basic Analytics Dashboard",
          "30 Days Tweak Guarantee"
        ],
        popular: false,
        timeline: "10-20 Days"
      },
      {
        name: "Enterprise AI Agent",
        subtitle: "Autonomous workflows & LLMs",
        price: "₹1,50,000+",
        period: "custom scope",
        features: [
          "Multi-Agent Orchestration (n8n)",
          "Private LLM/RAG Architecture",
          "Internal ERP/CRM API Sync",
          "Ongoing Conversation Audits",
          "Priority SLA Maintenance Support"
        ],
        popular: true,
        timeline: "20-40 Days"
      }
    ],
    faqs: [
      {
        question: "Can the chatbot run on WhatsApp?",
        answer: "Yes, we integrate our AI agents with WhatsApp Cloud API to handle conversations directly on mobile phones."
      }
    ]
  },
  "erp-development": {
    slug: "erp-development",
    name: "ERP Development",
    title: "ERP Development",
    subtitle: "Complete Enterprise Operations Control",
    headline: "Custom ERP Development Company",
    problemTitle: "Siloed Operations Chaos",
    problems: [
      "Departments working on different sheets, leading to data mismatches.",
      "Lack of real-time inventory visibility causing stockouts.",
      "Manual billing delays delaying cash flows."
    ],
    solutions: [
      "Unified database connecting inventory, sales, and payroll.",
      "Automated low-stock alerts and purchase orders.",
      "GST-compliant billing portals with dynamic reports."
    ],
    benefits: [
      {
        title: "Operational Visibility",
        description: "Real-time graphs showcasing exact stock levels, sales pipeline velocity, and margins.",
        icon: "solar:graph-up-linear",
        stat: "Real-Time",
        statLabel: "Data Sync"
      },
      {
        title: "Error Minimization",
        description: "Interlinked data pipes remove duplicate entries, optimizing staff resource usage.",
        icon: "solar:check-circle-linear",
        stat: "99.9%",
        statLabel: "Accuracy Level"
      }
    ],
    process: [
      { title: "Ops Audit", desc: "Mapping out exact inputs and outputs across all departments." },
      { title: "Database Setup", desc: "Designing complex tables with rigid foreign key indexes." },
      { title: "Dashboard Integration", desc: "Building modular charts for inventory, payroll, and billing." }
    ],
    techStack: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "React Charts", icon: "logos:react" },
      { name: "Redis Cache", icon: "logos:redis" },
      { name: "Docker Container", icon: "logos:docker-icon" },
      { name: "AWS Cloud", icon: "logos:aws" }
    ],
    pricing: [
      {
        name: "Modular ERP Setup",
        subtitle: "Bespoke operations dashboard",
        price: "₹1,50,000",
        period: "starting cost",
        features: ["Inventory Tracking & Alerts", "GST-Compliant Invoicing", "Employee Payroll Module", "Admin Analytics Desk"],
        popular: false,
        timeline: "15-30 Days"
      },
      {
        name: "Enterprise Custom Suite",
        subtitle: "Multi-branch inventory sync",
        price: "₹3,00,000+",
        period: "custom scope",
        features: [
          "Multi-Branch Inventory Sync",
          "Integrated CRM & Marketing Portal",
          "Automated Payroll & Bank Sync",
          "Custom Financial Analytics Desk",
          "12 Months Maintenance SLA"
        ],
        popular: true,
        timeline: "30-60 Days"
      }
    ],
    faqs: [
      {
        question: "Is custom ERP better than off-the-shelf software?",
        answer: "Yes, custom ERP scales with your unique business rules without per-user licensing costs or restrictive layout guidelines."
      }
    ]
  },
  "crm-development": {
    slug: "crm-development",
    name: "CRM Development",
    title: "CRM Development",
    subtitle: "Scale Your Sales Pipeline",
    headline: "CRM Software Development Services",
    problemTitle: "Lost Lead Opportunities",
    problems: [
      "Sales agents neglecting lead follow-ups due to disorganized spreadsheets.",
      "Zero tracking of agent activity or phone call outcomes.",
      "Lack of centralized histories for client communication."
    ],
    solutions: [
      "Dynamic sales boards tracking lead status updates.",
      "Automated follow-up reminders via email/SMS.",
      "Central customer profiles capturing all touchpoints."
    ],
    benefits: [
      {
        title: "Pipeline Optimization",
        description: "Track lead progression from first click to invoice creation in real time.",
        icon: "solar:ranking-linear",
        stat: "+45%",
        statLabel: "Close Rate"
      },
      {
        title: "Agent Accountability",
        description: "Review automated activity logs, call summaries, and email trails.",
        icon: "solar:users-group-rounded-linear",
        stat: "100%",
        statLabel: "Team Tracking"
      }
    ],
    process: [
      { title: "Lead Source Integration", desc: "Connecting website forms, ads, and WhatsApp lines to the CRM." },
      { title: "Sales Flow Design", desc: "Configuring deal stages matching your exact sales funnel." },
      { title: "Alert Rules Setup", desc: "Programming automated triggers for notifications." }
    ],
    techStack: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Express", icon: "logos:express" },
      { name: "Socket.io", icon: "logos:socket-io" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" }
    ],
    pricing: [
      {
        name: "Sales Pipeline CRM",
        subtitle: "High-performance deal tracker",
        price: "₹95,000",
        period: "starting cost",
        features: ["Automated Lead Import", "Deal Stage Dashboard", "Staff Action Trackers", "Custom Email/SMS Reminders"],
        popular: false,
        timeline: "15-30 Days"
      },
      {
        name: "Enterprise Custom CRM",
        subtitle: "Omnichannel consolidation",
        price: "₹2,00,000+",
        period: "custom scope",
        features: [
          "Omnichannel Lead Consolidation",
          "AI Lead Scoring & Match",
          "Custom Automated API Integrations",
          "Advanced Customer Service Desk",
          "Dedicated Server Deployment"
        ],
        popular: true,
        timeline: "30-60 Days"
      }
    ],
    faqs: [
      {
        question: "Can we integrate this CRM with Facebook and Google Ads?",
        answer: "Yes, we build secure webhook connections to fetch lead data from online ad platforms instantly."
      }
    ]
  },
  "digital-marketing": {
    slug: "digital-marketing",
    name: "Digital Marketing",
    title: "Digital Marketing",
    subtitle: "High-ROI Growth Campaigns",
    headline: "Data-Driven Digital Marketing Company",
    problemTitle: "Invisible Online Presence",
    problems: [
      "Wasting advertising budgets on generic clicks without sales conversions.",
      "Struggling to reach localized high-intent buyers.",
      "Unoptimized advertising channels with high CAC."
    ],
    solutions: [
      "Keyword-targeted search engine advertising campaigns.",
      "High-converting landing page designs.",
      "Audience-segmented social media ad campaigns."
    ],
    benefits: [
      {
        title: "Lower Acquisition Costs",
        description: "Optimizing targets and ad copies to drive down the cost per conversion.",
        icon: "solar:dollar-linear",
        stat: "-35%",
        statLabel: "Cost Per Lead"
      },
      {
        title: "Measurable Analytics",
        description: "Review detailed conversion tracking sheets mapped to raw sales returns.",
        icon: "solar:graph-down-linear",
        stat: "Transparent",
        statLabel: "ROI Tracking"
      }
    ],
    process: [
      { title: "Competitor Analysis", desc: "Auditing competitor ad copy, landing pages, and search ranks." },
      { title: "Funnel Engineering", desc: "Building specialized fast landing pages for ad campaigns." },
      { title: "Campaign Launch", desc: "Activating segmented Google and Meta ad sets." }
    ],
    techStack: [
      { name: "Google Ads", icon: "logos:google-ads" },
      { name: "Meta Ads", icon: "logos:facebook" },
      { name: "Google Analytics", icon: "logos:google-analytics" },
      { name: "Tag Manager", icon: "logos:google-tag-manager" },
      { name: "HubSpot CRM", icon: "logos:hubspot" },
      { name: "Semrush Audit", icon: "logos:semrush" }
    ],
    pricing: [
      {
        name: "Bihar Local Visibility",
        subtitle: "Lead generation for local hubs",
        price: "₹15,000",
        period: "per month",
        features: ["Patna & Bihar Local Maps Setup", "Local Competitor Keyword Audit", "Hindi & English Ad Creatives", "Local Citation Cataloging", "Bi-Weekly Traffic Reports"],
        popular: false,
        timeline: "Ongoing"
      },
      {
        name: "Pan-India Scale Plan",
        subtitle: "Target nation-wide high-intent customers",
        price: "₹30,000+",
        period: "per month",
        features: [
          "National PPC Ad Optimization",
          "SEO Link-Building Campaigns",
          "Advanced Landing Page Testing",
          "High-Authority Backlink Setup",
          "Weekly Performance Reviews"
        ],
        popular: true,
        timeline: "Ongoing"
      }
    ],
    faqs: [
      {
        question: "How do you track campaign success?",
        answer: "We set up comprehensive conversions tracker dashboards to report exact click-to-lead rates and customer costs."
      }
    ]
  },
  "seo-services": {
    slug: "seo-services",
    name: "SEO Services",
    title: "SEO Services",
    subtitle: "Dominant Search Engine Rankings",
    headline: "Enterprise SEO Agency",
    problemTitle: "Zero Search Visibility",
    problems: [
      "Failing to appear on Google maps or search engine queries.",
      "Losing organic sales queries to regional competitors.",
      "Unindexed site pages due to broken technical web SEO layouts."
    ],
    solutions: [
      "Bespoke semantic markup and rich JSON-LD configurations.",
      "Localized keyword integration templates.",
      "High-authority backlink development schemes."
    ],
    benefits: [
      {
        title: "Organic Traffic Inflow",
        description: "Continuous inbound queries from consumers actively searching for your solutions online.",
        icon: "solar:search-list-linear",
        stat: "+250%",
        statLabel: "Organic Visits"
      },
      {
        title: "Google Map Dominance",
        description: "Rank in the top localized map packs for local searches.",
        icon: "solar:map-point-linear",
        stat: "Top 3",
        statLabel: "Map Pack Ranking"
      }
    ],
    process: [
      { title: "Tech SEO Audit", desc: "Correcting search engine indexing locks, speeds, and layout tags." },
      { title: "Keyword Mapping", desc: "Researching high-intent search queries." },
      { title: "Content Synthesis", desc: "Deploying structural, schema-supported landing pages." }
    ],
    techStack: [
      { name: "Google Search Console", icon: "logos:google" },
      { name: "Ahrefs Tools", icon: "logos:ahrefs" },
      { name: "Schema JSON-LD", icon: "logos:json" },
      { name: "Screaming Frog", icon: "logos:screaming-frog" },
      { name: "Google Analytics", icon: "logos:google-analytics" },
      { name: "Semrush", icon: "logos:semrush" }
    ],
    pricing: [
      {
        name: "Organic Search Authority",
        subtitle: "Local map & website SEO dominance",
        price: "₹30,000",
        period: "per month",
        features: ["Technical SEO Code Alignment", "Google Maps Optimization", "Weekly Keyword Rank Updates", "Monthly Audit Reports"],
        popular: false,
        timeline: "Ongoing"
      },
      {
        name: "National Enterprise SEO",
        subtitle: "Authority link-building & core SEO",
        price: "₹60,000+",
        period: "per month",
        features: [
          "Advanced Backlink Acquisition",
          "Topical Authority Content Hubs",
          "International Search Targeting",
          "Competitor Share-of-Voice Audit",
          "Dedicated SEO Account Manager"
        ],
        popular: true,
        timeline: "Ongoing"
      }
    ],
    faqs: [
      {
        question: "How long does it take to rank on Google?",
        answer: "Organic search results typically begin showing notable ranking improvements within 3 to 6 months of code updates."
      }
    ]
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    title: "UI/UX Design",
    subtitle: "Beautiful Interfaces, Seamless Experiences",
    headline: "Premium UI/UX Design Studio",
    problemTitle: "Frustrating App Interactions",
    problems: [
      "Users dropping off due to confusing navigation pathways.",
      "Messy layouts failing to convey key product features.",
      "Inconsistent interfaces across web and mobile platforms."
    ],
    solutions: [
      "Comprehensive user research and wireframing.",
      "Consistent, modern design systems built from scratch.",
      "Interactive high-fidelity visual prototypes."
    ],
    benefits: [
      {
        title: "Higher Conversion",
        description: "Smooth, intuitive interfaces that reduce friction and double user goal completion rates.",
        icon: "solar:widget-linear",
        stat: "+65%",
        statLabel: "Goal Completion"
      },
      {
        title: "User Retention",
        description: "Delightful animations and layouts that keep users engaged and active on your platform.",
        icon: "solar:heart-linear",
        stat: "2x",
        statLabel: "User Retention"
      }
    ],
    process: [
      { title: "User Research", desc: "Analyzing user behavior, mapping user journeys, and identifying friction points." },
      { title: "Wireframing", desc: "Creating structural blueprints for pages to lock layout hierarchies." },
      { title: "UI Design", desc: "Developing premium visual interfaces, custom icons, and typography packages." }
    ],
    techStack: [
      { name: "Figma", icon: "logos:figma" },
      { name: "Adobe XD", icon: "logos:adobe-xd" },
      { name: "Illustrator", icon: "logos:adobe-illustrator" },
      { name: "Photoshop", icon: "logos:adobe-photoshop" },
      { name: "Sketch App", icon: "logos:sketch" },
      { name: "InVision", icon: "logos:invision-icon" }
    ],
    pricing: [
      {
        name: "Bespoke UI Design",
        subtitle: "Full product system visual design",
        price: "₹35,000",
        period: "starting cost",
        features: ["User Journey Flowcharting", "Responsive Screen Visuals", "Custom Graphic Assets Package", "Interactive Figma Prototype"],
        popular: false,
        timeline: "7-15 Days"
      },
      {
        name: "Complete Design System",
        subtitle: "Figma library & tokens specification",
        price: "₹85,000+",
        period: "custom scope",
        features: [
          "Complete UI Component Library",
          "Design Tokens & Variable Specs",
          "Advanced Interactive Prototyping",
          "User Testing & Feedback Cycles",
          "Unlimited Developer Handover Support"
        ],
        popular: true,
        timeline: "15-30 Days"
      }
    ],
    faqs: [
      {
        question: "What deliverables do I receive in a UI/UX project?",
        answer: "You receive clean, organized Figma design files, user journey mapping documentation, exportable assets, and interactive prototype links."
      }
    ]
  },
  "automation-solutions": {
    slug: "automation-solutions",
    name: "Automation Solutions",
    title: "Automation Solutions",
    subtitle: "Eliminate Repetitive Tasks",
    headline: "Business Workflow Automation Company",
    problemTitle: "Costly Manual Operations",
    problems: [
      "Manually copying contact records between ads, sheets, and messaging platforms.",
      "Delays in sending order receipts or tracking numbers to clients.",
      "High labor costs spent managing simple routine workflows."
    ],
    solutions: [
      "Automated API webhooks connecting business software.",
      "Smart WhatsApp and email alert configurations.",
      "Database sync workflows running 24/7."
    ],
    benefits: [
      {
        title: "Time Saved",
        description: "Replaces hours of repetitive typing with instant automated scripts.",
        icon: "solar:history-linear",
        stat: "95%",
        statLabel: "Admin Time Saved"
      },
      {
        title: "Flawless Execution",
        description: "Automated pipelines process data identically every time without typos.",
        icon: "solar:check-square-linear",
        stat: "Zero",
        statLabel: "Processing Errors"
      }
    ],
    process: [
      { title: "Data Stream Audit", desc: "Mapping manual tasks and identifying software integration points." },
      { title: "Flow Configuration", desc: "Structuring node triggers and database updates." },
      { title: "Integration Testing", desc: "Testing edge cases to ensure error handling is stable." }
    ],
    techStack: [
      { name: "n8n Integration", icon: "logos:n8n-icon" },
      { name: "Make Automation", icon: "logos:make-icon" },
      { name: "Zapier", icon: "logos:zapier-icon" },
      { name: "Python Scripts", icon: "logos:python" },
      { name: "Node APIs", icon: "logos:nodejs-icon" },
      { name: "Puppeteer Bot", icon: "logos:puppeteer" }
    ],
    pricing: [
      {
        name: "Workflow Auto Sync",
        subtitle: "Cross-platform data automations",
        price: "₹45,000",
        period: "one-time setup",
        features: ["3 Core App Automations", "WhatsApp Cloud Alert Sync", "Automated Sheet Logging", "Full Error Catching Setup"],
        popular: false,
        timeline: "10-25 Days"
      },
      {
        name: "Enterprise Workflow Suite",
        subtitle: "Complex n8n server pipelines",
        price: "₹95,000+",
        period: "custom scope",
        features: [
          "Multi-Step Complex Logic Nodes",
          "Custom API Integrations",
          "n8n Self-Hosted Server Setup",
          "Advanced Error Notification Paths",
          "3 Months SLA Support"
        ],
        popular: true,
        timeline: "20-40 Days"
      }
    ],
    faqs: [
      {
        question: "Can you automate billing software with our CRM?",
        answer: "Yes, we connect billing systems like Stripe or Razorpay to logging tools and CRM sheets via webhooks."
      }
    ]
  },
  "cloud-solutions": {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    title: "Cloud Solutions",
    subtitle: "Scalable, Secure Server Infrastructures",
    headline: "Cloud Migration & Hosting Company",
    problemTitle: "Fragile Hosting Setups",
    problems: [
      "Websites crashing during traffic spikes due to limited local servers.",
      "Unbacked databases risking catastrophic business data loss.",
      "Vulnerable port configurations exposing servers to security breaches."
    ],
    solutions: [
      "Serverless deployment models on global cloud providers.",
      "Automated off-site database backup pipelines.",
      "Secure virtual private cloud (VPC) firewalls."
    ],
    benefits: [
      {
        title: "Infinite Scalability",
        description: "Infrastructure dynamically scales server resources to process traffic spikes.",
        icon: "solar:cloud-upload-linear",
        stat: "99.99%",
        statLabel: "Guaranteed Uptime"
      },
      {
        title: "Secure Backups",
        description: "Daily automated snapshots of databases saved across secure data rooms.",
        icon: "solar:archive-down-linear",
        stat: "Daily",
        statLabel: "Backup Schedule"
      }
    ],
    process: [
      { title: "Infrastructure Audit", desc: "Analyzing database sizes, host loads, and monthly budgets." },
      { title: "Cloud Migration", desc: "Moving files and databases to secure virtual containers." },
      { title: "Security Tuning", desc: "Configuring SSL encryption, VPC gates, and access locks." }
    ],
    techStack: [
      { name: "AWS Cloud", icon: "logos:aws" },
      { name: "Google Cloud", icon: "logos:google-cloud" },
      { name: "Vercel Serverless", icon: "logos:nextjs-icon" },
      { name: "Docker Container", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "GitHub Actions", icon: "logos:github-icon" }
    ],
    pricing: [
      {
        name: "Cloud Migration Base",
        subtitle: "Setup serverless environments",
        price: "₹65,000",
        period: "starting cost",
        features: ["Serverless Architecture Setup", "Auto Database Backup Setup", "SSL & Firewall Deployment", "Infrastructure Audits"],
        popular: false,
        timeline: "10-20 Days"
      },
      {
        name: "Devops Cluster Setup",
        subtitle: "Kubernetes & CI/CD deployment",
        price: "₹1,80,000+",
        period: "custom scope",
        features: [
          "Multi-Region Cloud Setup",
          "Docker/Kubernetes Orchestration",
          "CI/CD Deployment Pipelines",
          "Zero-Downtime Migration Services",
          "24/7 Server Log Auditing SLA"
        ],
        popular: true,
        timeline: "20-45 Days"
      }
    ],
    faqs: [
      {
        question: "What is serverless hosting and why is it better?",
        answer: "Serverless setups (like Vercel or AWS Lambda) charge only for resources used, eliminate server maintenance, and prevent crashes."
      }
    ]
  }
};
