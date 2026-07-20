import Link from "next/link";

export const industriesData = {
  "healthcare": {
    title: "Healthcare",
    headline: "Transforming Patient Care Through Digital Innovation",
    subtext: "Webflora Technologies builds compliant, high-performance digital solutions for clinics, hospitals, and telemedicine platforms. We design secure patient portals, appointment scheduling engines, and automated health record workflows starting from ₹45,000.",
    geoTitle: "Advanced Digital Healthcare Solutions in Patna & Bihar",
    geoContent: "We help healthcare providers, diagnostics labs, and clinics in Patna, Muzaffarpur, Gaya, and across Bihar establish secure and localized digital ecosystems. From WhatsApp-based lab report delivery to smart appointment management, we digitize medical practices.",
    heroBadge: "Smart Healthcare Systems",
    problemTitle: "Healthcare Operational Hurdles",
    problems: [
      "Inconvenient appointment booking resulting in missed consultations and low patient satisfaction",
      "Manual handling of patient records and test reports causing data delays and errors",
      "Lack of secure, HIPAA-compliant patient communication channels for virtual healthcare",
      "Sluggish loading speeds of healthcare information portals during peak hours",
      "Ineffective local SEO preventing clinics from ranking high on Google for local patient searches"
    ],
    subServices: [
      { title: "Telemedicine Portals", icon: "lucide:video", desc: "Build secure virtual consultation platforms with integrated video calls, prescription management, and payment gateways." },
      { title: "Clinic Management Software", icon: "lucide:activity", desc: "Streamline patient check-ins, doctor schedules, digital prescriptions, and billing in one unified interface.", href: "/electronic-health-records-software" },
      { title: "Patient Portals & Apps", icon: "lucide:user", desc: "Empower patients to book slots, view medical histories, and download lab results securely from any device." },
      { title: "WhatsApp Lab Report Delivery", icon: "lucide:message-square", desc: "Automate lab report delivery and appointment reminders directly to patients' WhatsApp numbers using secure APIs." },
      { title: "Medical SEO & Visibility", icon: "lucide:search", desc: "Optimize your clinic's Google Map listing and site search presence to attract local patients seeking medical services." }
    ],
    process: [
      { title: "Compliance & Security Review", desc: "We review patient data safety guidelines and access controls." },
      { title: "UX Wireframing", desc: "Designing accessible and clear interfaces for patients of all ages." },
      { title: "Development & Integration", desc: "Building responsive Next.js apps with secure database connections." },
      { title: "Testing & Validation", desc: "Rigorous vulnerability assessments and loading speed checks." }
    ],
    solutions: [
      "HIPAA-inspired secure data encryption for patient files",
      "Automated WhatsApp notification bots for reminders",
      "Clean UI designed for elderly accessibility and high legibility",
      "Sub-second load times for medical information pages"
    ],
    benefits: [
      {
        title: "Reduced No-Shows",
        description: "Automated SMS and WhatsApp reminders reduce missed appointments by up to 40%.",
        icon: "lucide:calendar",
        stat: "40%",
        statLabel: "Reduction in No-Shows",
        metric: "Efficiency Lift",
        color: "from-[#FF3B00]/20 to-red-600/5"
      },
      {
        title: "Local Medical SEO",
        description: "Rank in the Google Local Pack for target healthcare searches in Bihar.",
        icon: "lucide:search",
        stat: "#1",
        statLabel: "Local Rankings",
        metric: "Patient Inflow",
        color: "from-cyan-600/20 to-blue-600/5"
      },
      {
        title: "100% Secure Data",
        description: "Encrypted patient databases protect sensitive information against security threats.",
        icon: "lucide:shield",
        stat: "AES-256",
        statLabel: "Data Encryption",
        metric: "Patient Trust",
        color: "from-purple-600/20 to-violet-600/5"
      }
    ],
    faqs: [
      {
        question: "Is our patient database secure?",
        answer: "Yes, we implement AES-256 database encryption, SSL protocols, and restricted API access levels to ensure maximum security for sensitive medical files.",
        icon: "lucide:shield-check"
      },
      {
        question: "Are your systems compliant with telehealth regulations?",
        answer: "Yes, we build our software with compliance in mind. We use secure endpoints, role-based access logs, and encrypted datastores to satisfy standard health information privacy regulations.",
        icon: "lucide:file-text"
      },
      {
        question: "Do you build custom mobile apps for doctors?",
        answer: "Yes, we design specialized cross-platform mobile apps for medical staff. These include quick patient queue lists, digital prescription pads, and secure messaging integrations.",
        icon: "lucide:smartphone"
      },
      {
        question: "How do patients access their records?",
        answer: "Patients are provided with a secure patient portal. They log in via passwordless OTP or secure password credentials to view, download, or share their lab reports and consultation histories.",
        icon: "lucide:user"
      },
      {
        question: "Can we integrate lab equipment or third-party CRM systems?",
        answer: "Absolutely, we design custom integrations via REST APIs to connect your web apps with diagnostic equipment or billing systems.",
        icon: "lucide:refresh-cw"
      }
    ],
    techStack: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" }
    ]
  },
  "education": {
    title: "Education",
    headline: "Empowering Next-Gen Learning Platforms",
    subtext: "Webflora Technologies builds scalable Learning Management Systems (LMS), interactive coaching institute portals, school websites, and online mock test platforms starting from ₹30,000.",
    geoTitle: "Leading EdTech and School Web Development in Bihar",
    geoContent: "We specialize in developing high-converting websites and portals for schools, colleges, and coaching institutes in Patna, Muzaffarpur, Bhagalpur, and all across Bihar, facilitating digital admissions and student engagement.",
    heroBadge: "Advanced LMS & EdTech",
    problemTitle: "Educational Digitization Challenges",
    problems: [
      "Clunky user interfaces that distract students from online learning",
      "Manual fee collection and enrollment causing high administration workloads",
      "Lack of structured online mock tests and performance tracking tools",
      "Poor loading speeds during live online exam sessions",
      "Absence of clean, search-friendly websites to capture digital admissions"
    ],
    subServices: [
      { title: "Custom LMS Portals", icon: "lucide:book-open", desc: "Build courses, track student progress, upload study materials, and manage batch schedules easily." },
      { title: "Online Mock Test Systems", icon: "lucide:file-signature", desc: "Design time-bound mock exams with automated result generation and negative marking support." },
      { title: "School & College Websites", icon: "lucide:graduation-cap", desc: "Develop stunning, information-rich portal sites with digital admission forms and photo galleries." },
      { title: "Fee Management & Gateway", icon: "lucide:credit-card", desc: "Integrate secure, automated fee collection systems supporting UPI, cards, and instant invoices." },
      { title: "Student Notification Automation", icon: "lucide:bell", desc: "Send class schedules, homework alerts, and exam reminders directly via WhatsApp or SMS." }
    ],
    process: [
      { title: "Student Journey Design", desc: "We map out an intuitive navigation flow for students, parents, and admins." },
      { title: "Portal Wireframing", desc: "Creating clutter-free learning screens to maximize focus." },
      { title: "Performance Engineering", desc: "Coding fast, responsive testing and learning dashboards." },
      { title: "Secure Deployment", desc: "Hosting on cloud servers optimized for sudden spikes in student traffic." }
    ],
    solutions: [
      "Scalable LMS backend handling thousands of active concurrent students",
      "Mobile-friendly mock test layout with auto-save functionality",
      "Automated PDF report card and certificate generators",
      "Secure payment links for automated monthly fee collection"
    ],
    benefits: [
      {
        title: "Digital Admissions",
        description: "Double your lead-to-enrollment ratio with optimization-focused landing pages.",
        icon: "lucide:user-plus",
        stat: "2x",
        statLabel: "Enrollment Growth",
        metric: "Admissions Lift",
        color: "from-[#FF3B00]/20 to-red-600/5"
      },
      {
        title: "Sub-Second Test Load",
        description: "Ensure zero delay during mock tests with light frontend static generation.",
        icon: "lucide:zap",
        stat: "99.9%",
        statLabel: "Exam Session Uptime",
        metric: "Core Web Vitals",
        color: "from-cyan-600/20 to-blue-600/5"
      },
      {
        title: "Automated Operations",
        description: "Save admin work hours by automating online admissions, payments, and notifications.",
        icon: "lucide:check-square",
        stat: "15hr+",
        statLabel: "Saved per week",
        metric: "Time Savings",
        color: "from-purple-600/20 to-violet-600/5"
      }
    ],
    faqs: [
      {
        question: "Can we lock mock tests for specific batches?",
        answer: "Yes, our custom LMS includes role-based access control, letting you schedule tests and lock content for specific user groups.",
        icon: "lucide:lock"
      },
      {
        question: "Can the platform handle online live classes?",
        answer: "Yes, we integrate secure live streaming protocols and APIs from providers like Zoom, Google Meet, or custom WebRTC channels to allow real-time interactive lectures.",
        icon: "lucide:video"
      },
      {
        question: "Does it support parental dashboards?",
        answer: "Absolutely. We build parents' login portals where they can monitor attendance, download progress reports, check exam schedules, and pay pending fees directly.",
        icon: "lucide:users"
      },
      {
        question: "Is there an offline mode for learning materials?",
        answer: "We build custom mobile apps that cache lecture notes and test papers locally, allowing students to study offline and sync progress once they are online.",
        icon: "lucide:wifi-off"
      },
      {
        question: "Are payment gateways easy to integrate?",
        answer: "We seamlessly integrate Razorpay, Instamojo, or Paytm, allowing students to pay securely via UPI, NetBanking, or Credit Cards.",
        icon: "lucide:credit-card"
      }
    ],
    techStack: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "MongoDB", icon: "logos:mongodb-icon" }
    ]
  },
  "real-estate": {
    title: "Real Estate",
    headline: "Unlocking Premium Real Estate Client Portals",
    subtext: "Webflora Technologies builds conversion-focused property listing websites, CRM integrations, interactive local maps, and WhatsApp-driven lead qualification engines starting from ₹45,000.",
    geoTitle: "High-Intent Property Portals in Patna & Bihar",
    geoContent: "We help property developers, real estate agencies, and builders across Patna, Muzaffarpur, Gaya, and Bihar showcase residential and commercial projects with virtual tours, interactive location benefits, and direct lead capturing.",
    heroBadge: "High-Converting Property Portals",
    problemTitle: "Real Estate Digital Friction",
    problems: [
      "Outdated property layouts that fail to present project scale and floor plans clearly",
      "Slow loading times driving high bounce rates among high-value home buyers",
      "Lack of structured CRM systems to track site visits and qualify hot buyer leads",
      "Inability to target local search queries for prime property developments in Bihar",
      "Manual follow-ups on multiple real estate portals resulting in missed opportunities"
    ],
    subServices: [
      { title: "Project Launch Websites", icon: "lucide:home", desc: "Showcase premium residential or commercial projects with high-resolution galleries, amenities, and floor plans." },
      { title: "Property Directories", icon: "lucide:map", desc: "Build searchable property listings with localized filters, interactive map pins, and price range configurations." },
      { title: "Lead Qualification Chatbots", icon: "lucide:bot", desc: "Qualify prospective buyers 24/7 on WhatsApp, collecting budget, location preference, and phone details." },
      { title: "Sales CRM Sync", icon: "lucide:users", desc: "Automatically route web inquiries directly to your site-visit sales executives' CRM dashboards." },
      { title: "SEO for Real Estate", icon: "lucide:search", desc: "Target high-intent keywords like 'flats in Patna' or 'commercial space in Patna' to drive organic inquiries." }
    ],
    process: [
      { title: "Lead Path Optimization", desc: "We structure pages to prioritize brochure downloads and site visit bookings." },
      { title: "Visual Layout Design", desc: "Crafting modern layouts with dark-mode elegance to frame luxury projects." },
      { title: "Interactive Feature Code", desc: "Coding custom property filters and interactive map locations." },
      { title: "SEO Schema Setup", desc: "Adding RealEstateAgent and SingleFamilyResidence schemas for search engines." }
    ],
    solutions: [
      "Dynamic filtering for properties by price, BHK size, and project status",
      "WhatsApp widgets and call-to-actions to capture instant builder enquiries",
      "Integrated floor plan viewer and virtual tour embeds",
      "Fast-loading mobile sites to capture traffic from social media ads"
    ],
    benefits: [
      {
        title: "Qualified Inquiries",
        description: "Increase direct client queries and phone calls, bypassing expensive third-party listing sites.",
        icon: "lucide:phone-call",
        stat: "3x",
        statLabel: "Direct Leads",
        metric: "ROAS Booster",
        color: "from-[#FF3B00]/20 to-red-600/5"
      },
      {
        title: "Organic Local Leads",
        description: "Secure organic search placements for target commercial and residential project terms.",
        icon: "lucide:search",
        stat: "#1",
        statLabel: "Google Rankings",
        metric: "SEO Authority",
        color: "from-cyan-600/20 to-blue-600/5"
      },
      {
        title: "Brochure Downloads",
        description: "Optimize user flows to capture email and phone details when users request brochure PDFs.",
        icon: "lucide:download",
        stat: "65%",
        statLabel: "Conversion Rate",
        metric: "Lead Capturing",
        color: "from-purple-600/20 to-violet-600/5"
      }
    ],
    faqs: [
      {
        question: "Can we manage property listings internally?",
        answer: "Yes, we integrate a secure administrative dashboard where your team can add, edit, or archive properties with a few clicks.",
        icon: "lucide:layout-dashboard"
      },
      {
        question: "Can we track client interaction history?",
        answer: "Yes, our real estate CRM integrations track every touchpoint—from brochure downloads and site visits to calls and WhatsApp chats—giving your sales team a complete customer profile.",
        icon: "lucide:history"
      },
      {
        question: "Is the property map search customizable?",
        answer: "Yes, we design custom interactive map components using Mapbox or Google Maps API, letting users draw boundaries or filter flat listings by precise radius and local landmarks.",
        icon: "lucide:map-pin"
      },
      {
        question: "How do you optimize flat landing pages for ads?",
        answer: "We build specialized high-speed micro-sites for individual project launches. These feature focused CTAs, booking schedules, and lightweight image galleries to maximize return on ad spend.",
        icon: "lucide:target"
      },
      {
        question: "How do you automate WhatsApp lead qualification?",
        answer: "We build custom n8n workflows integrated with WhatsApp Business API that automatically greet leads and prompt them for budget and timeline.",
        icon: "lucide:message-square"
      }
    ],
    techStack: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" }
    ]
  },
  "manufacturing": {
    title: "Manufacturing",
    headline: "Automating B2B Workflows & Industrial Portals",
    subtext: "Webflora Technologies builds custom ERP systems, industrial B2B portals, inventory management software, and distributor communication channels starting from ₹80,000.",
    geoTitle: "Industrial Digital Transformation in Bihar",
    geoContent: "We assist factories, processing mills, and manufacturing enterprises in Patna, Muzaffarpur, Barauni, and Bihar in digitizing supply chain workflows, tracking inventory levels, and securing B2B client contracts online.",
    heroBadge: "Industrial Custom ERP",
    problemTitle: "Manufacturing Operational Gaps",
    problems: [
      "Manual spreadsheets tracking materials leading to inventory errors and production delays",
      "Lack of centralized tracking for distributor orders and pending dispatches",
      "Generic ERP software that doesn't fit unique assembly or manufacturing lines",
      "Vulnerable internal systems lacking backup structures and role-based permissions",
      "Inability to present factory capacity, certifications, and B2B products to global buyers"
    ],
    subServices: [
      { title: "Custom Inventory ERP", icon: "lucide:boxes", desc: "Track raw materials, finished stock, and automatic re-order levels in a customized dashboard." },
      { title: "Distributor & B2B Portals", icon: "lucide:network", desc: "Provide distributors with secure logins to place bulk orders, check dispatch statuses, and download invoices." },
      { title: "Production Line Trackers", icon: "lucide:cpu", desc: "Monitor multi-stage production workflows, employee shifts, and machine maintenance records." },
      { title: "GST-Compliant Invoicing", icon: "lucide:receipt", desc: "Automate bulk purchase order calculations, tax splits, credit terms, and PDF invoice generation." },
      { title: "B2B Lead Generation Sites", icon: "lucide:factory", desc: "Build high-speed, SEO-optimized corporate websites to showcase factory machinery, certifications, and capabilities." }
    ],
    process: [
      { title: "Factory Workflow Audit", desc: "We study your physical production flow to design matching digital models." },
      { title: "Database Architecture", desc: "Structuring secure databases for large inventory tables and audit logs." },
      { title: "System Coding", desc: "Developing responsive frontend dashboard views with Python/Go backends." },
      { title: "Stress & Scalability Tests", desc: "Validating database performance and automated report generation speeds." }
    ],
    solutions: [
      "Centralized cloud-native dashboard accessible on mobile and desktop",
      "Distributor portal with custom pricing levels and credit limits",
      "Real-time notifications for low raw-material levels",
      "Highly secure role-based access control (RBAC) for data privacy"
    ],
    benefits: [
      {
        title: "Inventory Accuracy",
        description: "Eliminate manual inventory errors with automated stock intake and dispatch tracking.",
        icon: "lucide:package-check",
        stat: "99.8%",
        statLabel: "Stock Accuracy",
        metric: "Logistics Lift",
        color: "from-[#FF3B00]/20 to-red-600/5"
      },
      {
        title: "Order Cycle Speed",
        description: "Speed up order processing times by allowing distributors to log orders directly.",
        icon: "lucide:trending-up",
        stat: "35%",
        statLabel: "Faster Processing",
        metric: "Supply Chain",
        color: "from-cyan-600/20 to-blue-600/5"
      },
      {
        title: "Operational Visibility",
        description: "Get real-time insights on factory outputs, material costs, and overall profit margins.",
        icon: "lucide:bar-chart-4",
        stat: "100%",
        statLabel: "Real-Time Tracking",
        metric: "Business Intelligence",
        color: "from-purple-600/20 to-violet-600/5"
      }
    ],
    faqs: [
      {
        question: "Can we migrate our existing Excel data to the custom ERP?",
        answer: "Yes, we handle complete data migration, importing your existing inventory, client lists, and history into the new secure system.",
        icon: "lucide:database"
      },
      {
        question: "Can the ERP system sync with barcode scanners?",
        answer: "Yes, we build customized inventory software that integrates with handheld barcode or RFID scanners for automated stock tracking, intake, and dispatch verification.",
        icon: "lucide:qr-code"
      },
      {
        question: "Do you support multi-warehouse logistics?",
        answer: "Absolutely. The software handles stock transfers across multiple physical warehouses, tracking real-time levels, raw material usage, and shipping statuses in one unified portal.",
        icon: "lucide:boxes"
      },
      {
        question: "Is my factory data safe on the cloud?",
        answer: "We deploy manufacturing databases in secure, private VPC networks with automatic hourly backups, strict firewalls, and role-based permissions to prevent unauthorized access.",
        icon: "lucide:shield"
      },
      {
        question: "Do you offer user training for factory staff?",
        answer: "Yes, we provide hands-on training sessions and video guides to ensure your supervisors and office staff adapt to the system easily.",
        icon: "lucide:users"
      }
    ],
    techStack: [
      { name: "Python", icon: "logos:python" },
      { name: "React", icon: "logos:react" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "AWS", icon: "logos:aws" }
    ]
  },
  "retail": {
    title: "Retail",
    headline: "Unifying Retail Sales & Modern E-Commerce Platforms",
    subtext: "Webflora Technologies builds high-converting e-commerce web applications, offline-to-online POS systems, and automated customer marketing flows starting from ₹45,000.",
    geoTitle: "Scalable E-Commerce & Retail Solutions in Patna & Bihar",
    geoContent: "We help retail brands, wholesalers, and supermarkets in Patna, Muzaffarpur, Gaya, and across Bihar establish highly fast online storefronts. We integrate local shipping carriers, GST calculations, and custom discount engines.",
    heroBadge: "Modern E-Commerce Storefronts",
    problemTitle: "Retail Modernization Bottlenecks",
    problems: [
      "Slow-loading online stores causing cart abandonment and lost sales during promotions",
      "Manual sync errors between offline store inventories and online product listings",
      "Outdated payment setups that drive customers away due to lack of seamless UPI checkout",
      "High platform fees and rigid templates of generic online store builders",
      "Lack of direct marketing integrations to capture abandoned carts and return buyers"
    ],
    subServices: [
      { title: "Next.js E-Commerce Sites", icon: "lucide:shopping-bag", desc: "Build sub-second loading online storefronts with React, static rendering, and conversion-focused checkout starting from ₹45,000." },
      { title: "Wholesale B2B Stores", icon: "lucide:store", desc: "Design wholesale portals where retail partners buy in bulk, calculate volume discounts, and download GST invoices." },
      { title: "POS & Inventory Sync", icon: "lucide:refresh-cw", desc: "Sync physical shop sales with your online database to keep stock levels accurate in real time." },
      { title: "UPI & Payment Integration", icon: "lucide:wallet", desc: "Integrate quick-checkout options supporting Paytm, GooglePay, credit cards, and cash-on-delivery options." },
      { title: "Cart Recovery Flows", icon: "lucide:mail", desc: "Automate WhatsApp and email alerts to customers who leave items in their cart, reclaiming lost revenue." }
    ],
    process: [
      { title: "Store Flow Mapping", desc: "We optimize product discovery, category filters, and checkout clicks." },
      { title: "UI/UX Storefront Design", desc: "Creating highly visual, modern interfaces to elevate product listings." },
      { title: "Secure Checkout Coding", desc: "Developing reliable payment integrations and cart math algorithms." },
      { title: "ASO & SEO Launch", desc: "Deploying with structured product schemas to showcase prices and reviews directly in Google search." }
    ],
    solutions: [
      "Lightning-fast Next.js shopping cart that never lags",
      "Integrated UPI quick-checkout for seamless mobile payments",
      "Real-time stock alerts and admin product managers",
      "Product schemas for Google search rich snippets"
    ],
    benefits: [
      {
        title: "Sub-Second Loading",
        description: "Maximize sales by keeping your storefront fast on 4G and mobile connections.",
        icon: "lucide:zap",
        stat: "90+",
        statLabel: "PageSpeed Score",
        metric: "Performance",
        color: "from-[#FF3B00]/20 to-red-600/5"
      },
      {
        title: "UPI Checkout Lift",
        description: "UPI quick-checkout options reduce payment failures and double mobile orders.",
        icon: "lucide:credit-card",
        stat: "48%",
        statLabel: "Checkout Lift",
        metric: "Sales Conversion",
        color: "from-cyan-600/20 to-blue-600/5"
      },
      {
        title: "Reclaimed Sales",
        description: "WhatsApp cart recovery flows return up to 25% of abandoning shoppers to complete checkout.",
        icon: "lucide:message-square",
        stat: "25%",
        statLabel: "Recovered Carts",
        metric: "ROI Lift",
        color: "from-purple-600/20 to-violet-600/5"
      }
    ],
    faqs: [
      {
        question: "How do we handle shipping rates and delivery partners?",
        answer: "We set up dynamic shipping calculators based on pincodes and integrate APIs of top delivery partners like Shiprocket or Delhivery.",
        icon: "lucide:truck"
      },
      {
        question: "Does the storefront support international shipping?",
        answer: "Yes, we can configure global currencies, international shipping gateways, tax calculations, and localized checkout experiences based on the visitor's region.",
        icon: "lucide:globe"
      },
      {
        question: "Can we run flash sales and discount rules?",
        answer: "Our custom e-commerce admin panel includes a rule-based discount engine, letting you launch scheduled coupons, buy-one-get-one deals, or automatic checkout reductions.",
        icon: "lucide:badge-percent"
      },
      {
        question: "How do you handle shopping cart abandonment?",
        answer: "We integrate automated abandoned cart recovery systems. If a customer logs their email or phone but leaves checkout, the system triggers friendly reminders via email or WhatsApp.",
        icon: "lucide:shopping-cart"
      },
      {
        question: "Can the online store support coupon codes and discounts?",
        answer: "Yes, the custom admin panel allows you to generate percentage-off, fixed-amount, or free-shipping promo codes easily.",
        icon: "lucide:tag"
      }
    ],
    techStack: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" }
    ]
  },
  "startups": {
    title: "Startups & MVPs",
    headline: "Engineering Scalable MVPs to Launch and Raise Capital",
    subtext: "Webflora Technologies designs rapid, high-performance MVPs, investor-ready prototypes, SaaS architectures, and agile software solutions for fast-growing startups starting from ₹45,000.",
    geoTitle: "High-Growth Startup & MVP Development in Patna & Bihar",
    geoContent: "We partner with aspiring entrepreneurs, bootstrapped founders, and funded startups across Patna, Muzaffarpur, Gaya, and India to bring their ideas to life. From database scaling to payment systems, we launch your MVP in record time.",
    heroBadge: "Rapid MVP & SaaS Development",
    problemTitle: "Startup Launch Bottlenecks",
    problems: [
      "High development costs and long timelines delaying market validation",
      "Unscalable architectures that crash when user traffic grows",
      "Inability to create polished, high-converting investor pitch prototypes",
      "Lack of direct developer communication and founder-led product design",
      "Poor search engine optimization preventing early user acquisition"
    ],
    subServices: [
      { title: "Rapid MVP Development", icon: "lucide:rocket", desc: "Build and deploy a functional version of your core product in 4-6 weeks to validate with real users." },
      { title: "SaaS Product Design", icon: "lucide:layout", desc: "Design multi-tenant software-as-a-service platforms with user roles and recurring subscription models." },
      { title: "Investor-Ready Prototypes", icon: "lucide:presentation", desc: "Construct high-fidelity interactive frontend prototypes to showcase capabilities directly to VCs and angel investors." },
      { title: "API & Third-Party Syncs", icon: "lucide:link-2", desc: "Connect CRM databases, auth platforms, notification hubs, and payment options seamlessly." },
      { title: "Launch Marketing & SEO", icon: "lucide:megaphone", desc: "Deploy high-converting landing pages built with localized SEO to acquire your first 1,000 users organically." }
    ],
    process: [
      { title: "Founder Discovery Session", desc: "Aligning on core features for the MVP to minimize launch waste." },
      { title: "Rapid Wireframing & UI", desc: "Designing premium layouts focused on product value." },
      { title: "Agile Development Sprints", desc: "Coding fast, responsive, and cleanly structured React components." },
      { title: "Cloud Deployment & Analytics", desc: "Deploying on optimized cloud hosting with hotjar and mixpanel analytics." }
    ],
    solutions: [
      "Clean-code Next.js architecture built for easy future scaling",
      "Cost-effective third-party integrations (Supabase, Firebase, Stripe)",
      "Lightweight, pixel-perfect user interfaces to attract users",
      "SEO-optimized structure built for early organic traction"
    ],
    benefits: [
      {
        title: "Fast Time-to-Market",
        description: "Launch your functional prototype or MVP in weeks rather than months.",
        icon: "lucide:zap",
        stat: "4-6 Wks",
        statLabel: "Average Launch Time",
        metric: "Deployment Speed",
        color: "from-[#FF3B00]/20 to-red-600/5"
      },
      {
        title: "Optimized Burn Rate",
        description: "Save up to 50% on engineering overhead with our precise founder-led execution.",
        icon: "lucide:percent",
        stat: "50%",
        statLabel: "Cost Reduction",
        metric: "Budget Efficiency",
        color: "from-cyan-600/20 to-blue-600/5"
      },
      {
        title: "Fundable Prototype",
        description: "Stun investors with high-fidelity, interactive, and beautifully designed product pages.",
        icon: "lucide:coins",
        stat: "₹10Cr+",
        statLabel: "Raised by clients",
        metric: "Fundraising Lift",
        color: "from-purple-600/20 to-violet-600/5"
      }
    ],
    faqs: [
      {
        question: "What is your average timeline for building an MVP?",
        answer: "We deliver functional MVPs in 4 to 6 weeks. This includes database setup, user authentication, core functionality, and a payment gateway.",
        icon: "lucide:calendar-clock"
      },
      {
        question: "Do you sign non-disclosure agreements (NDAs) to protect our idea?",
        answer: "Yes, we sign strict NDAs before you share any proprietary details, ensuring your intellectual property and startup concept are completely protected.",
        icon: "lucide:file-signature"
      },
      {
        question: "Can we migrate the code internally once we hire an in-house team?",
        answer: "Absolutely. We write clean, fully documented, standard Next.js and React code hosted on your own GitHub account, making handovers to your future developers smooth.",
        icon: "lucide:git-pull-request"
      },
      {
        question: "How do you help us keep hosting and API costs low at the start?",
        answer: "We structure the app using serverless platforms and free/generous tier backend services (like Vercel, Supabase, and Resend), keeping initial overhead close to zero.",
        icon: "lucide:dollar-sign"
      },
      {
        question: "Do you provide product design and wireframing services?",
        answer: "Yes, we handle the entire product journey: from UX mapping and Figma wireframes to backend architecture, frontend coding, and cloud launch.",
        icon: "lucide:layers"
      }
    ],
    techStack: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" }
    ]
  },
  "ecommerce": {
    title: "E-Commerce",
    headline: "Powering Modern, High-Conversion Online Storefronts",
    subtext: "Webflora Technologies engineers lightning-fast e-commerce applications, Shopify/WooCommerce API syncs, automated multi-channel inventories, and fast-checkout flows starting from ₹45,000.",
    geoTitle: "Scalable E-Commerce Web Development in Patna & Bihar",
    geoContent: "We help retail brands, direct-to-consumer (D2C) startups, and wholesalers across Patna, Bihar, and India establish custom online storefronts. From automated WhatsApp tracking to UPI checkouts, we build optimized sales engines.",
    heroBadge: "Custom E-Commerce Storefronts",
    problemTitle: "E-Commerce Growth Barriers",
    problems: [
      "Slow-loading product catalogs driving high bounce rates and cart abandonment",
      "Rigid CMS limitations preventing unique, custom-branded shopping experiences",
      "Manual stock and order tracking causing fulfillment errors and delays",
      "Fragmented payment setups lacking one-click mobile UPI checkout options",
      "High platforms transaction fees eating into thin retail profit margins"
    ],
    subServices: [
      { title: "Next.js Storefronts", icon: "lucide:shopping-bag", desc: "Build sub-second loading storefronts utilizing React and static rendering for maximum Google page speed." },
      { title: "Multi-vendor Marketplaces", icon: "lucide:users", desc: "Develop advanced marketplace platforms allowing third-party sellers to list products and track commissions." },
      { title: "Custom Admin Dashboards", icon: "lucide:layout-dashboard", desc: "Manage catalog inventories, custom promotional coupon codes, order dispatches, and tax splits easily." },
      { title: "One-Click UPI Checkout", icon: "lucide:zap", desc: "Provide direct UPI scanning and mobile wallet integrations to eliminate payment screen drop-offs." },
      { title: "Automated Order Tracking", icon: "lucide:truck", desc: "Automate purchase invoices, packing sheets, and real-time shipping tracking via integrated APIs." }
    ],
    process: [
      { title: "Conversion UX Architecture", desc: "Mapping out quick navigation paths from home page search to payment completion." },
      { title: "Visual Catalog Layout", desc: "Designing premium, high-resolution product showcase cards and checkout overlays." },
      { title: "Secure Cart & Payment Code", desc: "Integrating secure transaction APIs and robust database transaction handlers." },
      { title: "SEO Schema Optimization", desc: "Adding rich product, review, and price schemas for automatic Google snippet visibility." }
    ],
    solutions: [
      "Custom shopping carts built with instant client-side updates",
      "API integrations with major carriers (Delhivery, Shiprocket, BlueDart)",
      "Secure, encrypted payment pipelines with zero transaction leakage",
      "Advanced discount code engines and flash-sale schedulers"
    ],
    benefits: [
      {
        title: "Sub-Second Speeds",
        description: "Boost search engine visibility and conversion rates with highly optimized static page rendering.",
        icon: "lucide:zap",
        stat: "98/100",
        statLabel: "PageSpeed Score",
        metric: "Performance Score",
        color: "from-[#FF3B00]/20 to-red-600/5"
      },
      {
        title: "Increased Cart Recovery",
        description: "Automated cart abandonment sequences recover up to 30% of lost sales.",
        icon: "lucide:mail",
        stat: "30%",
        statLabel: "Sales Reclaimed",
        metric: "Revenue Boost",
        color: "from-cyan-600/20 to-blue-600/5"
      },
      {
        title: "Lower Platform Fees",
        description: "Say goodbye to monthly percentage commissions. Own your code, host free, and pay zero platform fees.",
        icon: "lucide:badge-percent",
        stat: "0%",
        statLabel: "Sales Commission",
        metric: "Profit Growth",
        color: "from-purple-600/20 to-violet-600/5"
      }
    ],
    faqs: [
      {
        question: "Can we migrate our existing Shopify/WooCommerce store to Next.js?",
        answer: "Yes, we handle complete catalog migration including products, customer details, metadata, and images while preserving your existing SEO URLs.",
        icon: "lucide:refresh-cw"
      },
      {
        question: "Which payment gateways do you support?",
        answer: "We support all major payment providers including Razorpay, PayU, Paytm, Stripe, and Instamojo, with full support for card, net banking, and UPI checkouts.",
        icon: "lucide:credit-card"
      },
      {
        question: "Can the platform handle inventory sync across offline stores?",
        answer: "Yes, we design custom database webhooks and integrations to automatically update online stock levels whenever items are scanned at your physical store POS.",
        icon: "lucide:refresh-cw"
      },
      {
        question: "How does localized SEO help my online store?",
        answer: "We implement rich structured schemas (Product, Offer, AggregateRating) so Google can display your product prices, availability, and review stars directly in search results.",
        icon: "lucide:search"
      },
      {
        question: "Is there a limit on the number of products or orders?",
        answer: "No, custom Next.js storefronts paired with scalable SQL/NoSQL databases have no limits on product listings, page visits, or monthly order quantities.",
        icon: "lucide:infinity"
      }
    ],
    techStack: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" }
    ]
  },
  "hospital-software-development": {
    title: "Hospital Software Development",
    headline: "Hospital ERP & Patient Management Systems",
    subtext: "We design and build secure, compliant, and scalable hospital software systems. From ward vacancy trackers to digital doctor prescriptions and patient billing dashboards, we digitize healthcare.",
    geoTitle: "Hospital Software in Patna & Bihar",
    geoContent: "We serve diagnostics networks, regional hospitals, and private clinics in Patna, Gaya, Muzaffarpur, and all of Bihar, integrating payment portals and offline-to-cloud patient syncing.",
    problems: ["Clunky queue management causing patient dropouts.", "Slow manual billing desks with high error rates."],
    subServices: [
      { title: "OPD Queue Manager", icon: "lucide:users", desc: "Automated ticket queues and doctor slot tracking." },
      { title: "IPD Admission Panel", icon: "lucide:bed", desc: "Track room occupancy, bed availability, and patient transfers." }
    ],
    solutions: ["Secure patient database with AES-256 encryption", "Automated billing and PDF discharge summary printers"],
    benefits: [
      { title: "Zero Billing Errors", description: "Automated invoice calculation with integrated pharmacy codes.", icon: "lucide:file-text", stat: "100%", statLabel: "Billing Accuracy" }
    ],
    faqs: [
      { question: "Is the hospital database secure?", answer: "Yes, we implement strict Role-Based Access Controls (RBAC) and encrypted SQL tables." }
    ]
  },
  "school-website-development": {
    title: "School Website Development",
    headline: "High-Performance School & College Portals",
    subtext: "We build fast, responsive, and SEO-optimized school websites. We include student portfolios, digital admission forms, and photo galleries to showcase your institution.",
    geoTitle: "School Web Portals in Patna & Bihar",
    geoContent: "We help schools and colleges across Bihar establish modern web portals to communicate notice updates and receive registrations.",
    problems: ["Slow loading speeds during admission cycles.", "Hard-to-edit notice boards requiring coding skills."],
    subServices: [
      { title: "Notice & Events Boards", icon: "lucide:calendar", desc: "Simple admin interface to post notice files and event pictures." },
      { title: "Admission Inquiries", icon: "lucide:user-plus", desc: "Capture and route online student forms directly to admin panels." }
    ],
    solutions: ["Sub-second page speeds via Next.js SSG", "Easy admin notice manager panel"],
    benefits: [
      { title: "Instant Page Load", description: "Vitals compliant Next.js layout prevents user dropouts.", icon: "lucide:zap", stat: "95+", statLabel: "Performance Score" }
    ],
    faqs: [
      { question: "Can we post daily homework updates?", answer: "Yes, we build a simple notice board editor where teachers can upload files in 2 clicks." }
    ]
  },
  "coaching-erp": {
    title: "Coaching ERP Solutions",
    headline: "Smart ERP & Mock Test Systems for Coaching Institutes",
    subtext: "We engineer custom ERP systems specifically designed for educational coaching institutes. Manage student batches, generate smart PDF ID cards, and host online mock test papers.",
    geoTitle: "Coaching ERP Development in Bihar",
    geoContent: "We serve coaching hubs in Patna, Gaya, and Muzaffarpur, replacing manual attendance register sheets with QR-based trackers.",
    problems: ["Manual fee card tracking leading to revenue leaks.", "Inability to track student progress at scale."],
    subServices: [
      { title: "Automated Fee Ledgers", icon: "lucide:credit-card", desc: "Track pending balances, print receipts, and send automated reminders." },
      { title: "QR Attendance Sync", icon: "lucide:qr-code", desc: "Contactless student check-in via mobile QR scanning." }
    ],
    solutions: ["Milestone balance tracker with WhatsApp alerts", "Custom LMS portals for exam results"],
    benefits: [
      { title: "Revenue Recovery", description: "Automated alerts reduce balance delays by up to 50%.", icon: "lucide:trending-up", stat: "50%", statLabel: "Faster Recovery" }
    ],
    faqs: [
      { question: "Can parents log in to check reports?", answer: "Yes, we design secure mobile parent views to check attendance and scores." }
    ]
  },
  "restaurant-website-development": {
    title: "Restaurant Website Development",
    headline: "Custom Online Menus & Restaurant Storefronts",
    subtext: "We design and build breathtaking digital restaurant menus and order capturing systems. Allow customers to browse dishes, place takeaway orders, and book tables.",
    geoTitle: "Restaurant Portals in Patna & Bihar",
    geoContent: "We help hotels, cafes, and restaurants in Patna elevate their culinary brand appeal and capture direct bookings without high commission fees.",
    problems: ["High commission fees on standard food delivery apps.", "Clunky menus that are hard to read on mobile."],
    subServices: [
      { title: "Interactive Menus", icon: "lucide:utensils-cross-key", desc: "Mobile-first catalog with categories, tag filters, and images." },
      { title: "Direct Booking Capture", icon: "lucide:calendar", desc: "Receive table bookings directly via WhatsApp notification lines." }
    ],
    solutions: ["0% commission direct ordering channel", "Sleek mobile menu layouts"],
    benefits: [
      { title: "Commission Savings", description: "Keep 100% of your sales by capturing direct website orders.", icon: "lucide:percent", stat: "0%", statLabel: "Commission Charged" }
    ],
    faqs: [
      { question: "Do you integrate payment gateways?", answer: "Yes, we integrate UPI, card checkouts, and cash-on-delivery options." }
    ]
  },
  "hotel-booking-website": {
    title: "Hotel Booking Websites",
    headline: "Premium Hotel Portals & Room Booking Systems",
    subtext: "We build custom hotel booking websites featuring room directories, reservation calendars, and secure payment integrations. Own your customer details directly.",
    geoTitle: "Hotel Portals in Patna & Bihar",
    geoContent: "We help hoteliers, guest houses, and banquet halls in Bihar showcase rooms, list amenities, and book wedding halls.",
    problems: ["High OTA commissions reducing profit margins.", "Fragmented room booking calendars causing double bookings."],
    subServices: [
      { title: "Live Room Availability", icon: "lucide:bed-double", desc: "Calendar block system syncing room availability in real time." },
      { title: "Banquet Hall Schedulers", icon: "lucide:calendar", desc: "Filter booking dates for weddings and corporate meetings." }
    ],
    solutions: ["Direct UPI checkout integration", "Centralized admin booking console"],
    benefits: [
      { title: "Direct bookings lift", description: "SEO setup drives organic bookings and saves OTA fees.", icon: "lucide:trending-up", stat: "30%", statLabel: "Direct Booking Lift" }
    ],
    faqs: [
      { question: "Can we sync with Channel Managers?", answer: "Yes, we configure integrations via API webhooks to sync room counts." }
    ]
  },
  "manufacturing-erp": {
    title: "Manufacturing ERP Solutions",
    headline: "Supply Chain & Factory Inventory ERP Systems",
    subtext: "We build specialized ERP systems to automate factory assembly lines, track raw material levels, manage purchase orders, and monitor staff workflows.",
    geoTitle: "Factory Digitalization in Bihar",
    geoContent: "We serve processing mills, manufacturing units, and factories in Patna, Barauni, and Bihar with cloud-native dashboards.",
    problems: ["Excel sheet formula errors causing inventory delays.", "Lack of data audits for supplier shipments."],
    subServices: [
      { title: "Raw Material Alerts", icon: "lucide:alert-triangle", desc: "Auto-notification when material levels drop below re-order thresholds." },
      { title: "Supplier Log Boards", icon: "lucide:truck", desc: "Track pending orders, delivery dates, and quality check notes." }
    ],
    solutions: ["Real-time supply chain analytics", "Secure Role-Based Access Controls"],
    benefits: [
      { title: "Zero Stockouts", description: "Smart logs ensure raw materials are ordered ahead of production stages.", icon: "lucide:package", stat: "99%", statLabel: "Stock Availability" }
    ],
    faqs: [
      { question: "Can we track multiple warehouses?", answer: "Yes, our multi-tenant database handles transfers across branches easily." }
    ]
  },
  "real-estate-crm": {
    title: "Real Estate CRM Systems",
    headline: "Property Pipeline & Lead Tracker CRM Systems",
    subtext: "We design and build custom Real Estate CRM systems. Track property site visits, follow up on customer installments, and manage builder projects in a single interface.",
    geoTitle: "Real Estate Tech in Patna & Bihar",
    geoContent: "We help property builders and agencies in Bihar manage residential launches and coordinate sales leads.",
    problems: ["Sales executives forgetting to follow up with hot buyers.", "Scattered property brochures and pricing tables."],
    subServices: [
      { title: "Lead Allocation Sorter", icon: "lucide:users-2", desc: "Auto-route new website inquiries to active sales agents." },
      { title: "Installment Calculators", icon: "lucide:calculator", desc: "Calculate payment milestone timelines and auto-send billing alerts." }
    ],
    solutions: ["Centralized builder database dashboard", "WhatsApp API billing integrations"],
    benefits: [
      { title: "Faster Follow-ups", description: "Immediate auto-assignments reduce lead reply delays to minutes.", icon: "lucide:phone-call", stat: "10x", statLabel: "Reply Speed Lift" }
    ],
    faqs: [
      { question: "Can we upload floor plans and brochures?", answer: "Yes, the CRM includes secure cloud storage to manage project assets." }
    ]
  }
};
