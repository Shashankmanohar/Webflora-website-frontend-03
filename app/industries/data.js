import Link from "next/link";

export const industriesData = {
  "healthcare": {
    title: "Healthcare",
    headline: "Transforming Patient Care Through Digital Innovation",
    subtext: "Webflora Technologies builds compliant, high-performance digital solutions for clinics, hospitals, and telemedicine platforms. We design secure patient portals, appointment scheduling engines, and automated health record workflows starting from ₹35,000.",
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
      { title: "Clinic Management Software", icon: "lucide:activity", desc: "Streamline patient check-ins, doctor schedules, digital prescriptions, and billing in one unified interface." },
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
    subtext: "Webflora Technologies builds conversion-focused property listing websites, CRM integrations, interactive local maps, and WhatsApp-driven lead qualification engines starting from ₹35,000.",
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
    subtext: "Webflora Technologies builds high-converting e-commerce web applications, offline-to-online POS systems, and automated customer marketing flows starting from ₹35,000.",
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
      { title: "Next.js E-Commerce Sites", icon: "lucide:shopping-bag", desc: "Build sub-second loading online storefronts with React, static rendering, and conversion-focused checkout starting from ₹35,000." },
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
  }
};
