// app/layout.js
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import FooterSection from "./Components/FooterSection";
import Script from "next/script";
import ChatbotLoader from "./Components/ChatbotLoader";
import FloatingCTA from "./Components/FloatingCTA";


/* Inter – Body / UI */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* Space Grotesk – Headings / Brand
   display:"optional" = browser uses fallback if font isn't ready in 100ms,
   never swaps → eliminates the font-swap LCP event at ~3.5s */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "optional",
});



export const metadata = {
  metadataBase: new URL("https://webfloratechnologies.com"),
  title: "Software Company in Patna, Bihar | Webflora Technologies",
  description: "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software, website development, mobile apps, and digital marketing.",
  keywords: "software company in patna, software company in bihar, software company in india, website company in patna, mobile app company, digital marketing, AI automation, Webflora Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Software Company in Patna, Bihar | Webflora Technologies",
    description: "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software, website development, mobile apps, and digital marketing.",
    url: "https://webfloratechnologies.com",
    siteName: "Webflora Technologies",
    images: [
      {
        url: "/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora Technologies - Software Company in Patna, Bihar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Company in Patna, Bihar | Webflora Technologies",
    description: "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software, website development, mobile apps, and digital marketing.",
    site: "@WebfloraTech",
    images: ["/title-logo.png"],
  },
  icons: {
    icon: "/title-logo.png",
    shortcut: "/title-logo.png",
    apple: "/title-logo.png",
  },
  verification: {
    google: "Fv5XfPtCaUGzUYkoKxfONROTTTBp6pKHW93z5JgG78k",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="sitemap" type="application/xml" href="https://webfloratechnologies.com/sitemap.xml" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7DCZZDRV1R"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7DCZZDRV1R');
        `}
      </Script>
      <body
        suppressHydrationWarning
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#ff3b00] focus:text-white focus:rounded-md focus:font-bold">
          Skip to main content
        </a>
        {/* Banner and Nav */}
        <Navbar />
        <FloatingCTA />
        <main id="main-content">
          {children}
        </main>

        {/* Global SEO Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://webfloratechnologies.com/#organization",
                  "name": "Webflora Technologies",
                  "url": "https://webfloratechnologies.com",
                  "logo": "https://webfloratechnologies.com/webflora-logo.svg",
                  "image": "https://webfloratechnologies.com/webflora-logo.svg",
                  "description": "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software, website development, mobile apps, and digital marketing.",
                  "telephone": "+918540814729",
                  "email": ["hello@webfloratechnologies.com", "info@webfloratechnologies.com"],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri",
                    "addressLocality": "Patna",
                    "addressRegion": "Bihar",
                    "postalCode": "800016",
                    "addressCountry": "IN"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/webfloratechnologies/",
                    "https://www.instagram.com/webflora.technologies",
                    "https://www.facebook.com/profile.php?id=61580014195502"
                  ],
                  "founder": [
                    { "@type": "Person", "@id": "https://webfloratechnologies.com/#founder" },
                    { "@type": "Person", "@id": "https://webfloratechnologies.com/#cofounder" }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://webfloratechnologies.com/#website",
                  "url": "https://webfloratechnologies.com",
                  "name": "Webflora Technologies",
                  "description": "Premium software, website, and mobile app development company in Patna, Bihar.",
                  "publisher": {
                    "@type": "Organization",
                    "@id": "https://webfloratechnologies.com/#organization",
                    "name": "Webflora Technologies",
                    "url": "https://webfloratechnologies.com"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://webfloratechnologies.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://webfloratechnologies.com/#founder",
                  "name": "Shashank Manohar",
                  "jobTitle": "Co-Founder & CEO",
                  "url": "https://webfloratechnologies.com/about",
                  "image": "https://webfloratechnologies.com/team/shashank.jpg",
                  "worksFor": {
                    "@type": "Organization",
                    "@id": "https://webfloratechnologies.com/#organization",
                    "name": "Webflora Technologies",
                    "url": "https://webfloratechnologies.com"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/shashank-manohar-429a1b1b4/",
                    "https://www.instagram.com/shashank__arr?igsh=MXM3NmhvYzh5cWlkZQ=="
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://webfloratechnologies.com/#cofounder",
                  "name": "Amitesh Kumar",
                  "jobTitle": "Co-Founder & UI Designer",
                  "url": "https://webfloratechnologies.com/about",
                  "image": "https://webfloratechnologies.com/team/amitesh.jpg",
                  "worksFor": {
                    "@type": "Organization",
                    "@id": "https://webfloratechnologies.com/#organization",
                    "name": "Webflora Technologies",
                    "url": "https://webfloratechnologies.com"
                  },
                  "sameAs": [
                    "https://www.instagram.com/amitesh.kumarr?igsh=MXNqdTZ5aTRmbXc0eA=="
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://webfloratechnologies.com/#webpage",
                  "url": "https://webfloratechnologies.com",
                  "name": "Website Development Company in Patna",
                  "isPartOf": {
                    "@id": "https://webfloratechnologies.com/#website"
                  },
                  "datePublished": "2024-05-19T00:00:00+05:30",
                  "dateModified": "2026-07-02T09:00:00+05:30",
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["#main-content h1", "#main-content p"]
                  }
                }
              ]
            })
          }}
        />

        {/* Footer Section */}
        <FooterSection />

        {/* Chatbot — loads only after user interaction (facade pattern) */}
        <ChatbotLoader />

        {/* Mobile chatbot position override */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            #ai-chatbot-root-container { bottom: 20px !important; right: 20px !important; }
          }
        ` }} />
      </body>
    </html>
  );
}
